<template>
  <el-dialog v-model="state.visible" title="工作流" draggable :modal="false">

    <el-form ref="form" :model="state.form" label-width="80px" style="padding-bottom: 20px;">
      <ElFormItem label="公共描述">
        <ElInput v-model="state.form.common" placeholder="请输入描述"></ElInput>
      </ElFormItem>
      <ElFormItem label="关键词">
        <el-input v-model="state.keywords" type="textarea" :rows="3" placeholder="请输入关键词，每行对应一条"
          style="flex: 1; margin-right: 20px;" />
        <div style="display: flex; flex-direction: column; justify-content: center; gap: 10px;">
          <el-button @click="addKeywords" type="primary">插入表格</el-button>
        </div>
      </ElFormItem>
    </el-form>

    <div style="margin-bottom: 10px;">
      <el-button @click="addRow" type="primary">
        <el-icon>
          <Plus />
        </el-icon>
        <span>新增一条</span>
      </el-button>
      <el-button @click="clearTable">
        <el-icon>
          <Delete />
        </el-icon>
        <span>清空表格</span>
      </el-button>
    </div>

    <el-table :data="state.form.list" :border="true">

      <el-table-column label="描述" align="center">
        <template #default="{ row }">
          <el-input v-model="row.desc" />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200px" align="center">
        <template #default="{ $index }">
          <el-button type="danger" @click="deleteRow($index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <template #footer>
      <el-button type="primary" @click="start" :loading="state.running">
        {{ state.running ? '运行中...' : '确定' }}
      </el-button>
      <el-button v-if="state.running" @click="stop" type="danger">停止</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { waitForElement } from '@/util/util'
import { setReactInputValue } from '@/util/react-util'
import moment from 'moment'
import { Plus, Delete } from '@element-plus/icons-vue'

const state = reactive({
  visible: false,
  // 添加关键词字段
  keywords: '',
  form: {
    common: '帮我生成图片：图片风格为「电影写真」，比例 「9:16」',
    list: [] as { desc: string }[],
  },
  // 添加运行状态和停止标志
  running: false,
  shouldStop: false
})

const sleep = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms))

// 添加关键词到列表的方法
const addKeywords = () => {
  if (state.keywords.trim()) {
    const keywordsArray = state.keywords.split('\n').filter(keyword => keyword.trim() !== '');
    keywordsArray.forEach(keyword => {
      state.form.list.push({
        desc: keyword.trim()
      });
    });
    state.keywords = ''; // 清空输入框
  }
}

const start = async () => {
  // 关闭弹窗
  state.visible = false;

  // 设置运行状态
  state.running = true;
  state.shouldStop = false;

  try {
    for (const item of state.form.list) {
      // 检查是否需要停止
      if (state.shouldStop) break;

      await startDraw(item.desc)
    }
  } finally {
    // 重置运行状态
    state.running = false;
    state.shouldStop = false;
  }
}

// 添加停止方法
const stop = () => {
  state.shouldStop = true;
}

const startDraw = async (desc: string) => {
  if (!desc) return;
  // 点击新建会话按钮
  await waitForElement('[data-testid="create_conversation_button"]').then(ele => ele.click())
  await sleep()

  // 输入描述
  await waitForElement('[data-testid="chat_input_input"]').then(ele => {
    setReactInputValue(ele as HTMLInputElement, state.form.common + '\n' + desc)
  })
  await sleep()

  // 点击发送按钮
  await waitForElement('[data-testid="chat_input_send_button"]').then(ele => ele.click())

  // 获取图片元素
  const imgList = await waitForNewImageLoaded();
  await sleep()

  // 修改标题
  await changeTitle(desc)
  await sleep()

  // 点击每一个图片 下载大图
  for (const thumb of imgList) {
    thumb.click()
    await waitForAttrChange('[data-testid="in_painting_picture"]', ele => ele?.getAttribute('src') || '').then(src => {
      const filename = `${desc}_${moment().format('MMDD_HHmmss')}.png`;
      downloadImage(src, filename);
    })
    await sleep()
  }
}


/**
 * 等待新的图片消息加载完成
 * @param initialCount 初始已存在的图片数量
 * @param timeout 超时时间（秒）
 * @returns 最后一张图片元素或 null（超时未找到）
 */
const waitForNewImageLoaded = async (timeout = 60): Promise<HTMLElement[]> => {
  const initialCount = document.querySelectorAll('[data-testid="message_image_content"]').length;
  for (let i = 0; i < timeout; i++) {
    const imgList = document.querySelectorAll('[data-testid="message_image_content"]');

    // 检查是否有新增的图片容器，并检查其中是否包含 img 元素
    if (imgList.length > initialCount) {
      const lastImgContainer = imgList[imgList.length - 1];
      const imgs = lastImgContainer.querySelectorAll('img[alt="image"]') as NodeListOf<HTMLElement>;

      if (imgs.length > 0) {
        return Array.from(imgs);
      }
    }

    await sleep(1000);
  }

  throw new Error('Timeout: No new image loaded.');
};


const waitForAttrChange = async (selector: string, attrGetter: (ele: HTMLElement | null) => string, timeout = 60): Promise<string> => {
  const attr = attrGetter(document.querySelector(selector));
  for (let i = 0; i < timeout; i++) {
    const newAttr = attrGetter(document.querySelector(selector));
    if (newAttr !== attr) {
      return newAttr;
    }
    await sleep(1000);
  }

  throw new Error('Timeout: Image src not updated.');
};


/**
 * 下载图片到本地
 * @param url 图片URL
 * @param filename 文件名
 */
const downloadImage = async (url: string, filename: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    console.error('下载图片失败:', error);
  }
};

const changeTitle = async (desc: string) => {
  await waitForElement('.truncate').then(ele => ele.click())
  await waitForElement('[data-testid="edit_conversation_dialog_name_input"]').then(ele => {
    setReactInputValue(ele as HTMLInputElement, desc)
  })
  await sleep()
  await waitForElement('[data-testid="edit_conversation_dialog_confirm_button"]').then(ele => ele.click())
}

const show = () => {
  state.visible = true
}

const addRow = () => {
  state.form.list.push({
    desc: ''
  })
}

const deleteRow = (index: number) => {
  state.form.list.splice(index, 1)
}

const clearTable = () => {
  state.form.list = []
}

defineExpose({
  show,
})
</script>
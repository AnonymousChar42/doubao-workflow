<template>
  <el-dialog v-model="state.visible" title="工作流" draggable :modal="false">

    <el-form ref="form" :model="state.form" label-width="80px">
      <ElFormItem label="名称">
        <ElInput v-model="state.form.name" placeholder="请输入名称"></ElInput>
      </ElFormItem>
      <ElFormItem label="公共描述">
        <ElInput v-model="state.form.common" placeholder="请输入描述"></ElInput>
      </ElFormItem>
    </el-form>


    <el-table :data="state.form.list" :border="true">

      <el-table-column label="描述">
        <template #default="{ row }">
          <el-input v-model="row.desc" />
        </template>
      </el-table-column>
      <el-table-column label="图片">

      </el-table-column>
    </el-table>

    <template #footer>
      <el-button type="primary" @click="start">确定</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { waitForElement } from '@/util/util'
import { setReactInputValue } from '@/util/react-util'
import moment from 'moment'

const state = reactive({
  visible: false,
  form: {
    name: '',
    common: '帮我生成图片：图片风格为「电影写真」，比例 「9:16」',
    list: [
      {
        desc: '秦始皇',
      },
      {
        desc: '屋大维',
      },
    ]
  },
})






const sleep = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms))

const start = async () => {
  for (const item of state.form.list) {
    await startDraw(item.desc)
  }
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

  // 修改标题
  await changeTitle(desc)
  await sleep()

  // 获取图片元素
  const imgList = await waitForNewImageLoaded();
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

defineExpose({
  show,
})

</script>
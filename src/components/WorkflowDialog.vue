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
  await waitForElement('[data-testid="create_conversation_button"]').then(ele => ele.click())
  await sleep()

  await waitForElement('[data-testid="chat_input_input"]').then(ele => {
    setReactInputValue(ele as HTMLInputElement, state.form.common + '\n' + state.form.list[0].desc)
  })
  await sleep()

  await waitForElement('[data-testid="chat_input_send_button"]').then(ele => ele.click())
  await sleep()

}






// class 




const show = () => {
  state.visible = true
}

defineExpose({
  show,
})

</script>
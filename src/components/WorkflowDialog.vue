<template>
  <el-dialog v-model="state.visible" title="工作流">

    <el-form ref="form" :model="state.form" label-width="80px">
      <ElFormItem label="名称">
        <ElInput v-model="state.form.name" placeholder="请输入名称"></ElInput>
      </ElFormItem>
      <ElFormItem label="公共描述">
        <ElInput v-model="state.form.common" placeholder="请输入描述"></ElInput>
      </ElFormItem>
    </el-form>


    <el-table :data="state.data" :border="true">

      <el-table-column label="描述">
        <template #default="{ row }">
          <el-input v-model="row.desc" />
        </template>
      </el-table-column>
      <el-table-column label="图片">

      </el-table-column>
    </el-table>

    <template #footer>
      <el-button type="primary" @click="state.visible = false">确定</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { waitForElement } from '@/util/util'


const state = reactive({
  visible: false,
  form: {
    name: '',
    common: '帮我生成图片：图片风格为「电影写真」，比例 「9:16」',
  },
  data: [
    {
      desc: '秦始皇',
    },
    {
      desc: '吴大维',
    },
  ],
})





const newChat = () => {
  waitForElement('[data-testid="create_conversation_button"]').click()
}









const show = () => {
  state.visible = true
}

defineExpose({
  show,
})

</script>
<template>
  <el-button @click="handleClick">批量</el-button>
  <WorkflowDialog ref="dialogRef" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WorkflowDialog from './WorkflowDialog.vue'
const dialogRef = ref<InstanceType<typeof WorkflowDialog>>()

const handleClick = () => {
  dialogRef.value?.show()
}

</script>

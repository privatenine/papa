<template>
  <el-dialog :visible.sync="visible" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false">
    <el-result icon="success" title="提交成功" sub-title="提交信息">
      <template #extra>
        <el-descriptions :column="1" border>
          <el-descriptions-item label="字段1">{{ data.fieldOne }}</el-descriptions-item>
          <el-descriptions-item label="字段2">{{ data.fieldTwo }}</el-descriptions-item>
        </el-descriptions>
      </template>
    </el-result>
    <template #footer>
      <el-button @click="close">ok</el-button>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'NoLoginDialog',
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          fieldOne: '',
          fieldTwo: ''
        }
      }
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false
    }
  },
  watch: {
    show(v) {
      this.visible = v
    }
  },
  methods: {
    close() {
      this.$emit('update:show', false)
    }
  }
}
</script>

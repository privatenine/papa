<template>
  <el-dialog :visible.sync="visible" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false">
    <el-result icon="error" title="提示" sub-title="请登录后再次提交信息"/>
    <template #footer>
      <el-button @click="close">ok</el-button>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'NoLoginDialog',
  props: {
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

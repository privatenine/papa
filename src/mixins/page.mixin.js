export default {
  mounted() {
    this.mixin_initData()
  },
  methods: {
    mixin_onGotoPath(fn) {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$store.dispatch('SetFormData', this.form)
          fn()
        }
      })
    },
    mixin_initData() {
      this.form = this.$store.getters.formData
    }
  }
}

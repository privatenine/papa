<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="字段1" prop="fieldOne">
        <span>{{ form.fieldOne }}</span>
      </el-form-item>
      <el-form-item label="字段2" prop="fieldTwo">
        <span>{{ form.fieldTwo }}</span>
      </el-form-item>
    </el-form>

    <Footer @gotoPath="mixin_onGotoPath" @submit="onSubmit" />

    <NoLoginDialog :show.sync="noLoginDialogVis" />
    <SubmitSuccessDialog :show.sync="submitSuccessDialogVis" :data="form" />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import pageMixin from '@/mixins/page.mixin.js'
import NoLoginDialog from '@/components/NoLoginDialog.vue'
import SubmitSuccessDialog from '@/components/SubmitSuccessDialog.vue'

export default {
  name: 'PageThird',
  components: { Footer, NoLoginDialog, SubmitSuccessDialog },
  mixins: [pageMixin],
  data() {
    return {
      form: {
        fieldOne: '',
        fieldTwo: ''
      },
      noLoginDialogVis: false,
      submitSuccessDialogVis: false
    }
  },
  computed: {
    userName() {
      return this.$store.getters.userInfo.name
    }
  },
  methods: {
    onSubmit() {
      if (!this.valid()) {
        return
      }
      this.submitSuccessDialogVis = true
    },
    valid() {
      if (!this.userName) {
        this.noLoginDialogVis = true
        return false
      }
      if (!this.form.fieldOne || !this.form.fieldTwo) {
        this.$message.closeAll()
        this.$message.error('您的信息填写不完整，请返回相应页面进行完善')
        return false
      }
      return true
    }
  }
}
</script>

<style>

</style>

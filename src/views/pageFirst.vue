<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="字段1" prop="fieldOne">
        <el-input
          v-model="form.fieldOne"
          maxlength="100"
          show-word-limit />
      </el-form-item>
    </el-form>

    <Footer @gotoPath="mixin_onGotoPath" />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import pageMixin from '@/mixins/page.mixin.js'

export default {
  name: 'PageFirst',
  components: { Footer },
  mixins: [pageMixin],
  data() {
    return {
      form: {
        fieldOne: '',
        fieldTwo: ''
      },
      rules: {
        fieldOne: [
          { required: true, message: '请输入字段1', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style>

</style>

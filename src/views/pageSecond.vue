<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="字段1" prop="fieldOne">
        <span>{{ form.fieldOne }}</span>
      </el-form-item>
      <el-form-item label="字段2" prop="fieldTwo">
        <el-input
          v-model="form.fieldTwo"
          :autosize="{ minRows: 2, maxRows: 6 }"
          type="textarea"
          maxlength="300"
          show-word-limit
        />
      </el-form-item>
    </el-form>

    <Footer @gotoPath="mixin_onGotoPath" />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import pageMixin from '@/mixins/page.mixin.js'

export default {
  name: 'PageSecond',
  components: { Footer },
  mixins: [pageMixin],
  data() {
    return {
      form: {
        fieldOne: '',
        fieldTwo: ''
      },
      rules: {
        fieldTwo: [
          { required: true, message: '请输入字段2', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style>

</style>

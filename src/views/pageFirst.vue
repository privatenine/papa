<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="字段1" prop="fieldOne">
        <el-input v-model="form.fieldOne"/>
      </el-form-item>
    </el-form>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'PageFirst',
  components: { Footer },
  data() {
    return {
      form: {
        fieldOne: ''
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

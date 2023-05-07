<template>
  <div class="head">
    <img src="@/assets/logo.png" height="60" alt="papa">
    <span v-if="userName">{{ userName }}</span>
    <el-button v-else type="success" round @click="login">登录</el-button>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  computed: {
    userName() {
      return this.$store.getters.userInfo.name
    }
  },
  methods: {
    login() {
      this.$store.dispatch('Login')
    }
  }
}
</script>

<style lang="css" scoped>
.head{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #EBEBEF;
  margin-bottom: 20px;
}
</style>

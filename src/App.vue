<template>
  <div id="app">
    <Header />
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: { Header }
}
</script>
<style lang="css" scoped>
.main-container{
  max-width: 800px;
  margin: 0 auto;
}
</style>

<template>
  <div class="foot-wrapper">
    <el-button v-if="showBeforeBtn" class="left-btn" type="primary" @click="before">before</el-button>
    <el-button v-if="showNextBtn" class="right-btn" type="success" @click="next">next</el-button>
    <el-button v-if="showSubmitBtn" class="right-btn" type="success" @click="submit">submit</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pathList: ['/pageFirst', '/pageSecond', '/pageThird']
    }
  },
  computed: {
    path() {
      return this.$route.path
    },
    pathIndex() {
      return this.pathList.indexOf(this.path)
    },
    showNextBtn() {
      return ['/pageFirst', '/pageSecond'].includes(this.path)
    },
    showBeforeBtn() {
      return ['/pageSecond', '/pageThird'].includes(this.path)
    },
    showSubmitBtn() {
      return ['/pageThird'].includes(this.path)
    }
  },
  methods: {
    before() {
      if (this.pathIndex === 0) {
        return
      }
      const toPath = this.pathList[this.pathIndex - 1]
      this.$emit('gotoPath', () => {
        this.$router.push({ path: toPath })
      })
    },
    next() {
      if (this.pathIndex === this.pathList.length - 1) {
        return
      }
      const toPath = this.pathList[this.pathIndex + 1]
      this.$emit('gotoPath', () => {
        this.$router.push({ path: toPath })
      })
    },
    submit() {
      this.$emit('submit')
    }
  }
}
</script>

<style lang="css" scoped>
.foot-wrapper{
  background: #FFF;
  position: fixed;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.left-btn{
  float: left;
}
.right-btn{
  float: right;
}
</style>

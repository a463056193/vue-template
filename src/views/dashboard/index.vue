<template>
  <div class="dashboard-container">
    <div class="dashboard-text">welcome: {{ userInfo.username }}</div>
  </div>
</template>

<script>
import { getAttr,setToken,setAttr } from '@/utils/auth'

export default {
  name: 'Dashboard',
  data(){
    return {
      token: '',
      userInfo: {
        id: '',
        age: '',
        username: ''
        //add attr you need here
      }
    }
  },
  created() {
    this.showInfo()
  },
  methods: {
    // get userInfo from cookie
    showInfo() {
        var userStr = getAttr('MAS_userInfo')
        if (userStr) {
          this.userInfo = JSON.parse(userStr)
        }
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

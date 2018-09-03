<template>
  <div>
    <div class="fgl_block_tips">
      <span class="fgl_logo_title"><i class="iconfont">&#xe612;</i>孕产婴智慧医疗平台</span>
      <ul class="fgl_operate_btn">
        <li :click="windowMin()"><img src="../../assets/hospital_web/min-wind.png" alt="最小化"/></li>
        <li :click="windowMax()"><img src="../../assets/hospital_web/enlarge.png" alt="最大化"/></li>
        <li :click="windowClose()"><img src="../../assets/hospital_web/Close.png" alt="关闭"/></li>
      </ul>
    </div>
    <div class="topheader">
      <div class="left">
        <span>{{user.name}}, 您好！今天是{{getCurrentDate('MM月dd日')}}，欢迎使用孕产婴智慧医疗平台。</span>
      </div>
      <div class="fgl_headerRight">
        <span style="width: auto;margin-right: 15px;">{{user.organization.name}}</span>
        <span class="fgl_avatar_imgbox">
                    <img src="../../assets/hospital_web/avatar.png" alt=""/>
                </span>
        <div @click="popWindow()" :title="user.organization.name" class="fgl_headerRightName" style="cursor: pointer">{{user.name}}</div>
        <div @click="popWindow()" class="arrow-bottom2 arrow-bottom-position"></div>
        <div class="fgl_headerLine2"></div>
        <div class="fgl_headerRightExit" @click="logoutFn()"  style="cursor: pointer">注销</div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/utils/commonfn'
import { getRemoteCurrentDate, logout } from '@/api/common'
export default {
  data () {
    return {
      user: this.$store.state.user.user
    }
  },
  methods: {
    getCurrentDate (format, refresh) {
      format = format || 'yyyy-MM-dd'
      return formatDate(getRemoteCurrentDate(refresh), format)
    },
    windowMin () {
    },
    windowClose () {
    },
    windowMax () {
    },
    popWindow () {
    },
    logoutFn () {
      logout().then(response => {
        if (response.data.errorcode === 0) {
          this.$message({
            message: '退出成功',
            type: 'success'
          })
          this.$router.push({ path: '/login' })
        } else {
          this.$message({
            message: response.data.errormsg,
            type: 'error'
          })
        }
      }).catch(error => {
        this.$message({
          message: error.message,
          type: 'error'
        })
      })
    }
  },
  created () {
  },
  destroyed () {
  }
}
</script>
<style rel="stylesheet/css" lang="css" scoped>
  .topheader {
    background: #5fa9e0;
    padding: 8px 10px;
    position: relative;
    height: 90px;
    overflow: hidden;
    display: block;
    padding-top: 36px;
    padding-bottom: 5px;
  }
  .topheader .left {
    display: inline-block;
    float: left;
  }
  .topheader span {
    color: #fff;
    height: 51px;
    line-height: 51px;
    font-size: 16px;
  }
  .topheader .left span {
    margin-left: 40px;
  }
  .topheader .fgl_headerRight {
    float: right;
    height: 100%;
    line-height: 51px;
    font-size: 16px;
    color: #fff;
  }
  .fgl_headerRight>span {
    display: block;
    width: 24px;
    height: 24px;
    margin: 0 12px 0 0;
  }
  .fgl_headerRight>span img {
    width: 100%;
    border-radius: 50%;
    vertical-align: middle;
  }
</style>

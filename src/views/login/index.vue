<template>
  <!--登录页面-->
  <div class="fgl_register_container">
    <div class="fgl_operate_box" >
      <div style="-webkit-app-region: drag;display: inline-block;width: 80%;height: 100%;"></div>
      <ul class="fgl_operate_btn2">
        <li @click="windowMin()" id="min" ><img src="../../assets/hospital_web/min-wind.png" alt="最小化"/></li>
        <li @click="windowClose()" id="close"><img src="../../assets/hospital_web/Close.png" alt="关闭"/></li>
      </ul>
    </div>
    <!--系统号和版本 start-->
    <div  class="fgl_info_warp" style="-webkit-app-region: drag;">
      <div class="fgl_register_system" >
        <i class="iconfont fgl_logo_register">&#xe612;</i
        ><span class="fgl_system_title">孕产婴智慧医疗平台</span></div>
    </div>
    <!--系统号和版本 end-->
    <div class="fgl_register_main">
      <div class="fgl_register_choose">
        <div class="fgl_moiety_reg " @click="swtchLogin(1)" :class="[loginType==2 ? 'fgl_moiety_choose':'']" id="loginByPhoneTag">验证码登录</div>
        <div class="fgl_moiety_reg" @click="swtchLogin(2)" :class="[loginType==1 ? 'fgl_moiety_choose':'']" id="loginByAccountTag">密码登录</div>
      </div>
      <div class="fgl_portrait_case" style="cursor: pointer;"></div>
      <div class="fgl_replace_inner">
        <!--手机登录 start-->
        <form v-if="loginType == 1" class="form-validation login-form" name="loginForm1" role="login" >
          <div class="fgl_frame_warp" id="loginByPhone" >
            <div class="fgl_phone_box">
              <div class="fgl_phone_number">
                <div class="fgl_phone_img">
                  <img src="../../assets/hospital_web/icon_phone3.png" alt="">
                </div>
                <input type="text" class="fgl_login_input" name="phone" v-model="loginForm.phone" placeholder="请输入登录手机号" id="phone"  maxlength="11" required/>
                <span id="sendvercode" @click="sendVerCode(phone)">发送验证码</span>
              </div>
            </div>
            <div class="fgl_vercode_box">
              <div class="fgl_phone_img">
                <img src="../../assets/hospital_web/icon_pass3.png" alt="">
              </div>
              <input type="text" class="fgl_login_input_pswd" name="vercode" v-model="loginForm.vercode"  maxlength="6"  placeholder="请输入验证码" id="vercode" required>
            </div>
            <button class="fgl_login_btn fgl_login_btns login" @click="handleLogin('loginByPhone')" style="color: #fff;" type="button" >登&nbsp;&nbsp;录</button>
          </div>
        </form>
        <!--手机号登录 end-->
        <!--密码登录 start-->
        <form v-if="loginType == 2" class="form-validation login-form" name="loginForm" role="login" ng-submit="login('loginByAccount')" novalidate>
          <div class="fgl_frame_warp" id="loginByAccount" >
            <div class="fgl_account_box">
              <div class="fgl_phone_img">
                <img src="../../assets/hospital_web/icon_phone3.png" alt="">
              </div>
              <input type="text" class="fgl_login_input_pswd"  v-model="loginForm.account"  placeholder="请输入登录帐号" autocomplete="off" name="account"  id="account" maxlength="15" required/>
            </div>
            <div class="fgl_vercode_box">
              <div class="fgl_phone_img">
                <img src="../../assets/hospital_web/icon_pass3.png" alt="">
              </div>
              <input type="password" class="fgl_login_input_pswd" v-model="loginForm.password" maxlength="30" placeholder="请输入密码" autocomplete="off" name="password" id="password" required/>
            </div>
            <button class="fgl_login_btn fgl_login_btns" @click="handleLogin('loginByAccount')" style="color: #fff;" type="button">登&nbsp;&nbsp;录</button>
          </div>
        </form>
        <!--密码登录 end-->
      </div>
    </div>
    <div class="fgl_register_versions">
      <span class="left">平台版本V<span>{{versions}}</span> &nbsp;&nbsp;&nbsp;龙源美生医疗投资（北京）有限公司</span>
      <span class="right">联系客服：4008-121-909</span>
    </div>
  </div>
</template>

<script>
export default {
  components: { },
  name: 'login',
  data () {
    return {
      versions: this.$store.state.configs.version,
      loginType: 2, // 用于登录功能切换
      loginForm: {
        password: '', // 密码
        account: '', // 用户账户
        phone: '', // 手机号
        vercode: '' // 验证码
      },
      loginRules: {// 表单规则
        username: [{ required: true, trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur' }]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false
    }
  },
  methods: {
    windowMin () {
    },
    windowClose () {
    },
    swtchLogin (node) {
      this.loginType = node
    },
    sendVerCode () {
    },
    handleLogin (type) {
      let params = {}
      if (type === 'loginByAccount' && this.loginType === 2) {
        if (!this.loginForm.account) {
          this.$message({
            message: '用户账户不能为空',
            type: 'error'
          })
          return false
        }
        if (!this.loginForm.password) {
          this.$message({
            message: '用户密码不能为空',
            type: 'error'
          })
          return false
        }
        params['account'] = this.loginForm.account
        params['password'] = this.loginForm.password
        this.$store.dispatch('LoginByUser', params).then(() => {
          this.$store.dispatch('GetUserInfo', params).then(() => {
            this.$store.dispatch('GenerateRoutes', this.$store.state.user.userPermissions).then(() => {
              if (this.$store.state.permission.addRouters && this.$store.state.permission.haveConfigRouter) {
                this.$router.addRoutes(this.$store.state.permission.addRouters)
                this.$router.push({ path: '/dashboard' })
              }
            }).catch(function (err) {
              console.log(err)
            })
          }).catch(function (err) {
            this.$message({
              message: err.message,
              type: 'error'
            })
          })
        }).catch((err) => {
          this.$message({
            message: err.message,
            type: 'error'
          })
        })
        params = null
      }
    }
  },
  created () {
  },
  destroyed () {
    // window.removeEventListener('hashchange', this.afterQRScan)
  }
}
</script>
<style rel="stylesheet/css" lang="css" scoped>
  /*登录页 start*/
  .fgl_register_container{
    width: 100%;
    height: 100%;
    min-width: 820px;
    min-height: 556px;
    max-width: 820px;
    max-height: 556px;
    margin:0px auto;
    background: #00C9FF;
    background: linear-gradient(to bottom, #67beff , #73e5cc);
    background: url('../../assets/hospital_web/landpage_GG@2x.png');
    background-size: cover;
    position: relative;
    overflow: hidden;

  }
  .fgl_register_main{
    width: 40%;
    height: 62%;
    max-height: 330px;
    max-width: 330px;
    background:rgba(255,255,255,1);
    border-radius: 6px;
    box-shadow: 0px 6px 15px rgba(106, 144, 192, 0.5);
    margin: 25px auto 30px;
    position: relative;
  }
  .fgl_register_choose{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .fgl_moiety_reg{
    width: 50%;
    height: 100%;
    float: left;
    color: #68bcfa;
    font-size: 18px;
    cursor: pointer;
  }
  .fgl_moiety_reg:nth-of-type(1){
    border-radius: 6px 0 3px 0;
  }
  .fgl_moiety_reg:nth-of-type(2){
    border-radius: 0  6px 0 3px;
  }
  .fgl_moiety_choose{
    background: #68bcfa;
    color: #fff;
  }
  .fgl_portrait_case{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 22px auto 28px;
    background: white;
    text-align: center;
    background-image: url('../../assets/hospital_web/login_radius.png');
  }
  .fgl_portrait_logo{
    display: inline-block;
    height: 46px;
    width: 46px;
    line-height: 46px;
    font-size: 36px;
    text-align: center;
    color: #fff;
    border-radius: 50%;
    background: #9ed6ff;
    position: relative;
    top: 2px;
  }
  .fgl_replace_inner{
    position: relative;
    height: auto;
  }
  .fgl_frame_warp{
    width: 100%;
    height: auto;
    padding: 0 29px;
    box-sizing: border-box;
    position: relative;
    top: 0;
    left: 0;
  }
  .fgl_frame_warp:after{
    visibility: hidden;
    content: "";
    display: block;
    clear: both;
  }
  .fgl_phone_box,.fgl_vercode_box,.fgl_login_btn,.fgl_account_box{
    width: 100%;
    height: 38px;
    position: relative;
  }
  .fgl_vercode_box{
    margin: 7px 0 30px 0;
  }
  .fgl_account_box{
    margin-bottom: 7px;
  }
  .fgl_phone_number{
    width: 100%;
    height: 100%;
    float: left;
  }
  .fgl_phone_number>span {
    color: #68bcfa;
    font-size: 12px;
    display: inline-block;
    float: right;
    position: relative;
    top: -29px;
    right: 10px;
    border-left: 1px solid #bababa;
    padding-left: 5px;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
    width: 70px;
    text-align: center;
  }
  .fgl_send_psword,
  .fgl_login_btn{
    background: #68bcfa;
    border-radius: 5px;
    float: right;
    font-size: 19px;
    color: #fff;
    text-align: center;
    line-height: 38px;
    cursor: pointer;
  }
  .fgl_login_btns{
    border:none;
    outline:none;
    cursor: pointer;
    margin-bottom: 30px;
  }
  .fgl_login_btns:hover {
    background: #4bb1fc;
  }
  .fgl_send_psword{
    width: 128px;
    height: 100%;
  }
  .fgl_login_input,.fgl_login_input_pswd{
    width: 100%;
    height: 100%;
    padding-left: 40px;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: none;
    vertical-align: top;
    border: 1px solid #bababa;
    border-radius:5px;
    background: none;
    outline: none!important;
    font-size: 12px;
  }
  .fgl_login_input_pswd:focus{
    border: 1px solid #68bcfa;
    border-radius:5px;
  }
  .fgl_login_input:focus{
    border: 1px solid #68bcfa;
    border-radius:5px;
  }
  .fgl_login_input_pswds{
    width: 100%!important;
    height: 100%!important;
    padding-left: 40px!important;
    box-sizing: border-box!important;
    border-radius: 5px!important;
    box-shadow: none!important;
    vertical-align: top!important;
    border-radius:5px!important;
    background: none!important;
    outline: none!important;
    border-radius:5px!important;
    font-size: 14px;
  }
  .login-form input:focus {
    border: 1px solid #68bcfa !important;
  }
  .fgl_phone_img{
    width: 20px;
    height: 20px;
    position: absolute;
    left: 12px;
    top: 50%;
    margin: -10px 0;
    overflow: hidden;
  }
  .fgl_phone_img img{
    width: 100%;
  }
  .fgl_info_warp{
    width:100%;
    height: auto;
    text-align: center;
    margin-top: 7px;
  }
  .fgl_register_system{
    color: #fff;
    font-size: 33px;
    text-align: center;
    width: auto;
    height: auto;
    display: inline-block;
    margin: 0 auto;
  }
  .fgl_register_versions{
    color: rgba(255, 255, 255, 0.8);
    position: absolute;
    bottom: 10px;
    font-size: 14px;
    width: 100%;
  }
  .fgl_register_versions .left {
    float: left;
    padding-left: 20px;;
  }
  .fgl_register_versions .right {
    float: right;
    padding-right: 20px;;
  }
  .fgl_operate_box{
    width: 100%;
    height: 36px;
  }
  .fgl_operate_group{
    float: right;
    margin: 0;
    padding: 0;
    margin-top: 20px;
  }
  .fgl_operate_group li{
    float: left;
    line-height: 0;
    margin-right: 24px;
    width: 16px;
    height: 16px;
    overflow: hidden;
    cursor: pointer;
  }
  .fgl_operate_group li img{
    width: 100%;
    opacity: .7;
  }
  .fgl_operate_group li:hover img{
    opacity: 1;
  }
  .fgl_register_loginwarp{
    width: 35px;
    height: auto;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
  }
  .fgl_register_loginwarp img{
    width: 100%;
  }
  .fgl_system_title{
    margin-left: 9px;
    display: inline-block;
    margin-top: 5px;
  }
  .fgl_logo_register{
    font-size: 45px;
    display: inline-block;
    vertical-align: middle;
    padding-bottom: 5px;
  }
  /*登录页 end*/
</style>

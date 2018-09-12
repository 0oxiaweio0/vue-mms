<template>
  <section class="fgl_content">
    <div class="fgl_two_examination">
      <div class="fgl_PregnantWomenTitle"><span>欢迎使用孕产婴智慧医疗平台-孕产妇围产管理</span></div>
      <div class="fgl_two_contentBox">
       <!-- <div ng-if="configs.maternityClinic.workbenck.showJSYZ[user.organization.id]" class="lyms-col-sm-4 lyms-col-md-4 lyms-col-lg-3">
          <div class="fgl_five_container">
            <div class="fgl_five_md4">末次月经</div>
            <div class="fgl_five_LineMd4"></div>
            <input ng-model="$parent.lastMenstrualPeriod"  date-range-picker="now-365" required readonly type="text" placeholder="请选择末次月经" class="fgl_five_Input80 " style="border:none;width: 100% !important;padding-left: 85px !important;background-position: 80px !important;"/>
            <span class="fgl_five_endOne4"><div class="fgl_five_rightLine4"></div>{{$parent.__yz.yzFlag ? "孕周:" + $parent.__yz.text : $parent.__yz.text ? $parent.__yz.text : "孕周:-周-天"}}</span>
          </div>
        </div>
        <div  class="riskMsg" id="riskMsg" ng-click="goRiskManager()" style="display: none"></div>
        <div class="fgl_five_chFc">
          <div class="fgl_sev_work">
            <div class="fgl_workbench">
              <ul class="fgl_model_box">
                <li ng-if="hasPermission('app.maternityClinic.gravida.archives')" ng-click="go('app.maternityClinic.gravida.archives')" class="fgl_model">
                  <label ><i class="iconfont fgl_workbench_icon">&#xe604;</i></label>
                  <span>孕妇建档</span>
                </li>
                <li ng-if="hasPermission('app.maternityClinic.prenatal.checkup')" ng-click="go('app.maternityClinic.prenatal.checkup')" class="fgl_model">
                  <label ><i class="iconfont fgl_workbench_icon">&#xe605;</i></label>
                  <span>产前检查</span>
                </li>
                <li ng-if="hasPermission('app.maternityClinic.screening')" ng-click="go('app.maternityClinic.screening')" class="fgl_model">
                  <label ><i class="iconfont fgl_workbench_icon">&#xe609;</i></label>
                  <span>产前筛查</span>
                </li>
                <li ng-if="hasPermission('app.maternityClinic.maternal')" ng-click="go('app.maternityClinic.maternal.childbirthManage')" class="fgl_model">
                  <label ><i class="iconfont fgl_workbench_icon">&#xe606;</i></label>
                  <span>产妇分娩</span>
                </li>
                <li ng-if="hasPermission('app.maternityClinic.leaveHospital')" ng-click="go('app.maternityClinic.leaveHospital')" class="fgl_model">
                  <label ><i class="iconfont fgl_workbench_icon">&#xe62d;</i></label>
                  <span>出院小结</span>
                </li>
                <li ng-if="hasPermission('app.maternityClinic.chfc')" ng-click="go('app.maternityClinic.chfc')" class="fgl_model">
                  <label ><i class="iconfont fgl_workbench_icon">&#xe608;</i></label>
                  <span>产后复查</span>
                </li>

                <li ng-if="hasPermission('app.maternityClinic.gravidaManager')" class="fgl_mutil">
                  <div ng-click="go('app.maternityClinic.gravidaManager')" class="fgl_work_ico">
                    <div class="fgl_work_line"></div>
                    <label ><i class="iconfont fgl_workbench_icon">&#xe60d;</i></label>
                    <span>孕产妇管理</span>
                  </div>
                  <div class="fgl_work_menu">
                    <ul class="fgl_work_title">
                      <li><a ng-click="go('app.maternityClinic.gravidaManager',{showTagsNo:1})">高危孕妇管理</a></li>
                      <li><a ng-click="go('app.maternityClinic.gravidaManager',{showTagsNo:2})">全部孕妇管理</a></li>
                      <li><a ng-click="go('app.maternityClinic.gravidaManager',{showTagsNo:3})">全部产妇管理</a></li>
                    </ul>

                  </div>
                </li>

                <li ng-if="hasPermission('app.maternityClinic.referral')" class="fgl_mutil">
                  <div ui-sref="app.maternityClinic.referral" class="fgl_work_ico">
                    <div class="fgl_work_line"></div>
                    <label ><i class="iconfont fgl_workbench_icon">&#xe60e;</i></label>
                    <span>高危转诊</span>
                  </div>
                  <div class="fgl_work_menu">
                    <ul class="fg_title_two">
                      <li><a ng-click="go('app.maternityClinic.referral',{showTagsNo:1})" >转出孕产妇</a></li>
                      <li><a ng-click="go('app.maternityClinic.referral',{showTagsNo:2})" >转入孕产妇</a></li>
                    </ul>
                  </div>
                </li>
                <li ng-if="hasPermission('app.maternityClinic.crisisManager')" ng-click="go('app.maternityClinic.crisisManager')" class="fgl_model">
                  <label ><i class="iconfont fgl_workbench_icon">&#xe614;</i></label>
                  <span>危急管理</span>
                </li>

                <li ng-if="hasPermission('app.maternityClinic.postpartumFollowManager')" ng-click="go('app.maternityClinic.postpartumFollowManager')" class="fgl_model">
                  <label ><i class="iconfont fgl_workbench_icon">&#xe632;</i></label>
                  <span>产后访视管理</span>
                </li>

                &lt;!&ndash;<li ng-if="hasPermission('app.maternityClinic.crisisManager')" ng-click="go('app.maternityClinic.makeHospitalManager.activeService')" class="fgl_model">&ndash;&gt;
                &lt;!&ndash;<label ><i class="iconfont fgl_workbench_icon">&#xe625;</i></label>&ndash;&gt;
                &lt;!&ndash;<span>住院管理</span>&ndash;&gt;
                &lt;!&ndash;</li>&ndash;&gt;
                <li ng-if="hasPermission('app.maternityClinic.checkupReport')" ng-click="go('app.maternityClinic.checkupReport')" class="fgl_model">
                  <label ><i class="iconfont fgl_workbench_icon">&#xe62b;</i></label>
                  <span>产检报表</span>
                </li>

                <li ng-if="hasPermission('app.maternityClinic.statisticsManage')" class="fgl_mutil" style="width: 512px;">
                  <div ng-click="go('app.maternityClinic.statisticsManage', {})" class="fgl_work_ico" style="width:170px;">
                    <div class="fgl_work_line"></div>
                    <label ><i class="iconfont fgl_workbench_icon">&#xe619;</i></label>
                    <span>统计管理</span>
                  </div>
                  <div class="fgl_work_menu" style="width:60%;padding-left:45px;">
                    <ul class="fgl_work_title" style="width:100%;">
                      <li><a ng-show="hasPermission('app.maternityClinic.statisticsManage.checkupStatistics')" ng-click="go('app.maternityClinic.statisticsManage.checkupStatistics',{})">产检人数统计管理</a></li>
                      <li><a ng-show="hasPermission('app.maternityClinic.statisticsManage.dueDateStatistics')" ng-click="go('app.maternityClinic.statisticsManage.dueDateStatistics',{})">预产期统计管理</a></li>
                      <li><a ng-show="hasPermission('app.maternityClinic.statisticsManage.highRiskStatistics')" ng-click="go('app.maternityClinic.statisticsManage.highRiskStatistics',{})">高危统计管理</a></li>
                      <li><a ng-show="hasPermission('app.maternityClinic.statisticsManage.cjystj')" ng-click="go('app.maternityClinic.statisticsManage.cjystj',{})">产检医生统计</a></li>
                      <li><a ng-show="hasPermission('app.maternityClinic.statisticsManage.cjcsfbtj')" ng-click="go('app.maternityClinic.statisticsManage.cjcsfbtj',{})">产检次数分布统计</a></li>
                    </ul>

                  </div>
                </li>

                <li ng-if="hasPermission('app.maternityClinic.gravidaServiceManager')" class="fgl_mutil">
                  <div ng-click="go('app.maternityClinic.gravidaServiceManager')" class="fgl_work_ico">
                    <div class="fgl_work_line"></div>
                    <label ><i class="iconfont fgl_workbench_icon">&#xe60d;</i></label>
                    <span>孕产妇服务管理</span>
                  </div>
                  <div class="fgl_work_menu">
                    <ul class="fgl_work_title">
                      <li><a ng-click="go('app.maternityClinic.gravidaServiceManager',{showTagsNo:1})">全部孕妇管理</a></li>
                      <li><a ng-click="go('app.maternityClinic.gravidaServiceManager',{showTagsNo:2})">全部产妇管理</a></li>
                    </ul>
                  </div>
                </li>

                <li ng-if="hasPermission('app.maternityClinic.school')" class="fgl_mutil" style="width: 512px;">
                  <div ng-click="go('app.maternityClinic.school.typeManager')" class="fgl_work_ico" style="width:170px;">
                    <div class="fgl_work_line"></div>
                    <label ><i class="iconfont fgl_workbench_icon">&#xe634;</i></label>
                    <span>孕妇学校</span>
                  </div>
                  <div class="fgl_work_menu" style="width:60%;padding-left:45px;">
                    <ul class="fgl_work_title" style="width:100%;">
                      <li><a ng-show="hasPermission('app.maternityClinic.school.typeManager')" ng-click="go('app.maternityClinic.school.typeManager')">类型管理</a></li>
                      <li><a ng-show="hasPermission('app.maternityClinic.school.courseManager')" ng-click="go('app.maternityClinic.school.courseManager')">课程管理</a></li>
                      <li><a ng-show="hasPermission('app.maternityClinic.school.subscribeManager')" ng-click="go('app.maternityClinic.school.subscribeManager')">预约管理</a></li>
                      <li><a ng-show="hasPermission('app.maternityClinic.school.signManager')" ng-click="go('app.maternityClinic.school.signManager')">签到管理</a></li>
                    </ul>

                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>-->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  name: 'workbench',
  data () {
    return {}
  },
  computed: {},
  methods: {
    handleDashboard () {
    }
  },
  created () {},
  destroyed () {}
}
</script>
<style rel="stylesheet/css" lang="css" scoped>

</style>

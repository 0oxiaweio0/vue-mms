<template>
  <section class="fgl_content">
    <div class="fgl_two_examination">
      <div class="fgl_PregnantWomenTitle"><span>欢迎使用孕产婴智慧医疗平台-孕产妇围产管理</span></div>
      <div class="fgl_two_contentBox">
        <div class="fgl_five_chFc">
          <div class="fgl_sev_work">
            <div class="fgl_workbench">
              <ul class="fgl_model_box">
                <li v-if="hasPermission('app.maternityClinic.gravida.archives')" @click="go('app.maternityClinic.gravida.archives')" class="fgl_model">
                  <label ><i class="iconfont fgl_workbench_icon">&#xe604;</i></label>
                  <span>孕妇建档</span>
                </li>
                <li v-if="hasPermission('app.maternityClinic.prenatal.checkup')" @click="go('app.maternityClinic.prenatal.checkup')" class="fgl_model">
                  <label ><i class="iconfont fgl_workbench_icon">&#xe605;</i></label>
                  <span>产前检查</span>
                </li>
                <li v-if="hasPermission('app.maternityClinic.screening')" @click="go('app.maternityClinic.screening')" class="fgl_model">
                  <label ><i class="iconfont fgl_workbench_icon">&#xe609;</i></label>
                  <span>产前筛查</span>
                </li>
                <li v-if="hasPermission('app.maternityClinic.maternal')" @click="go('app.maternityClinic.maternal.childbirthManage')" class="fgl_model">
                  <label ><i class="iconfont fgl_workbench_icon">&#xe606;</i></label>
                  <span>产妇分娩</span>
                </li>
                <li v-if="hasPermission('app.maternityClinic.leaveHospital')" @click="go('app.maternityClinic.leaveHospital')" class="fgl_model">
                  <label ><i class="iconfont fgl_workbench_icon">&#xe62d;</i></label>
                  <span>出院小结</span>
                </li>
                <li v-if="hasPermission('app.maternityClinic.chfc')" @click="go('app.maternityClinic.chfc')" class="fgl_model">
                  <label ><i class="iconfont fgl_workbench_icon">&#xe608;</i></label>
                  <span>产后复查</span>
                </li>

                <li v-if="hasPermission('app.maternityClinic.gravidaManager')" class="fgl_mutil">
                  <div ng-click="go('app.maternityClinic.gravidaManager')" class="fgl_work_ico">
                    <div class="fgl_work_line"></div>
                    <label ><i class="iconfont fgl_workbench_icon">&#xe60d;</i></label>
                    <span>孕产妇管理</span>
                  </div>
                  <div class="fgl_work_menu">
                    <ul class="fgl_work_title">
                      <li><a @click="go('app.maternityClinic.gravidaManager',{showTagsNo:1})">高危孕妇管理</a></li>
                      <li><a @click="go('app.maternityClinic.gravidaManager',{showTagsNo:2})">全部孕妇管理</a></li>
                      <li><a @click="go('app.maternityClinic.gravidaManager',{showTagsNo:3})">全部产妇管理</a></li>
                    </ul>

                  </div>
                </li>

                <li v-if="hasPermission('app.maternityClinic.referral')" class="fgl_mutil">
                  <div ui-sref="app.maternityClinic.referral" class="fgl_work_ico">
                    <div class="fgl_work_line"></div>
                    <label ><i class="iconfont fgl_workbench_icon">&#xe60e;</i></label>
                    <span>高危转诊</span>
                  </div>
                  <div class="fgl_work_menu">
                    <ul class="fg_title_two">
                      <li><a @click="go('app.maternityClinic.referral',{showTagsNo:1})" >转出孕产妇</a></li>
                      <li><a @click="go('app.maternityClinic.referral',{showTagsNo:2})" >转入孕产妇</a></li>
                    </ul>
                  </div>
                </li>
                <li v-if="hasPermission('app.maternityClinic.crisisManager')" @click="go('app.maternityClinic.crisisManager')" class="fgl_model">
                  <label ><i class="iconfont fgl_workbench_icon">&#xe614;</i></label>
                  <span>危急管理</span>
                </li>

                <li v-if="hasPermission('app.maternityClinic.postpartumFollowManager')" @click="go('app.maternityClinic.postpartumFollowManager')" class="fgl_model">
                  <label ><i class="iconfont fgl_workbench_icon">&#xe632;</i></label>
                  <span>产后访视管理</span>
                </li>
                <li v-if="hasPermission('app.maternityClinic.checkupReport')" @click="go('app.maternityClinic.checkupReport')" class="fgl_model">
                  <label ><i class="iconfont fgl_workbench_icon">&#xe62b;</i></label>
                  <span>产检报表</span>
                </li>

                <li v-if="hasPermission('app.maternityClinic.statisticsManage')" class="fgl_mutil" style="width: 512px;">
                  <div @click="go('app.maternityClinic.statisticsManage', {})" class="fgl_work_ico" style="width:170px;">
                    <div class="fgl_work_line"></div>
                    <label ><i class="iconfont fgl_workbench_icon">&#xe619;</i></label>
                    <span>统计管理</span>
                  </div>
                  <div class="fgl_work_menu" style="width:60%;padding-left:45px;">
                    <ul class="fgl_work_title" style="width:100%;">
                      <li><a v-show="hasPermission('app.maternityClinic.statisticsManage.checkupStatistics')" @click="go('app.maternityClinic.statisticsManage.checkupStatistics',{})">产检人数统计管理</a></li>
                      <li><a v-show="hasPermission('app.maternityClinic.statisticsManage.dueDateStatistics')" @click="go('app.maternityClinic.statisticsManage.dueDateStatistics',{})">预产期统计管理</a></li>
                      <li><a v-show="hasPermission('app.maternityClinic.statisticsManage.highRiskStatistics')" @click="go('app.maternityClinic.statisticsManage.highRiskStatistics',{})">高危统计管理</a></li>
                      <li><a v-show="hasPermission('app.maternityClinic.statisticsManage.cjystj')" @click="go('app.maternityClinic.statisticsManage.cjystj',{})">产检医生统计</a></li>
                      <li><a v-show="hasPermission('app.maternityClinic.statisticsManage.cjcsfbtj')" @click="go('app.maternityClinic.statisticsManage.cjcsfbtj',{})">产检次数分布统计</a></li>
                    </ul>

                  </div>
                </li>
                <li v-if="hasPermission('app.maternityClinic.gravidaServiceManager')" class="fgl_mutil">
                  <div @click="go('app.maternityClinic.gravidaServiceManager')" class="fgl_work_ico">
                    <div class="fgl_work_line"></div>
                    <label ><i class="iconfont fgl_workbench_icon">&#xe60d;</i></label>
                    <span>孕产妇服务管理</span>
                  </div>
                  <div class="fgl_work_menu">
                    <ul class="fgl_work_title">
                      <li><a @click="go('app.maternityClinic.gravidaServiceManager',{showTagsNo:1})">全部孕妇管理</a></li>
                      <li><a @click="go('app.maternityClinic.gravidaServiceManager',{showTagsNo:2})">全部产妇管理</a></li>
                    </ul>
                  </div>
                </li>

                <li v-if="hasPermission('app.maternityClinic.school')" class="fgl_mutil" style="width: 512px;">
                  <div @click="go('app.maternityClinic.school.typeManager')" class="fgl_work_ico" style="width:170px;">
                    <div class="fgl_work_line"></div>
                    <label ><i class="iconfont fgl_workbench_icon">&#xe634;</i></label>
                    <span>孕妇学校</span>
                  </div>
                  <div class="fgl_work_menu" style="width:60%;padding-left:45px;">
                    <ul class="fgl_work_title" style="width:100%;">
                      <li><a v-show="hasPermission('app.maternityClinic.school.typeManager')" @click="go('app.maternityClinic.school.typeManager')">类型管理</a></li>
                      <li><a v-show="hasPermission('app.maternityClinic.school.courseManager')" @click="go('app.maternityClinic.school.courseManager')">课程管理</a></li>
                      <li><a v-show="hasPermission('app.maternityClinic.school.subscribeManager')" @click="go('app.maternityClinic.school.subscribeManager')">预约管理</a></li>
                      <li><a v-show="hasPermission('app.maternityClinic.school.signManager')" @click="go('app.maternityClinic.school.signManager')">签到管理</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {hasPermission, go} from '@/utils/commonfn'
export default {
  components: {},
  name: 'workbench',
  data () {
    return {
      hasPermission,
      go
    }
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

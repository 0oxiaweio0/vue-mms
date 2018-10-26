<template>
  <section class="fgl_content">
    <div class="fgl_two_examination">
      <div class="fgl_PregnantWomenTitle"><span>建档管理</span></div>
      <div class="fgl_two_contentBox">
        <div class="fgl_five_chFc">
          <div class="fgl_sev_zhuanchu">
            <div class="lyms-container-fluid fgl_maximum_container_grid">
              <div class="lyms-row">
                <div class="lyms-row">
                  <address-query-fields
                    vTitle="居住地"
                    :vProvince = "queryDataJDGL.provinceId"
                    :vCity="queryDataJDGL.cityId"
                    :vArea="queryDataJDGL.areaId"
                    :vStreet="queryDataJDGL.streetId"
                  ></address-query-fields>

                  <address-query-fields
                    vTitle="户籍地"
                    :vProvince = "queryDataJDGL.provinceRegisterId"
                    :vCity="queryDataJDGL.cityRegisterId"
                    :vArea="queryDataJDGL.areaRegisterId"
                    :vStreet="queryDataJDGL.streetRegisterId"
                  ></address-query-fields>

                  <div class="lyms-col-sm-4 lyms-col-lg-3">
                    <div class="fgl_five_container h34">
                      <div class="fgl_five_md3">建档日期</div>
                      <div class="fgl_five_LineMd3"></div>
                      <input type="text" placeholder="请选择时间"  v-model="queryDataJDGL.bookBuildingDate"   date-range-picker2="dateRangePicker" class="fgl_five_Input100" style="width: 100% !important;background-position: 80px !important;padding-left: 85px !important;"/>
                    </div>
                  </div>

                  <div class="lyms-col-sm-5 lyms-col-md-4 lyms-col-lg-3">
                    <div class="fgl_five_container fgl_border h34">
                      <div class="fgl_five_md3"> 建档孕周</div>
                      <div class="fgl_five_LineMd3"></div>
                      <div class="fgl_five_twoselect">
                        <div class="fgl_five_twowidth">
                          <select v-model="queryDataJDGL.buildWeekStart" ng-options="item.id as item.name for item in yz"   class="fgl_five_Input20">
                            <option value="">
                              --请选择--
                            </option>
                          </select>
                        </div>
                        <div class="fgl_five_twowidth">
                          <span class="fgl_hengline"></span>
                          <select v-model="queryDataJDGL.buildWeekEnd" ng-options="item.id as item.name for item in yzEnd"  class="fgl_five_Input20">
                            <option value="">
                              --请选择--
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="lyms-col-sm-4 lyms-col-lg-3">
                    <div class="fgl_five_container h34">
                      <div class="fgl_five_md3">建档医生</div>
                      <div class="fgl_five_LineMd3"></div>
                      <input auto-complete="" ac-source="doctors" error-msg="建档医生未选择" v-model="queryDataJDGL.bookbuildingDoctor"  type="text" placeholder="请输入建档医生" class="fgl_five_Input80 "/>
                    </div>
                  </div>

                  <div class="lyms-col-sm-4 lyms-col-lg-3">
                    <div class="fgl_five_container h34">
                      <div class="fgl_five_md3">推广医生</div>
                      <div class="fgl_five_LineMd3"></div>
                      <input auto-complete="" ac-source="assistBuildUsers" error-msg="建档医生未选择" v-model="queryDataJDGL.assistUserId"  type="text" placeholder="请输入建档医生" class="fgl_five_Input80 "/>
                    </div>
                  </div>

                  <div class="lyms-col-sm-4 lyms-col-lg-3">
                    <div class="fgl_five_container h34">
                      <div class="fgl_five_md3">查询号</div>
                      <div class="fgl_five_LineMd3"></div>
                      <input v-model="queryDataJDGL.queryNo" type="text" placeholder="姓名/证件号/联系方式" class="fgl_five_Input100" />
                    </div>
                  </div>
                </div>
                <div class="lyms-row">
                  <div class=" lyms-col-sm-2 fgl__five_chaXun_for_query">
                    <div @click="queryRowDataJDGL()" class="fgl_five_cBtn_for_query fgl_five_btn">
                      搜索
                    </div>
                  </div>
                </div>
                <div class="lyms-row fgl_five_Sj30">
                  <div class=" lyms-col-sm-12">
                    <div class="fgl_six_container">
                      <div class="agGridContainer">
                        <div ag-grid="gridOptionsJDGL" class="ag-blue agGridJDGL"></div>
                      </div>
                      <div class="dataTables_paginate paging_full_numbers grid-pagination" pagiantion
                           page="__page"
                           page-size="__pageSize"
                           use-page-size="true"
                           total="__total"
                           show-prev-next="true"
                           paging-action="pageAction('点击下一页', page, pageSize, total)"
                           operation-buttons="__operationButtons">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lyms-container-fluid fgl_maximum_container_grid">
            <div class="lyms-row">
              <div class="lyms-row fgl_five_Sj30">
                <div class="fgl_double_word fgl_educe">
                  <div v-if="hasPermission('app.maternityClinic.gravida.archivesManage.export')"  class="fgl_foot_btn fgl_foot_null">
                    导出
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {hasPermission, go} from '@/utils/commonfn'
import addressQueryFields from '@/components/addressQueryFields/index'
export default {
  components: {addressQueryFields},
  name: 'archivesManage',
  data () {
    return {
      hasPermission,
      go,
      queryDataJDGL: {
        provinceId: null,
        cityId: null,
        areaId: null,
        streetId: null,
        provinceRegisterId: null,
        cityRegisterId: null,
        areaRegisterId: null,
        streetRegisterId: null,
        bookBuildingDate: null,
        buildWeekStart: null,
        buildWeekEnd: null,
        bookbuildingDoctor: null,
        assistUserId: null,
        queryNo: null
      }
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

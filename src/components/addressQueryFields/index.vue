<template>
  <div class="lyms-col-sm-10 lyms-col-md-6 lyms-col-lg-5">
    <div class="fgl_five_container fgl_border h34">
      <div class="fgl_five_md3" name="title">{{vTitle}}</div>
      <div class="fgl_five_LineMd3"></div>
      <div class="fgl_five_twoselect">
        <div class="fgl_width_25">
          <select v-model="provinceId" class="fgl_five_Input20">
            <option :value="null">
              --省--
            </option>
            <option :value="province.id" v-for="province in provinces" :key="province.id">{{province.name}}</option>
          </select>
        </div>
        <div class="fgl_width_25">
          <select v-model="cityId"  class="fgl_five_Input20">
            <option :value="null">
              --市--
            </option>
            <option :value="city.id" v-for="city in citys" :key="city.id">{{city.name}}</option>
          </select>
        </div>
        <div class="fgl_width_25">
          <select v-model="areaId" class="fgl_five_Input20">
            <option :value="null">
              --区县--
            </option>
            <option :value="area.id" v-for="area in areas" :key="area.id">{{area.name}}</option>
          </select>
        </div>
        <div class="fgl_width_25">
          <select v-model="streetId" class="fgl_five_Input20">
            <option :value="null">
              --街道--
            </option>
            <option :value="street.id" v-for="street in streets" :key="street.id">{{street.name}}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { queryAreas } from '@/api/common'
export default {
  props: ['vTitle'],
  data () {
    return {
      provinceId: null,
      cityId: null,
      areaId: null,
      streetId: null,
      provinces: null,
      citys: null,
      areas: null,
      streets: null
    }
  },
  watch: {
    provinceId: function (newV, oldV) {
      if (newV !== oldV) {
        this.addressFilter('citys', newV)
      }
    },
    cityId: function (newV, oldV) {
      if (newV !== oldV) {
        this.addressFilter('areas', newV)
      }
    },
    areaId: function (newV, oldV) {
      if (newV !== oldV) {
        this.addressFilter('streets', newV)
      }
    }
  },
  methods: {
    addressFilter (type, _value) {
      var that = this
      queryAreas({parentId: _value}).then(function (res) {
        if (res.data.errorcode === 0) {
          var data = res.data.list
          that[type] = data
          data = null
        } else {
          this.$message({
            message: res.data.errormsg,
            type: 'error'
          })
        }
      })
    }
  },
  beforeCreate () {
  },
  created () {
    if (!sessionStorage.lymsProvinces) {
      queryAreas().then(function (res) {
        var data = res.data.list
        sessionStorage.setItem('lymsProvinces', JSON.stringify(data))
        this.provinces = data
        data = null
      })
    } else {
      var provincesData = JSON.parse(sessionStorage.lymsProvinces)
      this.provinces = provincesData
      provincesData = null
    }
  },
  destroyed () {
  }
}
</script>
<style rel="stylesheet/css" lang="css" scoped>
</style>

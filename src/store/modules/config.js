
const configs = {
  state: {
    API_URL: 'https://dev-rp-api.healthbaby.com.cn',
    version: '3.2.5',
    httpTimeout: 150000,
    defaultGridLimit: 20,
    // 是否开启自动更新
    update: false,
    // 是否为debug模式
    isDebug: false,
    // 默认登录方式 1,手机登录 2,帐号密码登录
    defaultLoginType: 2,
    // 第一次登录是否显示强制修改密码
    showFirstLoginResetPwd: true,
    // 是否显示历史检验检查报告, 孕妇-产前检查
    showLSJYJCBG: true,
    // 是否显示手机登录
    showLoginByPhone: true,
    // 是否显示查询框后面的身份证加载按钮
    showLoadingIdCardBtn: true,
    // 是否显示查询框后面的就诊卡加载按钮
    showLoadingVcCardBtn: true,
    // 证件类型
    // 身份证读取读卡器地址
    loadIdCardUrl: 'http://localhost:12307',
    queryCardType: '',
    // 就诊卡读取读卡器地址
    loadVcCardUrl: 'http://localhost:12306',
    // 银行卡读取读卡器地址
    loadBankCardUrl: 'http://localhost:12308',
    // 社保卡读取读卡器地址
    loadSocialSecurityCardUrl: 'http://localhost:12309',
    // 院内端组合查询框默认查询条件默认显示   指定值为 queryInputTypes.id
    queryInputDefaultType: '70ae1d93-2964-46bc-83fa-bec9ff605b1c',
    // 证件号查询下拉列表数据
    queryArrow1: [
      { 'id': '70ae1d93-2964-46bc-83fa-bec9ff605b1c', 'name': '身份证', selectedDefault: true, useLoadCard: true },
      {'id': 'efa9ede5-bd40-42bb-8966-a0bf4c20d8fb', 'name': '军官证'},
      {'id': '5797135b0cf2dd415ca09fe0', 'name': '士官证'},
      {'id': '5797135b0cf2dd415ca09fe1', 'name': '护照'},
      {'id': '57e1dcd3f0f02e7ca519d6c6', 'name': '手机号'},
      {'id': '57e1dd12f0f02e7ca519d6c7', 'name': '其他'}
    ],
    // 就诊卡查询下拉列表数据
    queryArrow2: [
      // 数组使用方式k
      {id: 'vc100', name: '就诊卡', selectedDefault: true, useLoadCard: true}
    ],
    // 高拍仪身份证读卡配置（如果医院配置高拍仪，就代替之前的身份证读卡器功能,没有就启用之前的读卡功能）
    loadIdCardByHM: {
      // '216':true
    },
    // 城市ID映射下拉数组, cityID : []
    // 机构ID映射下拉数组, orgId : []
    // 2 : [{id:'vc100', name:'就诊卡', useLoadCard:true},{id:'vc101', name:'优惠券', selectedDefault:true}]
    queryArrow2Config: {
      2100001304: [{id: 'vc100', name: '就诊卡', useLoadCard: true, selectedDefault: true}, {id: 'vc101', name: '优惠券'}], // 内丘县人民医院
      1000000114: [{id: 'vc100', name: '就诊卡', useLoadCard: true, selectedDefault: true}, {id: 'vc101', name: '优惠券'}, {id: 'vc103', name: '银行卡', useLoadCard: true}, {id: 'vc104', name: '社保卡', useLoadCard: true}]// 德州医院
    },
    // 在登录时根据机构对默认查询按钮值进行覆盖, 即根据机构ID指定默认证件类型
    onLoginOverflowQueryInputDefaultType: {
      /// 格式 机构ID : 类型ID //注释
      '197': {idCardType: '70ae1d93-2964-46bc-83fa-bec9ff605b1c'}, // 抚宁县妇幼保健院,身份证
      '246': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 南宫市人民医院, 手机号
      '247': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 广宗县人民医院, 手机号
      '248': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 北戴河医院,手机号
      '2100001306': {idCardType: '57e1dcd3f0f02e7ca519d6c'}, // 临西县医院
      '2100001295': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 隆尧县医院
      '2100001435': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 定州市妇幼保健院
      '206': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 巨鹿县医院
      '2100001294': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 夏津县人民医院
      '2100001296': {idCardType: '57e1dcd3f0f02e7ca519d6c6'} // 临城县人民医院
    },
    // 需要初始化字段权限的表单
    initAuthUri: [
      // 'app.maternityClinic.gravida.archives',

    ],
    msgs: {
      SERVER_ERROR: '服务器貌似除了点问题，请稍后再试',
      SERVER_TIMEOUT: '网络似乎开了点小差，请稍后再试'
    },
    // 配置his数据接口地址映射-建档数据（通过就诊卡查询）
    hisDataUrl: {
      204: 'http://192.168.1.201:9090/his/getQlxHis', // 青龙县医院
      197: 'http://192.168.1.198:9090/his/getFnfyHis', // 抚宁县
      216: 'https://area-qhd-api.healthbaby.com.cn:18019/his/getQhdHis', // 秦皇岛妇幼
      1000000114: 'http://192.168.200.118:9090/his/getDzfyHis', // 德州妇幼
      202: 'http://10.0.200.107:9090/his/getNczxyyHis', // 南充中心医院
      2100001305: 'http://10.2.7.92:9090/his/getLcdcfyHis', // 聊城东昌府区妇幼保健院
      2100001304: 'http://192.169.1.156:9090/his/getNqrmyyHis', // 内丘县人民医院
      2100001291: 'http://10.10.253.73:9090/his/getCdFyHis', // 承德妇幼
      2100001104: 'http://192.168.1.190:9090/his/getFrHis', // 唐山丰润妇幼
      2100001377: 'http://192.168.1.136:9090/his/getLpFyHis', // 滦平县妇幼保健院
      199: 'http://112.112.112.160:9090/his/getWxRmYyHis', // 威县人民医院
      2100001634: 'http://192.168.11.103:9090/his/getZcFyHis  ', // 诸城市妇幼保健院
      2100001635: 'http://200.200.200.53:9090/his/getWhFyHis', // 威海市妇幼保健院
      2100001580: 'http://192.168.10.246:9090/his/getGkFyHis', // 秦皇岛港口医院
      2100001606: 'http://192.168.1.3:9090/his/getQxFyHis', // 迁西妇幼
      2100001097: 'http://172.100.40.39:8081/his/getGrYyHis', // 秦皇岛工人医院
      2100001718: 'http://192.168.8.221:9090/his/getYlYyHis', // 仪陇县人民医院
      2100001767: 'http://10.1.23.210:9090/his/getFrHis', // 唐山丰润二院
      2100001579: 'http://10.77.76.142:9090/his/getQhdDyHis', // 秦皇岛市第一医院
      2100001768: 'http://172.16.11.3:9090/his/getCyHis'// 昌邑市妇幼保健院
    },
    // 配置his数据接口地址映射-建档数据（通过就身份证查询）
    hisDataUrlByCardNo: {
      2100001605: 'http://10.10.226.209:9090/his/getLhHis' // 隆化县妇幼保健院
    },
    // 配置lis数据接口地址映射-影像检验检查报告
    lisDataUrl: {
      2100000049: 'http://192.168.6.188:9090/onlinelis/getLisAndRisData', // 迁安市人民医院
      2100001104: 'http://192.168.1.190:9090/onlinelis/getLisAndRisData', // 唐山丰润妇幼
      2100001606: 'http://192.168.1.3:9090/onlinelis/getLisAndRisData', // 迁西妇幼
      2100001767: 'http://10.1.23.210:9090/onlinelis/getLisAndRisData' // 唐山丰润二院
    },
    // 产检辅助检查项对接（初诊和复诊新增）
    checkUpUrl: {
      2100001377: 'http://192.168.1.136:9090/lis/lpcs' // 滦平妇幼
    },
    // 配置住院号his数据接口地址映射-建档数据
    inpatientHisDataUrl: {
      2100001305: 'http://10.2.7.92:9090/his/getLcdcfyByZyhHis' // 聊城东昌府区妇幼保健院（1000000116用于测试 2100001305正式环境）
    },
    // 就诊卡不唯一时，进行就诊卡转换唯一标识配置
    loadUniqueByVcCardUrl: {
      1000000016: 'http://192.168.1.168:9090/his/getClFyIdByVcCardNo'//

    },
    /**
     * 所有打印弹窗编号
     * 编号每个模块增加1W,每个菜单拥有100个弹窗编号
     */
    popWindows: {
      /**   孕产妇围产管理  */
      // 产前检查
      YUN_CHAN_FU_JIAN_CHA: 10200, // 孕产妇检查
      YUN_JIAN_BAO_GAO: 10201, // 孕检报告
      YUN_CHAN_FU_BAO_JIAN_SHOU_CE: 10202, // 孕产妇保健手册
      YUN_QI_CHU_ZHEN_JI_LU: 10203, // 母子健康手册-孕期初诊记录
      YUN_QI_CHU_ZHEN_Wei_Hai: 10204, // 威海首诊记录

      // 分娩
      FEN_MIAN_JI_LU: 10600, // 分娩记录打印
      CHU_SHENG_YI_XUE_JI_LU: 10601, // 出生医学记录套打
      NU_ZI_JANG_KONG_SHOU_CE: 10602, // 母子健康手册

      /**   妇女健康管理  */

      // 婚前检查
      PRINT_HUN_QIAN_JIAN_CHA_JI_LU_NAN: 30300, // 打印-男性婚前检查记录
      PRINT_HUN_QIAN_YI_XUE_JIAN_CHA_BIAO_NAN: 30301, // 套打-男性婚前医学检查表,聊城

      PRINT_HUN_QIAN_JIAN_CHA_JI_LU_NV: 30302, // 打印-女性婚前检查记录
      PRINT_HUN_QIAN_YI_XUE_JIAN_CHA_BIAO_NV: 30303 // 套打-女性婚前医学检查表,聊城
    },

    // 孕妇
    maternityClinic: {
      workbenck: {
        // 是否显示工作台上的计算孕周
        showJSYZ: {
          '204': 'true', // 青龙满族自治县医院
          '1000000001': 'true' // 抚宁中医院

        }
      },
      archives: {
        // 根据登录用户自动配置户籍地址
        autoConfigHJDZ: [],
        // 根据登录用户自动配置居住地址
        autoConfigCHXYD: [],
        // 默认孕妇证件类型
        defaultCardType: {
          '2100001306': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 临西县医院
          '2100001295': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 隆尧县医院
          '2100001435': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 定州市妇幼保健院
          '206': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 巨鹿县医院
          '2100001294': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 夏津县人民医院
          '2100001296': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 临城县人民医院
          '119': {idCardType: '57e1dcd3f0f02e7ca519d6c6'} // 威县人民医院
        },
        // 配置公共模版的，就诊卡非必填
        vcCardNotRequired: {
          '2100001181': true, // 滦县妇幼保健院
          '1000000020': true, // 滦南县妇幼保健站（线上环境）
          '1000000017': true, // 昌黎中医院
          '2100001635': true, // 威海市妇幼保健院
          '247': true, // 广宗县人民医院
          '246': true, // 南宫市人民医院
          '197': true, // 抚宁县妇幼保健院
          '1000000025': true, // 青龙县祖山镇卫生院
          '2100001186': true, // 德州市妇幼保健院河西分部
          '2100001306': true, // 临西县医院
          '2100001295': true, // 隆尧县医院
          '2100001435': true, // 定州市妇幼保健院
          '206': true, // 巨鹿县医院
          '2100001294': true, // 夏津县人民医院
          '2100001296': true // 临城县人民医院

        },
        // 孕妇居住地非必填
        pregnantLive: {
          '2100001306': true, //    临西县医院
          '2100001295': true, // 隆尧县医院
          '2100001435': true, // 定州市妇幼保健院
          '206': true, // 巨鹿县医院
          '2100001294': true, // 夏津县人民医院
          '2100001296': true // 临城县人民医院
        },
        //    孕妇生日非必填
        pregnantBirth: {
          '2100001306': true, //    临西县医院
          '2100001295': true, // 隆尧县医院
          '2100001435': true, // 定州市妇幼保健院
          '206': true, // 巨鹿县医院
          '2100001294': true, // 夏津县人民医院
          '2100001296': true // 临城县人民医院
        }
      },
      checkup: {

      }
    },
    // 儿童
    childClinic: {
      // 默认证件类型
      defaultCardType: {
        '216': {idCardType: '57e1dcd3f0f02e7ca519d6c6'} // 秦皇岛妇幼保健院
      },
      archives: {
        // 默认证件类型
        defaultCardType: {
          '197': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 抚宁县妇幼保健院,手机号
          '216': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 秦皇岛妇幼保健院
          '241': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 新乐市人民医院
          '2100001306': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 临西县医院
          '2100001295': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 隆尧县医院
          '2100001435': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 定州市妇幼保健院
          '206': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 巨鹿县医院
          '2100001294': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 夏津县人民医院
          '2100001296': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 临城县人民医院
          '2100001505': {idCardType: '57e1dcd3f0f02e7ca519d6c6'}, // 疾信通
          '119': {idCardType: '57e1dcd3f0f02e7ca519d6c6'} // 威县人民医院
        },
        // 根据医院配置默认选择的服务类型
        serviceTypeByOrg: {
          // 机构ID：[服务类型ID, 服务状态ID]
          204: ['1', '3'], // 青龙满族自治县医院
          197: ['0', '0'], // 抚宁县妇幼保健院 标准服务 开通
          2100001505: ['1', '3'], // 疾信通 增值服务 开通
          206: ['1', '3'], // 巨鹿 增值服务 开通
          2100001295: ['1', '3'], // 隆尧 增值服务 开通
          1000000115: ['1', '3'], // 南和 增值服务 开通
          2100001296: ['1', '3'], // 临城 增值服务 开通
          2100001435: ['1', '3'] // 定州 增值服务 开通
        },
        // 配置公共模版的，就诊卡非必填
        vcCardNotRequired: {
          '1000000020': true, // 滦南县妇幼保健站（线上环境）
          '1000000025': true, // 青龙县祖山镇卫生院
          '2100001186': true, // 德州市妇幼保健院河西分部
          '2100001306': true, //    临西县医院
          '2100001295': true, // 隆尧县医院
          '2100001435': true, // 定州市妇幼保健院
          '206': true, // 巨鹿县医院
          '2100001294': true, // 夏津县人民医院
          '2100001296': true, // 临城县人民医院
          '2100001635': true // 威海市妇幼保健院
        },
        // 母亲姓名非必填
        matherNameNotRequired: {
          '2': true // 秦皇岛区域
        }

      },
      checkup: {
        // 默认证件类型
        defaultCardType: {
          '216': {idCardType: '57e1dcd3f0f02e7ca519d6c6'} // 秦皇岛妇幼保健院
        }
      }
    },

    // 数据统计
    statistics: {
      // 报表数据源设置
      dataSource: {
        // 机构所在市ID  : {token:'', api:''}
        // 基础
        'base': {
          token: 'http://data.api.healthbaby.com.cn/bologin/index.jsp',
          api: 'http://119.90.43.69:10001/BOE/OpenDocument/opendoc/openDocument.jsp'
        },
        // 衡水,
        '12': {
          token: 'http://data.api.0318.healthbaby.com.cn:81/bologin/index.jsp',
          api: 'http://bi.0318.healthbaby.com.cn:81/BOE/OpenDocument/opendoc/openDocument.jsp'
        },
        // 德州
        '212': {
          token: 'https://area-dz-api.healthbaby.com.cn:12356/bologin/pass.jsp',
          api: 'https://area-dz-api.healthbaby.com.cn:12356/BOE/OpenDocument/opendoc/openDocument.jsp'
        },
        // 秦皇岛
        // '2' : {
        //    //部署时配置使用线上还是局域网，默认线上
        //    use : 'online',
        //    //局域网
        //    local : {
        //        token : 'http://qhdfyapi.healthbaby.com.cn:18019/bologin/pass.jsp?account=zhizhuren&index=13&md5=2862344E173782B8',
        //        api : 'http://qhdfybo.healthbaby.com.cn:18019/BOE/OpenDocument/opendoc/openDocument.jsp'
        //    },
        //    //线上
        //    online : {
        //        token : 'http://qhdfyapi.healthbaby.com.cn:18019/bologin/pass.jsp',
        //        api : 'http://qhdfybo.healthbaby.com.cn:18019/BOE/OpenDocument/opendoc/openDocument.jsp'
        //    }
        // },
        // 秦皇岛
        '2': {
          // 部署时配置使用线上还是局域网，默认线上
          use: 'online',
          // 局域网
          local: {
            token: 'https://area-qhd-api.healthbaby.com.cn:18019/bologin/pass.jsp?account=zhizhuren&index=13&md5=2862344E173782B8',
            api: 'https://qhdfybo.healthbaby.com.cn:18019/BOE/OpenDocument/opendoc/openDocument.jsp'
          },
          // 线上
          online: {
            token: 'https://area-qhd-api.healthbaby.com.cn:18019/bologin/pass.jsp',
            api: 'https://qhdfybo.healthbaby.com.cn:18019/BOE/OpenDocument/opendoc/openDocument.jsp'
          }
        }
      },

      // 报表名称:报表ID
      docs: {
        '孕妇流失率': 'AQ5.qaSuW9NCkWlIOKXjijI',
        '7岁以下儿童保健和健康情况': 'AUAgHjGAA0tAl2ENEA9wzZY',
        '建档孕妇数': 'AdteVTJBGSBAusKCW.uLWII',
        '建档孕妇数(时间)': 'AbKvDbkoRjlErfnsQVJwklQ',
        '建档孕妇数(时间&区域)': 'AVR26ffaTWNPhHNNW30dyM4',
        '孕产妇保健和健康情况': 'AXVRwS2Dt.hEge9ekrSH1vg',
        '用户定制情况统计': 'AWwf.QVrSAFJpL5cOqG_zW4',
        '短信发送情况统计': 'AVMMmCL5zGxAujD7r6eV2ZA',
        '短信发送失败情况统计': 'ASKpliJvv89DgUmMmK_ZbWs',
        '复诊率统计': 'AeK_fEiIZOdMu_zya.BNgYU',
        '单个机构建档情况统计': 'Acu5auviJZJBsTe4Eq9hAtA',
        '单个机构建档情况统计(天)': 'AXoGTECNttVIpkqhRvcfgCU',
        '单个机构高危孕妇统计': 'AVviDiO.AgZNvTtAl1tMalc',
        '单个机构产检人次统计': 'ASfJiEQUvFVBqJBwyUWLMio',
        '单机构产检人次分析': 'AZ_dJXK02aFArB.anucrZY4',
        '单机构复诊率分析': 'AU9RerFmW_lIvgFloL88hKI',
        '单机构孕妇建档时间分析': 'ATa8lqTLNVNJuFsnI1jyXGQ',
        '单机构孕妇年龄段分析': 'AaiE0jvBeWZGl1AemztfINc',
        '单机构孕妇分娩趋势': 'AYPrro5OAbVDpGqiUXcxWhI',
        '单个机构产检节点人数统计': 'AVY4cod45edDmfEQdiiqQGs',
        '单个机构产检节点人数统计(天)': 'AVY4cod45edDmfEQdiiqQGs',
        '区域机构建档情况统计': 'AeTaea081mdNjnyHt4PQ778',
        '区域机构建档情况统计(天)': 'AcHtBvPvRxFNljXQM83Njvo',
        '区县建档情况统计': 'AdQ8Jx_2Ov5CjwZGkQvzvPM',
        '区县建档情况统计(天)': 'AdVWRbXFlEtHtVvDYKrHOFk',
        '区域机构高危孕妇统计': 'AQ3W_dAn76pBmA75qXy8S9A',
        '区县高危孕妇统计': 'AUsUMkt.G6FKuimBjx9gM90',
        '区域机构产检人次统计': 'ATfEMYulbT9OmpyNshSYgpw',
        '区县机构产检人次统计': 'AeA5_JQoQYBGrFpLoJPfBm0',
        '区域机构产检节点人数统计': 'AU2iJ2ET71pDh2BLv3YFNN0',
        '区域机构产检节点人数统计(天)': 'Adpja.ojU9BMjMRQNOWrglo',
        '区县机构产检节点人数统计': 'AWiM4dzZRidHilnBf6KdGUY',
        '区县机构产检节点人数统计(天)': 'AZBo.SuCSWVNowV1pHkDWqU'
      }
    },

    agGridLocalText: {
      // for filter panel
      page: 'daPage',
      more: 'daMore',
      to: 'daTo',
      of: 'daOf',
      next: 'daNexten',
      // last: 'daLasten',
      // first: 'daFirsten',
      previous: 'daPreviousen',
      loadingOoo: '正在初始化数据...',

      // for set filter
      selectAll: '全选',
      searchOoo: '关键词...',
      blanks: '空',

      // for number filter and text filter
      filterOoo: 'daFilter...',
      applyFilter: 'daApplyFilter...',

      // for number filter
      equals: '等于',
      lessThan: '小于',
      greaterThan: '大于',

      // for text filter
      contains: '包含',
      startsWith: '以...开始',
      endsWith: '以...结束',

      // the header of the default group column
      group: '分组',

      // tool panel
      columns: 'laColumns',
      rowGroupColumns: 'laPivot Cols',
      rowGroupColumnsEmptyMessage: 'la drag cols to group',
      valueColumns: 'laValue Cols',
      pivotMode: 'laPivot-Mode',
      groups: 'laGroups',
      values: 'laValues',
      pivots: 'laPivots',
      valueColumnsEmptyMessage: 'la drag cols to aggregate',
      pivotColumnsEmptyMessage: 'la drag here to pivot',

      // other
      noRowsToShow: '没有数据！',

      // enterprise menu
      pinColumn: 'laPin Column',
      valueAggregation: 'laValue Agg',
      autosizeThiscolumn: 'laAutosize Diz',
      autosizeAllColumns: 'laAutsoie em All',
      groupBy: 'laGroup by',
      ungroupBy: 'laUnGroup by',
      resetColumns: 'laReset Those Cols',
      expandAll: 'laOpen-em-up',
      collapseAll: 'laClose-em-up',
      toolPanel: 'laTool Panelo',

      // enterprise menu pinning
      pinLeft: 'laPin <<',
      pinRight: 'laPin >>',
      noPin: 'laDontPin <>',

      // enterprise menu aggregation and status panel
      sum: 'laSum',
      min: 'laMin',
      max: 'laMax',
      first: 'laFirst',
      last: 'laLast',
      none: 'laNone',
      count: 'laCount',
      average: 'laAverage',

      // standard menu
      copy: '复制',
      ctrlC: 'Ctrl+C',
      paste: 'laPaste',
      ctrlV: 'ctrl n C'
    },
    getContextMenuItems: function () {
      var result = [
        'copy'
      ]
      return result
    }
  },
  mutations: {
  },
  actions: {
  }
}

export default configs

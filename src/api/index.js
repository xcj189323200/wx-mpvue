import fly from './config'
export default {
  getStoreList: (param) => fly.get(`api/store/byPosition`, param),
  Public: { // 公共
    getOpenId: (param) => fly.post(`api/customers/auth?code=${param.code}&storeId=${param.storeId}`), // 获取openid 已注册的用户信息
    getUserPhone: (param) => fly.get(`api/customers/phone`, param), // 获取用户手机号
    userLogin: (param) => fly.post('api/customers/register', param), // 用户注册
    getShopInfo: (param) => fly.get(`api/stores/${param.storeId}`), // 通过storeId获取门店信息
    getWxQrCode: (param) => fly.get(`api/wxQrCode/generateQrcode`, param), // 获取小程序二维码
    getStoreInfoByStoreCode: (params) => fly.get('/api/stores/byStoreCode', params) // 跳转loading
  },
  Index: { // 首页 爆款预留
    getClassifyList: (param) => fly.get(`/api/hotSaleProducts/home`, param),
    getBurstList: () => fly.get(`/api/activities/hotDaily/home`)
  },
  Carts: { // 购物车
    getCarTotalCount: (param) => fly.get(`/api/shopCarts/my/totalCount?storeId=${param.storeId}`), // 商品总数量
    getShopCarList: (param) => fly.get(`/api/shopCarts/my`, param), // 购物车商品列表
    postShopCarts: (body) => fly.post('/api/shopCarts', body), // 添加商品到购物车
    getShopCarDelete: (param) => fly.delete(`/api/shopCarts/${param.id}`), // 删除单个商品
    getShopCarPut: (param) => fly.put(`/api/shopCarts/${param.id}/count?count=${param.count}`), // 更新单个商品数量
    submitSelectShopInfo: (param) => fly.get(`/api/shopCarts/my/confirm?ids=${param.ids}&storeId=${param.storeId}`) // 结算
  },
  my: { // 我的
    getCustomerAddressList: (param) => fly.get(`/api/customerAddress/my`, param), // 收货地址管理
    addCustomerAddressList: (param) => fly.post(`/api/customerAddress`, param), // 新增
    updataCustomerAddressList: (param) => fly.put(`/api/customerAddress`, param), // 更新
    delCustomerAddressList: (param) => fly.delete(`/api/customerAddress/${param.id}`), // 删除
    getCustomerAddressByAddressId: (param) => fly.get(`/api/customerAddress/${param.id}`), // 通过id获取地址详情
    getStoreListByLocation: (param) => fly.get(`/api/stores/byPosition`, param), // 通过地理坐标获取门店列表
    setDefaultStore: (param) => fly.put(`/api/customers/setDefaultStore?storeId=${param.storeId}`), // 切换门店后设置默认门店
    getCostomerDeposits: (param) => fly.get(`/api/microMallCustomerDeposits/my`, param), // 我的页面
    getCustomerAddresDefault: () => fly.get(`/api/customerAddress/my/default`) // 获取我的默认地址
  },
  shopDetail: { // 详情页面
    getShopDetail: (param) => fly.get(`/api/storeSkus/${param.id}`),
    getMyCustomerDeposits: () => fly.get(`/api/microMallCustomerDeposits/my`),
    getMyOrderList: (param) => fly.get(`/api/microMallCustomerDeposits/my`, param), // 获取我的订单列表
    postSaveOrder: (param) => fly.post(`/api/order/saveOrder`, param), // 订单支付
    getStockCount: (param) => fly.get(`/api/storeSkus/checkStock`, param) // 获取订单库存
  },
  Classify: { // 分类
    getAllClassify: (param) => fly.get(`/api/Categories/getAll`), // 获取全部分类
    getHotBrand: (param) => fly.get(`/api/Categories/getHotBrand`, param), // 获取热门品牌
    getHotBrandProducts: (param) => fly.get(`/api/hotSaleProducts/byCategoryId?storeId=${param.storeId}&categoryId=${param.categoryId}`) // 获取热门品牌的商品
  },
  RedPacket: {
    effective: (param) => fly.get(`/api/redPackActivities/effective`, param), // 获取红包活动
    trigger: (param) => fly.post(`/api/redPackActivities/${param.id}/trigger?storeId=${param.storeId}`), // 领取红包
    triggerOrder: (param) => fly.post(`/api/redPackActivities/${param.id}/trigger?orderSrl=${param.orderSrl}&storeId=${param.storeId}`) // 领取红包
  },
  Search: {
    searchGoods: (param) => fly.get(`/api/storeSkuSearches`, param) // 搜索
  },
  Order: {
    getOrderTabCount: (param) => fly.get(``), // 获取订单列表 tab显示的数量
    getOrderListByTab: (param) => fly.get(`/api/order/my/getOrderListByStatus?status=${param.status}&page=${param.page}&size=${param.size}&storeId=${param.storeId}`), // 用于已支付
    getOrderListNoPay: (param) => fly.get(`/api/order/my/noPayOrderList?storeId=${param}`), // 获取未支付订单
    getOrderById: (param) => fly.get(`/api/order/my/getOrderById/${param.id}`),
    getExpressInfo: (param) => fly.get(`/api/expressInfos/byJoinId?joinId=${param.joinId}`),
    cancelOrder: (param) => fly.get(`/api/order/cancelOrder?totalSrl=${param.totalSrl}`), // 取消订单
    payOrder: (param) => fly.get(`/api/order/my/payOrder`, param), // 支付订单
    addShopFromOrder: (param) => fly.post(`/api/shopCarts/fromOrder?orderId=${param.orderId}&storeId=${param.storeId}`), // 根据订单添加商品到购物车
    getNoPayNum: (param) => fly.get(`/api/order/my/noPayNum?storeId=${param}`),
    confirm: (param) => fly.get(`/api/order/${param.id}/confirm`, param),
    getOrderNum: (param) => fly.get(`/api/order/countByStatus?storeId=${param}`)
  }
}

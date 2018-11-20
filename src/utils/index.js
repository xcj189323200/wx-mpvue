/*
 * @Author: 徐长剑
 * @Description: Utils 工具类
 * @Date: 2018-08-31 16:16:39
 * @Last Modified time: 2018-08-31 16:16:39
 */
import Contants from '@contants/index'

/**
 * @method getUrlQuery 截取地址栏参数
 * @method isString 判断是否是字符串
 * @method isNumber 判断是否是数字
 * @method isBoolean 判断是否是布尔值
 * @method isFunction 判断是否是函数
 * @method isNull 判断是否是null
 * @method isUndefined 判断是否是Undefined
 * @method isObject 判断是否是对象
 * @method isEmptyObject 判断是否是空对象
 * @method isArray 判断是否是数组
 * @method isDate 判断是否是时间
 * @method isRegExp 判断是否是正则
 * @method isSymbol 判断是否是Symbol函数
 * @method isPromise 判断是否是isPromise
 * @method isSet 判断是否是Set对象
 * @method trim 去除字符串空格
 * @method random 生成随机数
 * @method randomColor 生成随机数
 * @method formatTime 格式化时间
 */
export default {
  /**
   * @description 判断是否是字符串
   * @param {String} o【必填】需要判断的值
   * @returns {Boolean} 返回布尔值
   */
  isString (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'String'
  },
  /**
   * @description 判断是否是数字
   * @param {String} o【必填】需要判断的值
   * @returns {Boolean} 返回布尔值
   */
  isNumber (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
  },
  /**
   * @description 判断是否是布尔值
   * @param {String} o【必填】需要判断的值
   * @returns {Boolean} 返回布尔值
   */
  isBoolean (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
  },
  /**
   * @description 判断是否是函数
   * @param {String} o【必填】需要判断的值
   * @returns {Boolean}返回布尔值
   */
  isFunction (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
  },
  /**
   * @description 判断是否是null
   * @param {String} o【必填】需要判断的值
   * @returns {Boolean} 返回布尔值
   */
  isNull (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
  },
  /**
   * @description 判断是否是对象
   * @param {String} o【必填】需要判断的值
   * @returns {Boolean} 返回布尔值
   */
  isObject (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
  },
  /**
   * @description   判断`obj`是否为空
   * @param  {Object} 【必填】 obj
   * @return {Boolean} 返回判断结果
   */
  isEmptyObject (obj) {
    if (this.isObject(obj)) {
      return !Object.keys(obj).length
    } else {
      console.error('请传入一个对象', obj)
    }
  },
  /**
   * @description 判断是否是数组
   * @param {String} o【必填】需要判断的值
   * @returns {Boolean} 返回布尔值
   */
  isArray (o = this.isParms()) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
  },
  /**
   * @description 判断是否是时间
   * @param {String} o【必填】需要判断的值
   * @returns {Boolean} 返回布尔值
   */
  isDate (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
  },
  /**
   * @description 判断是否是正则
   * @param {String} o【必填】需要判断的值
   * @returns {Boolean} 返回布尔值
   */
  isRegExp (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
  },
  /**
   * @description 判断是否是Symbol函数
   * @param {String} o【必填】需要判断的值
   * @returns {Boolean} 返回布尔值
   */
  isSymbol (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
  },
  /**
   * @description 判断是否是isPromise
   * @param {String} o【必填】需要判断的值
   * @returns {Boolean} 返回布尔值
   */
  isPromise (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
  },
  /**
   * @description 判断是否是Set对象
   * @param {String} o【必填】需要判断的值
   * @returns {Boolean} 返回布尔值
   */
  isSet (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
  },
  /**
   * @description 判断是否isUndefined
   * @param {String} o【必填】需要判断的值
   * @returns {Boolean} 返回布尔值
   */
  isUndefined (o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
  },
  // /**
  //  * @description 判断值是否为false
  //  * @param {String} o【必填】需要判断的值
  //  * @returns 返回布尔值
  //  */
  // static isFalse(o) {
  //     if (!o || o === "null" || o === "undefined" || o === "false" || o === "NaN") return true;
  //     return false;
  // }
  // /**
  //  * @description 判断是否为true
  //  * @param {String} o【必填】需要判断的值
  //  * @returns {Boolean} 返回布尔值
  //  */
  // static isTrue(o) {
  //     return !this.isFalse(o);
  // }
  /**
   * @description 去除字符串空格
   * @param  {String} str 【必填】需要处理的字符串
   * @param  {String} type 【可选】1-所有空格  2-前后空格  3-前空格 4-后空格
   * @return {String} 返回处理后的字符串
   */
  trim (str, type) {
    type = type || 1
    switch (type) {
      case 1:
        return str.replace(/\s+/g, '')
      case 2:
        return str.replace(/(^\s*)|(\s*$)/g, '')
      case 3:
        return str.replace(/(^\s*)/g, '')
      case 4:
        return str.replace(/(\s*$)/g, '')
      default:
        return str
    }
  },
  /**
   * @description 生成随机数
   * @param  {Number} min 【必填】需要处理的字符串
   * @param  {Number} max 【可选】1-所有空格  2-前后空格  3-前空格 4-后空格
   * @return {Number} 返回随机后的数字
   */
  random (min, max) {
    if (arguments.length === 2) {
      return Math.floor(min + Math.random() * (max + 1 - min))
    } else {
      return null
    }
  },
  /**
   *
   * @description 随机生成颜色
   * @return {String} 颜色值
   */
  randomColor () {
    return '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)
  },
  /**
   * @description 是否为必传
   * @param  {time} 时间
   * @param  {cFormat} 格式
   * @return {String} 处理后的字符串
   * @example formatTime('2018-1-29', '{y}/{m}/{d} {h}:{i}:{s}') // -> 2018/01/29 00:00:00
   */
  isRequire (msg = '请传入参数') {
    throw new Error(msg)
  },
  /**
   * @description 转换为rem的值
   * @return {Number || String} num 处理后的字符串
   * @example formatTime('2018-1-29', '{y}/{m}/{d} {h}:{i}:{s}') // -> 2018/01/29 00:00:00
   */
  unitRem (num) {
    let _num = this.isString(num) ? parseInt(num) : num
    return document.documentElement.clientWidth / 7.5 * _num
  },
  isImg (path) {
    let reg = /.+(.JPEG|.jpeg|.JPG|.jpg|.GIF|.gif|.BMP|.bmp|.PNG|.png)$/
    return reg.test(path)
  },
  /** 如果图片路径为空,返回默认图片; 如果图片是阿里云图片,则添加限制 */
  compressImg (imgPath, width) {
    let _ossQuery = `x-oss-process=image/resize,m_lfit,w_${width}/sharpen,80`
    let _imgHost = imgPath.split('/')[2]
    let _allowPath = ['dj001.oss-cn-beijing.aliyuncs.com']
    // console.log(imgPath, 'imgPath')
    // console.log(_allowPath.includes(_imgHost), '_allowPath.includes(_imgHost)')
    if (!imgPath) {
      imgPath = Contants.DEFAUTL_URL + _ossQuery
    } else if (imgPath && _allowPath.includes(_imgHost)) {
      return imgPath + '?' + _ossQuery
    }
    return imgPath
  },
  /**
     * @description 格式化时间
     * @param  {time} 时间
     * @param  {cFormat} 格式
     * @return {String} 处理后的字符串
     * @example formatTime('2018-1-29', '{y}/{m}/{d} {h}:{i}:{s}') // -> 2018/01/29 00:00:00
     */
  formatTime (time, cFormat) {
    if (arguments.length === 0) return null
    if ((time + '').length === 10) {
      time = +time * 1000
    }
    var format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    var date
    var _times
    if (typeof time === 'object') {
      date = time
    } else {
      date = new Date(time)
    }

    var formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    }
    _times = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      var value = formatObj[key]
      if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
      if (result.length > 0 && value < 10) {
        value = '0' + value
      }
      return value || 0
    })
    return _times
  },
  /**
   * @description 处理数据 批量进行oss压缩处理
   * @param {Array} data 处理前的数据
   * @param {Array} params 处理的条件
   * @param     {Array} path 处理图片的字段
   * @param     {Array} width 处理图片的宽度 可选 不填写默认不进行oss压缩
   * @example Utils.resolveData(item['dtos'], [{ path: 'imgUrl', width: 120 }])
   */
  resolveData (data = [], params = []) {
    if (this.isArray(data)) {
      let _url = ''
      data.map(k => {
        params.map(p => {
          if (this.isArray(k[p.path])) {
            k[p.path] = k[p.path].map(childPath => {
              _url = childPath ? Contants.BASE_IMG_URL + childPath : Contants.DEFAUTL_URL
              return p.width ? this.compressImg(_url, p.width) : _url
            })
          } else {
            _url = k[p.path] ? Contants.BASE_IMG_URL + k[p.path] : Contants.DEFAUTL_URL
            k[p.path] = p.width ? this.compressImg(_url, p.width) : _url
          }
        })
      })
    }
    return data
  },
  /**
   * @description 替换https
   * @param {String} data 处理前的数据
   */
  replaceHttp (str = '') {
    if (this.isString(str) && !str.includes('https:')) {
      return str.replace(/http:/, 'https:')
    }
    return str
  }
}

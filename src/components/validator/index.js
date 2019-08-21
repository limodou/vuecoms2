// 实现校验处理

import defaultMessages from './messages/messages_zh_CN'
import rules from './rules'

export default class Validator {
  constructor (options={}) {
    this.rules = Object.assign({}, rules, options.rules || {})
    this.messages = Object.assign({}, defaultMessages, options.messages || {})
  }

  setOptions (options) {
    this.rules = Object.assign({}, this.rules, options.rules || {})
    this.messages = Object.assign({}, this.messages, options.messages || {})
  }

  /**
   * 使用rules来校验数据value
   *
   * @param {Object} value 待校验的整个数据对象
   * @param {Object} rules 待校验的规则，一般为单个字段规则，可以是多个。
   *            {name: 'type', name: {type: 'number'}, name: ['type', {type: 'number'}]}
   * @param {Object} [fields={}] 字段名映射，针对rules中涉及的字段名，在显示时可以使用这个映射来显示对应的中文名，格式为：{name: 中文}
   * @returns Promise，errors，为空表示无错误
   * @memberof Validator
   */
  validate (value, rules) {
    let funcs = []
    // 对传入的规则进行遍历处理，获取每个规则的校验方法，准备校验
    // 传入字段名，字段名对应的规则，value(整个数据对象)，显示字段名,如果未提供则为字段名
    for (let k of Object.keys(rules)) {
      funcs.push(this.validateFunc(k, rules[k], value))
    }
    //执行校验，生成出错对象，结果为 {字段名: 消息}
    return Promise.all(funcs).then((res) => {
      let errors = {}
      for(let r of res) {
        // 出错时返回一个对象：{name: message:}
        if (r) {
          errors[r.name] = r.error
        } 
      }
      return JSON.stringify(errors) === '{}' ? null : errors
    })
  }

  /**
   * 处理某个字段的校验函数, 封装后返回校验函数
   *
   * @param {String} field 字段名
   * @param {Object} rule 校验规则
   * @param {Object} value 待校验的整个数据对象
   * @param {String} fieldname 错误信息中显示的字段名
   * @memberof Validator
   */
  async validateFunc (field, rule, value) {
    let rules = rule
    if (!Array.isArray(rule)) {
      rules = [rule]
    }

    for(let ru of rules) {
      if (typeof ru === 'string') {
        ru = {type: ru}
      } else if (typeof ru === 'function') {
        ru = {validate: ru}
      }
      let r = Object.assign({}, ru)

      // 合并消息
      let messages = Object.assign({}, ru.messages || {}, this.messages)
      if (!r.fieldname) r.fieldname = field
      r.field = field
      r.makeError = this.makeError(messages, r.fieldname)
      // try {
        let ret = await this.validateRule (r, value[field], value)
        if (ret instanceof Error) {
          return {name: field, error: ret.message}
        } else if (ret) {
          return {name: field, error: ret}
        }
      // } 
      // catch (err) {
      //   if (err instanceof Error)
      //     return {name: field, message: err.message}
      //   else
      //     return {name: field, message: err}
      // }
    }
  }

  /**
   * 生成错误信息
   *
   * @param {Object} messages 出错消息
   * @param {String} fieldname 字段名称
   * @returns Error对象
   * @memberof Validator
   */
  makeError (messages, fieldname) {
    const f = (msgid, expected, actual) => {
      let message = messages[msgid]
      if (!message) {
        return new Error(`There is no message found for msgid ${msgid}`)
      }
      return new Error(message.replace(/\{field\}/g, fieldname).replace(/\{expected\}/g, expected).replace(/\{actual\}/g, actual))
    }
    return f
  }

  /**
   * 校验某一个规则，可能是字符串，或对象
   *
   * @param {Object|String|Function} rule 待校验的规则
   * @param {Any} value 待校验的对应的字段的值，不是整个对象
   * @param {Object} model 待校验的整个数据对象
   * @returns 返回校验结果
   * @memberof Validator
   */
  async validateRule (rule, fieldvalue, model) {
    let rule_func
    let name
    // 获取字段名，可以是字符串，或对象。对象使用type属性
    if (typeof rule === 'string') {
      rule_func = this.rules[rule]
      name = rule
    } else if (typeof rule === 'function') {
      rule_func = rule
    } else if (rule instanceof Object) {
      if (rule.validate && typeof rule.validate === 'function') {
        name = 'custom'
        rule_func = rule.validate
      } else {
        name = rule.type || 'any'
        rule_func = this.rules[name]
      }
    } 
    if (!rule_func) {
      throw new Error(`There is no rule found of type ${name} ${typeof(rule)}`)
    }

    // 调用validate方法，如果成功，返回 null，否则返回出错信息，可以包含{field}的占位符
    return await rule_func.call(this, rule, fieldvalue, model)
  }

  /**
   * 引用现有校验规则
   *
   * @param {Object|String|Function} rule 新的校验规则
   * @param {Object} oldrule 传入的rule参数
   * @param {*} value 待校验的值
   * @param {*} model 完整的数据对象
   * @param {Function} fail 出错时的回调，用于返回校验错误信息
   * @memberof Validator
   */
  async useRule (rule, oldrule, value, model, fail) {
    let newrule
    if (typeof rule === 'string') {
      newrule = {type: rule}
    } else if (typeof rule === 'function') {
      newrule = {validate: rule}
    } else if (rule instanceof Object) {
      newrule = rule
    } 
  
    const r = Object.assign({}, newrule, rule)
    let res
    try {
      res = await this.validateRule(r, value, model)
    } catch (e) {
      res = e
    }
    if (res && fail)
      return fail()
    else
      return res
  }
}
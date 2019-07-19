<template>
  <div class="u-build">
    <div slot="header"></div>

    <template v-if="theme === 'default'">
      <template v-for="item in data">
        <component
          v-if="!item.hidden"
          :is="item.component || 'uSection'"
          v-bind="item"
          :boxComponent="showBox ? item.boxComponent : ''"
          :boxOptions="getBoxOptions(item)"
          :value="value"
          :labelWidth="item.labelWidth || labelWidth"
          :labelDir="item.labelDir || labelDir"
          :staticSuffix="staticSuffix"
          :validateResult="validateResult"
          :ref="item.name"
        ></component>
      </template>
    </template>
    <template v-if="theme === 'tab'">
      <Tabs value="section_1">
        <TabPane v-for="(item, index) of data" :label="item.title" :name="`section_${index+1}`">
          <component
            v-if="!item.hidden"
            :is="item.component || 'uSection'"
            v-bind="item"
            :boxComponent="item.boxComponent && showBox ? item.boxComponent : ''"
            :boxOptions="getBoxOptions(item)"
            :value="value"
            :labelWidth="item.labelWidth || labelWidth"
            :labelDir="item.labelDir || labelDir"
            :staticSuffix="staticSuffix"
            :validateResult="validateResult"
            :ref="item.name"
          ></component>          
        </TabPane>
      </Tabs>
    </template>
    <div slot="footer"></div>
    <Row v-if="buttons" slot="buttons">
      <Buttons :buttons="btns" :data="value" :size="btnSize" :target="this"></Buttons>
    </Row>
  </div>
</template>

<script>
import {validateRule} from './validateUtil'
import {deepCompare, deepCopy, isEmpty} from '../utils/utils'
import dict from '../mixins/dict'
import Buttons from '../Table/UButtons'

export default {
  name: 'Build',
  mixins: [dict],
  components: {Buttons},
  data () {
    return {
      originValue: deepCopy(this.value), // 保留初始值，用于reset
      oldvalue: deepCopy(this.value),
      fields: {},
      rows: {}, // 每段索引,key为每段name值，如果没有则不插入
      validating: false,
      validateResult: {}, //保存校验结果,
      visible_fields: {} //保存显示字段
    }
  },
  props: {
    theme: {
      type: String,
      default: 'default'
    },
    showBox: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: () => []
    },

    labelWidth: {
      type: Number,
      default: 150
    },

    staticSuffix: {
      type: String,
      default: '_static'
    },

    value: { // 数据存放对象
      type: Object,
      default: () => {
        return {}
      }
    },

    //用于后台校验返回的信息，形式为
    //{name: '错误描述'}
    errors: {
      type: Object,
      default () {
        return {}
      }
    },

    rules: {
      type: Object,
      default () {
        return {}
      }
    },

    // 用于选择控件设置choices
    choices: {
      type: Object,
      default () {
        return {}
      }
    },

    buttons: {
      
    },
    labelDir: {
      type: String,
      default: 'horizontal'
    },
    boxOptions: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  computed: {
    btns () {
      if (Array.isArray(this.buttons)) return this.buttons
      else return this.buttons.items
    },

    btnSize () {
      return this.buttons.size || 'default'
    }
  },

  methods: {
    validate (callback) {
      return new Promise((resolve, reject) => {
        if (this.validating){
          return
        }
        this.validating = true
        this.$emit('validating', true)

        const _check = (children, result, recursion) => {
          let error = ''
          for(let k in this.validateResult) {
            let r = this.validateResult[k]
            // 增加对hidden的处理
            if (r.rule && r.rule.length > 0 && !this.fields[k].hidden) {
              if (!r.validateState && !this.fields[k].static) {
                validateRule(this.value, k, this.validateResult)
                result.pending.push(r)
              } else if (r.validateState === 'validating') {
                result.pending.push(r)
              } else if (r.validateState === 'error' && !result.error) {
                result.error = r.error
              }
            }
          }
        }

        const _check_pending = (children, recursion) => {
          let r = {error: '', pending: []}
          _check(children, r, recursion)
          if (r.error) {
            this.validating = false
            this.$emit('validating', false)
            reject(r.error)
            if (callback) callback(r.error)
            return
          } else if (r.pending.length > 0) {
            setTimeout(()=>{
              _check_pending(r.pending, false)
            }, 10)
          } else {
            this.validating = false
            this.$emit('validating', false)
            resolve()
            if (callback) callback()
          }
        }

        _check_pending(this.validateResult, true)
      })
    },

    //生成校验结构
    //force表示是否强制
    makeValidateResult (force) {
      for(let name in this.fields) {
        let field = this.fields[name]
        if (!this.visible_fields[field.name]) continue
        if ((force || !this.validateResult[name]) && !field.static) {
          let rule = this.getRule(field)
          this.$set(this.validateResult, name, {error: '', validateState: '', rule: rule})
        }
      }
    },

    getBoxOptions (item) {
      return Object.assign({}, this.boxOptions, item.boxOptions || {})
    },

    //清除某个字段的校验结果，适用于直接改value的情况
    validateField (name) {
      let field = this.fields[name]
      if (!this.visible_fields[field.name] || field.static) return
      validateRule(this.value, name, this.validateResult)
    },

    //检查是否在layout中定义了
    check_in_layout(f, layout) {
      for (let row of layout) {
        for (let c of row) {
          if (typeof c === 'string') {
            if (c === f.name) return true
          } else if (c instanceof Object) {
            if (c.name === f.name) return true
          }
        }
      }
    },

    makeFields () {
      let fs = {}
      let vfs = {}
      for(let row of this.data) {
        let isStatic = row.static === undefined ? false : row.static
        if (row.name) {
          this.rows[row.name] = row
        }
        for(let field of (row.fields || [])) {
          fs[field.name] = field
          this.$set(field, 'static', field.static || isStatic)
          this.$set(field, 'hidden', field.hidden || false)
          this.$set(field, 'enableOnChange', false) // 禁止Input确发onChange回调
          if (typeof field.options === 'undefined') {
            this.$set(field, 'options', {})
          }
          if (field.options.hasOwnProperty('choices'))
            this.$set(field.options, 'choices', field.options.choices)
          if (!field.type)
            this.$set(field, 'type', 'str') //str
          if (this.check_in_layout(field, row.layout) && !field.hidden) {
            vfs[field.name] = true
          }
        }
      }
      this.fields = fs
      this.visible_fields = vfs
    },

    getRule (field) {
      let rule

      if (!field.rule || field.static) {
        rule = []
      } else {
        if (!Array.isArray(field.rule)) {
          field.rule.fullField = field.label
          rule = [field.rule]
        } else {
          rule = field.rule.slice()
          for(var r of rule) {
            if (r instanceof Object) {
              r.fullField = field.label
            }
          }
        }
      }

      // 添加必填校验
      if (field.required) {
        if (field.type !== 'checkbox') {
          // 如果有上一个校验规则，则将required合并到其中，否则插入新的规则
          if (rule.length > 0) {
            rule[0].required = true
          } else {
            rule.splice(0, 0, {required:true, fullField: field.label, type: field.multiple ? 'array' : 'string'})
          }
        } else {
          field.required = false
        }
      }
      return rule
    },

    mergeErrors (errors) {
      for(let k in this.errors) {
        this.$set(this.validateResult[k], 'error', this.errors[k])
        this.$set(this.validateResult[k], 'validateState', 'error')
      }
    },

    // 合并rules
    mergeRules () {
      for(let k in this.rules) {
        let result = this.validateResult[k]
        let v = this.rules[k]
        if (!result) continue
        if (Array.isArray(v)) {
          result.rule = result.rule.concat(v)
        } else {
          result.rule.push(v)
        }
      }
    },

    // 清空数据
    reset () {
      let v = deepCopy(this.originValue)
      this.reset_object(this.value)
      Object.assign(this.value, v)
      this.makeValidateResult(true)
    }
  },

  created () {
    this.makeFields()
    this.makeValidateResult()
    this.mergeRules()
    this.mergeErrors()
  },

  watch: {
    value: {
      handler (newvalue) {
        let v = deepCompare(newvalue, this.oldvalue, true)
        if (!isEmpty(v)) {
          this.oldvalue = deepCopy(newvalue)
          for (let k in v) {
            let field = this.fields[k]
            if (field && field.onChange) {
              field.onChange(v[k].value, newvalue)
            }
          }
        }
      },
      deep: true
    },
    errors: {
      handler () {
        this.mergeErrors()
      },
      deep: true
    },

    choices: {
      immediate: true,
      handler () {
        for(let row of this.data) {
          for(let field of (row.fields || [])) {
            let choices = this.choices[field.name]
            if (choices) {
              if (!field.options) {
                this.$set(field, 'options', {choices: choices})
              } else {
                this.$set(field.options, 'choices', choices)
              }
            }
          }
        }
      },
      deep: true
    },

    data: {
      handler () {
        this.makeFields()
        this.makeValidateResult()
        this.mergeRules()
      },
      deep: true
    }
    // rules: {
    //   handler () {
    //     this.mergeRules()
    //   },
    //   deep: true
    // }
  }
}
</script>

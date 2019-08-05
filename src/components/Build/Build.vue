<template>
  <div class="u-build">
    <div slot="header" class="u-build-header"></div>

    <div class="u-build-body">
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
          
    </div>

    <div slot="footer" class="u-build-header"></div>
    
    <Row v-if="buttons" slot="buttons">
      <Buttons :buttons="btns" :data="value" :size="btnSize" :target="this"></Buttons>
    </Row>
  </div>
</template>

<script>
import validateMixin from './validateMixin'
import {deepCompare, deepCopy, isEmpty} from '../utils/utils'
import dict from '../mixins/dict'
import Buttons from '../Table/UButtons'

export default {
  name: 'Build',
  mixins: [dict, validateMixin],
  components: {Buttons},
  data () {
    return {
      originValue: deepCopy(this.value), // 保留初始值，用于reset
      oldvalue: deepCopy(this.value),
      fields: {},
      rows: {}, // 每段索引,key为每段name值，如果没有则不插入
      validating: false,
      validateResult: {}, //保存校验结果,
      visible_fields: {}, //保存显示字段
      validateRules: {}, //保存校验规则
      fieldsLabel: {}
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
      if (this.validating) return

      return new Promise((resolve, reject) => {
        this.validating = true
        this.$emit('validating', true)
        let error = ''

        this.$validator.validate(this.value, this.validateRules, this.fieldsLabel).then(res => {
          if (res) {
            for(let k of Object.keys(res)) {
              this.validateResult[k].validateState = 'error'
              this.validateResult[k].error = res[k]
              if (!error) error = res[k]
            }
            if (callback) callback(error)
          } else {
            for(let k of Object.keys(this.validateResult)) {
              this.validateResult[k].validateState = 'success'
              this.validateResult[k].error = ''
            }
            if (callback) callback()
          }

          this.validating = false
          this.$emit('validating', false)

          if (error) reject(error)
          else resolve()

          if (callback) callback(error)
        })
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
          this.$set(this.validateResult, name, {error: '', validateState: '', rule: rule, fullfield: field.label})
          this.validateRules[field.name] = rule
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
      this.validateRule(this.value, name, this.validateResult)
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
          this.fieldsLabel[field.name] = field.label
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
          rule = [field.rule]
        } else {
          rule = field.rule.slice()
        }
      }

      // 添加必填校验
      if (field.required) {
        rule.splice(0, 0, {required:true, type: 'any'})
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
        this.validateRules[k] = result.rule
      }
    },

    // 清空数据
    reset () {
      let v = deepCopy(this.originValue)
      this.reset_object(this.value)
      Object.assign(this.value, v)
      this.makeValidateResult(true)
      this.mergeRules()
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
        // this.mergeRules()
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

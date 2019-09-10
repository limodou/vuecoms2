<template>
  <div :class="classes">
    <label class="u-layout-cell-label" :style="labelStyle" v-if="col.label">
      {{col.label}}
      <i class="ivu-icon ivu-icon-ios-information-circle-outline" v-if="col.info" :title="col.info"></i>
    </label>
    <div class="u-layout-cell-field" :style="fieldStyle">
      <GenericInput v-bind="col" :value="value"
        :staticSuffix="staticSuffix"
        :validate-result="validateResult"
        @on-validate="handleValidate"
        @on-error="handleError"
        @on-clear-error="handleClearError"
        :root="root"></GenericInput>
      <div class="u-layout-cell-help" v-if="col.help && !col.static">{{col.help}}</div>
      <div class="u-layout-cell-error" v-if="error && col.showError !== false">{{error}}</div>
    </div>
  </div>
</template>

<script>
import GenericInput from '../Fields'
import validateMixin from './validateMixin'
import { deepCopy } from '../utils/utils';
import Emitter from '../mixins/emitter.js'

export default {
  name: 'FormCell',
  mixins: [Emitter, validateMixin],
  components: {GenericInput},
  props: {
    col:{},
    value: {},
    fieldStyle: {},
    labelDir: {
      type: String,
      default: 'horizontal'
    },
    validateResult: {
      type: Object,
      default () {
        return {}
      }
    },
    staticSuffix: {
      type: String,
      default: '_static'
    },
    compact: {
      type: Boolean,
      default: false
    },
    root: {
      type: String,
      default: 'Build'
    }
  },
  computed: {
    classes () {
      return {'u-layout-cell': true, 'u-layout-required': this.col.required && !this.col.static,
        'u-layout-error': this.col.showError !== false && this.error, 'u-layout-compact': this.compact,
        'u-layout-cell-left': this.col.labelAlign === 'left',
        'u-layout-cell-center': this.col.labelAlign === 'center',
        'u-layout-cell-right': this.col.labelAlign === 'right',
      }
    },
    labelStyle () {
      if (this.compact) return {}

      let s = {minWidth: `${this.col.labelWidth}px`}
      switch (this.col.labelAlign) {
        case 'left':
          s['textAlign'] = 'left'
          break
        case 'right':
          s['textAlign'] = 'right'
          break
        case 'top':
          s['display'] = 'block'
          break
      }
      if (this.labelDir == 'vertical') {
        s['textAlign'] = 'left'
        s['display'] = 'block'
      }
      return s
    },
    error: {
      get () {
        return (this.validateResult[this.col.name] && this.validateResult[this.col.name].error) || ''
      },
      set (v) {
        this.$set(this.validateResult[this.col.name], 'error', v)
      }
    },
    // validateState: {
    //   get () {
    //     return this.validateResult[this.col.name].validateState
    //   },
    //
    //   set (v) {
    //     this.$set(this.validateResult[this.col.name], 'validateState', v)
    //   }
    // }
  },

  methods: {
    validate (type, callback = function () {}) {
      if (!this.col.static)
        this.validateRule(this.value, this.col.name, this.validateResult)
    },

    handleValidate () {
      this.validate()
    },

    // 错误为一个对象，可以包含多个字段
    // 如： {name: error_msg, name: error_msg}
    handleError (error, $event) {
      let d = {error, validateState: 'error'}
      this.$set(this.validateResult, this.col.name, Object.assign(this.validateResult[this.col.name], d))
    },
    handleClearError (error, $event) {
      let d = {error: '', validateState: ''}
      this.$set(this.validateResult, this.col.name, Object.assign(this.validateResult[this.col.name], d))
    }
  }
}
</script>

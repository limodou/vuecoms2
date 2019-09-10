<template>
  <div class="u-text" :class="classes">
    <template v-if="!isStatic">
      <Input type="textarea"
        v-bind="options" 
        :value="value"
        :placeholder="placeholder"
        :autosize="autosize"
        :rows="rows"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        @input="handleInput"
        @on-blur="handleBlur"></Input>
      <div class="u-text-tools clearfix">
        <div class="u-layout-cell-error" v-if="error && (!field || field && field.showError === false)">{{error}}</div>
        <div v-if="wordcount" class="u-text-counter" v-html="format_count"></div>
      </div>
    </template>
    <div class="u-text-static" v-if="isStatic" v-html="html"></div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import {text2html} from './utils/utils.js'

export default {
  name: 'u-text',
  props: {
    placeholder: {},
    autosize: {
      default () {
        return {minRows: 4}
      },
    },
    disabled: {},
    readonly: {},
    rows: {},
    wordcount: {
      type: Boolean,
      default: true,
    },
    // 最大长度，不可以超出
    maxlength: {
      type: Number
    },
    // 计数，可以超出和上面maxlength只能用一个
    count: {
      type: Number
    },
    value: {
      type: String,
      default: ''
    },
    format: {
      type: [Function, String],
      default: '{count}/{max}'
    },
    field: {
    },
    static: {
    },
    validateResult: {}
  },
  computed: {
    format_count () {
      let count = this.maxlength || this.count
      let text

      if (typeof this.format === 'function') {
        text = this.format(this.value.length, count)
      } else {
        text = this.format.replace('{max}', count)
        if (this.maxlength) text = text.replace('{count}', this.value.length)
        if (this.count) {
          if (this.value.length > this.count)
            text = text.replace('{count}', `<span class="u-text-exceed">${this.value.length}</span>`)
          else
            text = text.replace('{count}', this.value.length)
        }
      }
      return text
    },
    classes () {
      return {'u-layout-error': this.error}
    },
    error () {
      if (this.field && this.field.name)
        return (this.validateResult[this.field.name] && this.validateResult[this.field.name].error) || ''
      else return ''
    },
    isStatic () {
      return this.static === undefined ? (this.field && this.field.static) : this.static
    },
    html () {
      return text2html(this.value)
    }
  },
  methods: {
    handleInput (value) {
      this.$emit('input', value)
    },
    handleBlur () {
      this.$emit('on-validate')
    },
  }
}
</script>

<style lang="less" scoped>
.u-text {
  .u-text-counter {
    text-align: right;
    font-size: 12px;
    color: #999;
    float: right;
  }
  .u-layout-cell-error {
    float: left;
  }
  /deep/.u-text-exceed {
    color: #ed4014;
  }
}
</style>
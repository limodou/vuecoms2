<template>
  <div>
    <DatePicker :type="type" value="val1" transfer :placeholder="placeholderBegin" :options="options1" :style="{width: `${width}px`}" @input="handleInput1"></DatePicker>
    -
    <DatePicker :type="type" value="val2" transfer :placeholder="placeholderEnd" :options="options2" :style="{width: `${width}px`}" @input="handleInput2"></DatePicker>
  </div>
</template>

<script>

import {DatePicker} from "iview"
import {formatDate} from './utils/utils.js'

export default {
  name: 'DatepickerRange',
  data () {
    let v = this.parseDate(this.value)
    let self = this
    v.options1 = {
      disabledDate (date) {
        let ret = false
        if (self.disabledBegin) {
            ret = self.disabledBegin(date)
        }
        if (self.val2) {
          ret = ret || formatDate(date)>formatDate(self.val2)
        }
        return ret
      }
    }
    v.options2 = {
      disabledDate (date) {
        let ret = false
        if (self.disabledEnd) {
          ret = self.disabledEnd(date)
        }
        if (self.val1) {
          ret = ret || formatDate(date)<formatDate(self.val1)
        }
        return ret
      }
    }

    return v
  },
  props: {
    value: Array,
    placeholderBegin: String,
    placeholderEnd: String,
    type: {
      type: String,
      default: 'date'
    },
    disabledBegin: null,
    disabledEnd: null,
    width: {
      type: Number,
      default: 120
    },
    convert: { // 转换结果为string
      type: Boolean,
      default: true
    }
  },
  methods: {
    parseDate (v) {
      let val1, val2
      if (!v || v.length === 0) {
        val1 = ''
        val2 = ''
      } else {
        val1 = v[0]
        val2 = v[1]
      }
      return {val1, val2}
    },
    handleInput1 (v) {
      this.val1 = v
      this.$emit('input', [this.format(this.val1), this.format(this.val2)])
    },
    handleInput2 (v) {
      this.val2 = v
      this.$emit('input', [this.format(this.val1), this.format(this.val2)])
    },
    format (v) {
      if (this.convert && v) {
        v = new Date(v)
        switch (this.type) {
          case 'date':
            return formatDate(v)
          case 'year':
            return v.getYear()
          case 'month':
            return v.getMonth()
          case 'datetime':
            return formatDate(v, 'yyyy/MM/dd hh:mm:ss')
        }
      } else {
        return v
      }
    }
  },
  watch: {
    // val1: function(v) {
    //   this.$emit('input', [formatDate(this.val1), formatDate(this.val2)])
    // },
    // val2: function(v) {
    //   this.$emit('input', [formatDate(this.val1), formatDate(this.val2)])
    // },
    value: {
      handler: function(v) {
        let d = this.parseDate(v)
        this.val1 = d['val1']
        this.val2 = d['val2']
      },
      deep: true
    }
  }
}
</script>

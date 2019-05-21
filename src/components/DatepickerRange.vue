<template>
  <div>
    <DatePicker :type="type" v-model="val1" transfer :placeholder="placeholderBegin" :options="options1" style="width: 120px;"></DatePicker>
    -
    <DatePicker :type="type" v-model="val2" transfer :placeholder="placeholderEnd" :options="options2" style="width: 120px;"></DatePicker>
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
        return (self.val2 && formatDate(date)>formatDate(self.val2))
      }
    }
    v.options2 = {
      disabledDate (date) {
        return (self.val1 && formatDate(date)<formatDate(self.val1))
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
    }
  },
  watch: {
    val1: function(v) {
      this.$emit('input', [formatDate(this.val1), formatDate(this.val2)])
    },
    val2: function(v) {
      this.$emit('input', [formatDate(this.val1), formatDate(this.val2)])
    },
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

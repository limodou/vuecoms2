<template>
  <RadioGroup v-model="data" @input="handleInput" :size="size" :vertical="vertical">
    <Radio v-for="item in items" :label="item.value" :key="item.label+item.value" :disabled="item.disabled">{{ item.label }}</Radio>
  </RadioGroup>
</template>

<script>
import {RadioGroup, Radio} from 'iview'
import {formatChoices} from './utils/utils.js'

export default {
  name: 'uRadioGroup',
  data () {
    return {data: this.value, items: []}
  },
  props: [
    'value', 'choices', 'size', 'vertical'
  ],

  methods: {
    handleInput () {
      this.$emit('input', this.data)
    }
  },

  watch: {
    value: {
      handler (v) {
        this.data = v
      },
      deep: true
    },
    choices: {
      immediate: true,
      handler () {
        if (typeof this.choices !== 'function') {
          this.items = formatChoices(this.choices)
        }
      },
      deep: true
    }
  }
}
</script>

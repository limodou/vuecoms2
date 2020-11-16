<template>
  <CheckboxGroup v-model="data" @input="handleInput" :size="size">
    <Checkbox v-for="item in items" :label="item.value" :key="item.value" :disabled="item.disabled">{{ item.label }}</Checkbox>
  </CheckboxGroup>
</template>

<script>
import {CheckboxGroup, Checkbox} from 'iview'
import {formatChoices} from './utils/utils.js'

export default {
  name: 'uCheckboxGroup',
  components: {
    CheckboxGroup,
    Checkbox
  },
  data () {
    return {data: this.value, items: []}
  },
  props: [
    'value', 'choices', 'size'
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

<template>
  <Input v-bind="$attrs" :value="value" 
    :number="number"
    :placeholder="placeholder"
    @input="handleInput" @on-blur="handleBlur" class="noborder">
    <span v-if="prependText" slot="prepend">{{prependText}}</span>
    <span v-if="appendText" slot="append">{{appendText}}</span>
  </Input>
</template>

<script>
export default {
  name: 'u-input',
  props: {
    prependText: {
      type: String,
      default: ''
    },
    appendText: {
      type: String,
      default: ''
    },
    value: {},
    number: {
      default: false
    },
    placeholder: {
      default: ''
    }
  },
  methods: {
    handleInput(value) {
      this.$emit('input', value)
    },
    handleBlur () {
      this.$emit('on-blur')
    }
  }
}
</script>

<style lang="less">
.noborder .ivu-input-group-append,
.noborder .ivu-input-group-prepend {
  border: none;
  background-color: transparent;

}

.noborder {
  &.ivu-input-group-with-append .ivu-input, &.ivu-input-group-with-append.ivu-input-group-small .ivu-input
  {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}
</style>
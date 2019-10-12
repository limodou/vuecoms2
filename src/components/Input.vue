<template>
  <Input v-bind="$attrs" @input="handleInput" @on-blur="handleBlur"
    :class="{'input-prepend-noborder':(prepend.border === false)}"
    :class="{'input-append-noborder':(append.border === false)}"
  >
    <span v-if="prepend.text" slot="prepend">{{prepend.text}}</span>
    <span v-if="append.text" slot="append">{{append.text}}</span>
  </Input>
</template>

<script>
export default {
  name: 'u-input',
  props: {
    prependText: {
      type: [String, Object],
      default () {
        return {text: '', border: false}
      }
    },
    appendText: {
      type: [String, Object],
      default () {
        return {text: '', border: false}
      }
    }
  },
  computed: {
    prepend () {
      if (typeof this.prependText === 'string') return {text: this.prependText, border: false}
      return this.prependText
    },
    append () {
      if (typeof this.appendText === 'string') return {text: this.appendText, border: false}
      return this.appendText
    }
  },
  mounted () {
    console.log(this.$el)
    let input = document.getElementsByTagName('input')
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
.input-append-noborder .ivu-input-group-append,
.input-prepend-noborder, .ivu-input-group-prepend {
  border: none;
  background-color: transparent;

}

.input-append-noborder, .input-prepend-noborder {
  &.ivu-input-group-with-append .ivu-input, &.ivu-input-group-with-append.ivu-input-group-small .ivu-input
  {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}
</style>
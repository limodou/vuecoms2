<template>
  <Input
    v-if="!isStatic"
    v-bind="$attrs"
    :value="value"
    :autocomplete="autocomplete"
    :disabled="disabled"
    :maxlength="maxlength"
    :autofocus="autofocus"
    :readonly="readonly"
    :type="type"
    :size="size"
    :clearable="clearable"
    :number="number"
    :placeholder="placeholder"
    @input="handleInput"
    @on-blur="handleBlur"
    class="noborder"
  >
    <span v-if="prependText" slot="prepend">{{ prependText }}</span>
    <span v-if="appendText" slot="append">{{ appendText }}</span>
  </Input>
  <div v-else class="u-generic-input-text">
    <span v-if="prependText" class="prepend-text">{{ prependText }}</span>
    {{ value }}<span v-if="appendText" class="append-text">{{ appendText }}</span>
  </div>
</template>

<script>
export default {
  name: "u-input",
  props: {
    prependText: {
      type: String,
      default: ""
    },
    appendText: {
      type: String,
      default: ""
    },
    value: {},
    number: {},
    placeholder: {},
    type: {},
    size: {},
    maxlength: {},
    disabled: {},
    readonly: {},
    autofocus: {},
    autocomplete: {},
    clearable: {},
    static: {
      type: Boolean,
      default: false
    },
    field: {}
  },
  computed: {
    isStatic() {
      return this.static || (this.field && this.field.static);
    }
  },
  methods: {
    handleInput(value) {
      this.$emit("input", value);
    },
    handleBlur() {
      this.$emit("on-blur");
    }
  }
};
</script>

<style lang="less">
.noborder .ivu-input-group-append,
.noborder .ivu-input-group-prepend {
  border: none;
  background-color: transparent;
}

.noborder {
  &.ivu-input-group-with-append .ivu-input,
  &.ivu-input-group-with-append.ivu-input-group-small .ivu-input {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}

.u-generic-input-text {
  .prepend-text {
    margin-right: 5px;
  }
  .append-text {
    margin-left: 5px;
  }
}
</style>

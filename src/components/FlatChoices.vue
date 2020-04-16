<template>
  <div class="flat-choices">
    <span
      v-for="item in choices"
      :key="item.value"
      :style="itemStyle"
      class="flat-choices-item"
      @click="handleClick(item)"
      :class="{ active: isActive(item), [itemClass]: true }"
      >{{ item.label }}</span
    >
    <span v-if="showMultiple && multiple" class="flat-choices-multiple">{{
      multiple ? "多选" : ""
    }}</span>
  </div>
</template>

<script>
export default {
  name: "flat-choices",
  props: {
    value: {},
    // 值为 [{value: label:}]
    choices: {
      type: Array,
      default() {
        return [];
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    showMultiple: {
      type: Boolean,
      default: false
    },
    // 选项类型，支持：button, text
    type: {
      default: "button"
    },
    // 每项的宽度，如果为空，不固定宽度
    itemWidth: {},
    itemHeight: {},
    // 两个元素间距
    marginRight: {
      type: Number,
      default: 5
    },
    marginBottom: {
      type: Number,
      default: 0
    }
  },
  methods: {
    isActive(item) {
      if (this.multiple) {
        return this.current.indexOf(item.value) > -1;
      } else {
        return this.current === item.value;
      }
    },
    handleClick(item) {
      if (this.multiple) {
        this.current.push(item.value);
      } else {
        this.current = item.value;
      }
      this.$emit("input", this.current);
    }
  },
  computed: {
    itemClass() {
      let cls;
      switch (this.type) {
        case "button":
          cls = "ivu-btn";
          break;
        case "text":
          cls = "flat-choices-item-text";
          break;
      }
      return cls;
    },

    itemStyle() {
      let style = {};
      if (this.marginRight) style.marginRight = `${this.marginRight}px`;
      if (this.marginBottom) style.marginBottom = `${this.marginBottom}px`;
      if (this.itemWidth) style.width = `${this.itemWidth}px`;
      if (this.itemHeight) style.lineHeight = `${this.itemHeight}px`;
      return style;
    }
  },
  data() {
    let current;
    if (this.multiple) {
      current = this.value || [];
    } else {
      current = this.value;
    }
    return { current };
  },
  watch: {
    value(v) {
      this.current = v;
    }
  }
};
</script>

<style lang="less">
.flat-choices {
  position: relative;
  padding-right: 40px;

  .flat-choices-item {
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    /*规定文本不换行**/
    text-overflow: ellipsis;
    /**显示省略符号来代表被修剪的文本。*/
    overflow: hidden;

    &.active {
      background-color: #266eed;
      color: white;
    }

    &.flat-choices-item-text {
      vertical-align: middle;
      line-height: 1;
      padding: 5px 15px 6px;
      &:hover {
        color: #2d8cf0;
      }
      &.active:hover {
        color: white;
      }
    }
  }

  .flat-choices-multiple {
    position: absolute;
    float: right;
    top: 4px;
    right: 10px;
    border: 1px solid #ddd;
    padding: 2px 5px;
    font-size: 12px;

    &:hover {
      color: #266eed;
      cursor: pointer;
    }
  }
}
</style>

<template>
  <div class="u-flat-select">
    <div
      class="u-flat-select-item"
      :class="{ 'u-flat-selec-selected': isSelected(item) }"
      v-for="item of choices"
      v-bind="item"
      :key="item.value + ',' + item.label"
    >
      <Icon
        type="ios-checkmark"
        class="u-flat-select-item-icon"
        size="22"
        v-if="isSelected(item)"
      />
      <i v-else class="icon"></i>
      <span @click="handleClick(item)" :title="item.label">{{ item.label }}</span>
    </div>
  </div>
</template>

<script>
import { deepCompare, getType } from './utils/utils';

export default {
  name: 'u-flat-select',
  props: {
    choices: {
      type: Array,
      default() {
        return [];
      },
    },
    value: {},
    multiple: false,
    labelInValue: false,
  },
  data() {
    let d = this.init(this.value);
    let model = this.getModel(d);
    return { current: d, model };
  },
  methods: {
    init(value) {
      let d = value;
      if (!value) {
        if (this.multiple) {
          d = [];
        } else {
          d = '';
        }
      }
      return d;
    },
    // 只保存 value 值
    getModel(value) {
      let v;
      if (this.multiple) {
        v = [];
        if (this.labelInValue) {
          for (let item of value) {
            v.push(item.value);
          }
        } else {
          v = value;
        }
      } else {
        if (getType(value) === 'object') {
          v = value.value;
        } else {
          v = value;
        }
      }
      return v;
    },
    isSelected(item) {
      if (this.multiple) {
        return this.model.indexOf(item.value) > -1;
      } else {
        return this.model === item.value;
      }
    },
    handleClick(item) {
      if (this.isSelected(item)) {
        if (this.multiple) {
          let pos = this.model.indexOf(item.value);
          if (pos > -1) {
            this.model.splice(pos, 1);
          }
        } else {
          this.model = '';
        }
      } else {
        if (this.multiple) {
          this.model.push(item.value);
        } else {
          this.model = item.value;
        }
      }
    },
  },
  watch: {
    value: {
      deep: true,
      handler(newVal) {
        let current = this.init(newVal);
        if (deepCompare(current, newVal)) {
          this.current = current;
          this.model = this.getModel(this.current);
        }
      },
    },
    choices: {
      deep: true,
      handler(newVal) {
        this.model = this.getModel(this.current);
      },
    },
    model: {
      deep: true,
      handler(newVal) {
        if (this.labelInValue) {
          let r = [];
          for (let c of this.choices) {
            if (this.multiple) {
              if (this.model.indexOf(c.value) > -1) {
                r.push(c);
              }
            } else if (this.model === c.value) {
              this.$emit('input', c);
              return c;
            }
          }
          this.$emit('input', r);
        } else {
          this.$emit('input', this.model);
        }
      },
    },
  },
};
</script>

<style lang="less">
.u-flat-select {
  .u-flat-select-item {
    margin: 0;
    line-height: normal;
    padding: 7px 16px;
    clear: both;
    color: #515a6e;
    font-size: 12px !important;
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    -webkit-transition: background 0.2s ease-in-out;
    transition: background 0.2s ease-in-out;
    position: relative;

    span {
      white-space: nowrap;
      /*规定文本不换行**/
      text-overflow: ellipsis;
      /**显示省略符号来代表被修剪的文本。*/
      overflow: hidden;
    }

    &:hover {
      background-color: #f3f3f3;
    }

    .u-flat-select-item-icon {
      position: absolute;
      left: -4px;
      top: 50%;
      transform: translateY(-50%);
      line-height: 1;
    }
  }
}
</style>

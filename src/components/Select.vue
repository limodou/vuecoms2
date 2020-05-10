<template>
  <Select
    ref="select"
    v-model="data"
    :multiple="multiple"
    @input="handleInput"
    :clearable="clearable"
    :filterable="filterable"
    :transfer="transfer"
    :remote="remote"
    :placeholder="placeholder"
    :disabled="disabled"
    :loading="loading"
    :remote-method="handleRemote"
    :on-changing="onChanging"
    :allow-create="allowCreate"
    :on-create-item="handleCreateItem"
  >
    <Option
      v-for="item in items"
      :value="item.value"
      :key="item.value + item.label"
      :label="item.label"
    >
      <span v-html="renderLabel(item)"></span>
    </Option>
  </Select>
</template>

<script>
import { Select, Option } from "iview";
import {
  formatChoices,
  findChoices,
  isEmpty,
  deepCompare
} from "./utils/utils.js";

export default {
  name: "uSelect",
  data() {
    let selectedValue = formatChoices(this.value);
    let d = this.initValue(this.value);
    return {
      data: d.data,
      items: [],
      loading: false,
      selectedValue: selectedValue
    };
  },

  props: {
    value: {},
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
    clearable: {
      type: Boolean,
      default: true
    },
    filterable: {
      type: Boolean,
      default: false
    },
    remote: {
      type: Boolean,
      default: false
    },
    remoteMethod: {},
    remoteSelected: {}, //获取selected值的回调，返回应为 [{label: xxx, value: yyy}], 如果是单选，则不是数组
    transfer: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default() {
        if (this.remote) {
          return "请输入搜索";
        } else {
          return "请选择";
        }
      }
    },
    // 用于指示是否返回input时，采用 {label: xxx, value: yyy} 的形式
    rich: {
      type: Boolean,
      default: false
    },
    labelInValue: {
      type: Boolean,
      default: false
    },
    onRenderLabel: {},
    onChanging: {},
    allowCreate: {
      type: Boolean,
      default: false,
    }, // 是否允许直接创建option 从4.0复制
    onCreateItem: null, // 创建回调函数，外部应创建出对应的option元素
    autoLoad: { 
      default: false
    } // 当值为空时，且 remote 为 true 时，是否自动按空来查询后台
  },

  mounted() {
    this.fireSelected();
  },

  methods: {
    handleInput() {
      let v = this.getSelected();
      if (this.rich || this.labelInValue) {
        this.$emit("input", v);
      } else {
        this.$emit("input", this.data);
      }
    },
    handleRemote(query) {
      this.loading = true;
      const callback = items => {
        this.items = formatChoices(items);
        this.loading = false;
      };
      if (this.remoteMethod) {
        this.remoteMethod(query, callback);
      }
    },
    setSelected(selected) {
      if (isEmpty(selected)) return;
      let v;
      this.selectedValue = selected;
      if (this.multiple) {
        this.$refs.select.selectedMultiple = selected;
      } else {
        if (Array.isArray(selected) && selected.length > 0) {
          v = selected[0].label;
        } else if (selected instanceof Object) {
          v = selected.label;
        } else {
          v = selected || "";
        }
        this.$refs.select.selectedSingle = v;
        this.$refs.select.query = v;
        this.$refs.select.lastQuery = v;
      }
    },
    fireSelected() {
      if (!isEmpty(this.data)) {
        if (isEmpty(this.selectedValue)) {
          if (this.remoteSelected && this.remote) {
            const callback = v => {
              if (v) this.setSelected(v);
            };
            this.remoteSelected(this.data, callback);
          } else {
            let v = this.getSelected();
            this.setSelected(v);
          }
        } else {
          this.setSelected(this.selectedValue);
        }
      } else {
        if (this.autoLoad && this.remote) {
          this.handleRemote('')
        }
      }
    },
    getSelected() {
      let v;
      if (isEmpty(this.data)) {
        if (this.multiple) {
          v = [];
        } else {
          v = { label: "", value: "" };
        }
      } else {
        let s;
        if (isEmpty(this.selectedValue)) {
          s = [];
        } else {
          if (Array.isArray(this.selectedValue)) s = this.selectedValue;
          else s = [this.selectedValue];
        }
        // v = findChoices((s || []).concat(this.$refs.select.options), this.data, this.multiple)
        v = findChoices((s || []).concat(this.items), this.data, this.multiple);
        if (!this.multiple) {
          if (v.length > 0) v = v[0];
          else v = {};
        }
        if (isEmpty(v) && this.data) {
          if (Array.isArray(this.data)) {
            v = this.data.map(x => {
              return { label: "", value: x };
            });
          } else {
            v = { label: "", value: this.data };
          }
        }
      }
      this.selectedValue = v;
      return v;
    },
    getStatic() {
      this.getSelected();
      if (this.multiple) {
        return this.selectedValue.map(x => x.label).join(", ");
      } else {
        if (this.selectedValue instanceof Object) {
          return this.selectedValue.label;
        } else {
          return this.selectedValue;
        }
      }
    },

    initValue(v) {
      let d = {};
      if (isEmpty(v)) {
        if (this.multiple) {
          v = [];
        } else {
          v = "";
        }
      } else {
        if (Array.isArray(v)) {
          let r = [];
          for (let c of v) {
            if (c instanceof Object) r.push(c.value);
            else r.push(c);
            v = r;
          }
        } else if (v instanceof Object) {
          v = v.value;
        }
      }
      d.data = v;
      return d;
    },
    renderLabel(item) {
      if (this.onRenderLabel) return this.onRenderLabel(item);
      return item.label;
    },
    handleCreateItem(query) {
      var option = {
        label: query,
        value: query
      };
      if (this.onCreateItem) {
        option = this.onCreateItem(query);
      }
      let found = false;
      for (let item of this.items) {
        if (item.value === query) {
          found = true;
          option = item
          break
        }
      }
      if (!found) {
        this.items.push(option)
      }
      return option
    }
  },

  watch: {
    value: {
      handler(v) {
        let selectedValue = formatChoices(v);
        let d = this.initValue(v);
        let data = d.data;
        if (!deepCompare(data, this.data)) {
          this.data = data;
          this.selectedValue = selectedValue;
          this.fireSelected();
        }
      },
      deep: true
    },
    choices: {
      immediate: true,
      handler(v) {
        if (typeof v !== "function") {
          this.items = formatChoices(v);
        }
      },
      deep: true
    }
  }
};
</script>

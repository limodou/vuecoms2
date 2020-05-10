<template>
  <loading-dialog
    :on-ok="handleOk"
    :on-cancel="onCancel"
    :buttons="buttons"
    :buttonSize="buttonSize"
    v-bind="$attrs"
  >
    <componet ref="build" :is="component" :value="current" v-bind="props" v-on="on"></componet>
  </loading-dialog>
</template>

<script>
import { deepCopy } from '../utils/utils.js';
export default {
  props: {
    component: {}, // 调用表单，传给它一个 value
    props: {},
    on: {},
    value: {},
    buttons: {},
    buttonSize: {
      default: 'default',
    },
    onOk: {},
    onCancel: {},
  },
  data() {
    // 复制数据，去除临时数据
    const data = deepCopy(this.value, true);
    return { current: data };
  },
  methods: {
    async handleOk() {
      try {
        if (this.$refs.build.validate) {
          await this.$refs.build.validate();
        } else {
          console.log('validate not defined in build');
        }
        // 保存前的数据转换
        if (this.$refs.build.getData) {
          let data = this.$refs.build.getData();
          if (this.onOk) {
            return await this.onOk(data,  Object.assign({}, this.value, data));
          }
        } else {
          console.log('getData not defined in build');
        }
        return true; // 返回 true 才真正关闭窗口
      } catch (err) {
        console.log(err);
        this.$Message.error(err);
      }
    },
  },
};
</script>

<template>
  <loading-dialog
    :title="title"
    :on-ok="handleOk"
    :width="width"
    :closable="closable"
    :mask-closable="maskClosable"
    :draggable="draggable"
    :buttons="buttons"
    :buttonSize="buttonSize"
  >
    <componet ref="build" :is="component" :value="current" v-bind="props" v-on="on"></componet>
  </loading-dialog>
</template>

<script>
export default {
  props: {
    title: String,
    component: {}, // 调用表单，传给它一个 value
    props: {},
    on: {},
    value: {},
    buttons: {},
    buttonSize: {
      default: 'default'
    },
    onOk: {},
    width: {},
    closable: {},
    maskClosable: {},
    draggable: {
      default: false
    }
  },
  data() {
    const data = Object.assign({}, this.value);
    return { current: data };
  },
  methods: {
    async handleOk() {
      try {
        if (this.$refs.build.validate) {
          await this.$refs.build.validate();
        } else {
          console.log('validate not defined in build')
        }
        // 保存前的数据转换
        if (this.$refs.build.getData) {
          let data = Object.assign({}, this.$refs.build.getData());
          if (this.onOk) {
            return await this.onOk(data, this.current);
          }
        } else {
          console.log('getData not defined in build')
        }
        return true; // 返回 true 才真正关闭窗口
      } catch (err) {
        console.log(err);
        this.$Message.error(err);
      }
    }
  }
};
</script>

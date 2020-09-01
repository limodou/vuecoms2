<template>
  <div class="u-dialog">
    <Modal
      v-model="show"
      @on-ok="handleOk"
      @on-cancel="handleCancel"
      :loading="loading"
      v-bind="$attrs"
    >
      <component :is="component" v-bind="props" v-on="on"></component>
      <div slot="footer" v-if="buttons">
        <Buttons ref="buttons" :buttons="buttons" :target="this" :size="buttonSize"></Buttons>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'u-dialog',
  props: {
    component: {},
    props: {},
    on: {},
    onOk: {},
    onCancel: {},
    buttons: {},
    buttonSize: {
      default: 'default',
    },
  },
  data() {
    return { show: true, loading: true };
  },
  methods: {
    async handleOk() {
      if (this.onOk) {
        let res = await this.onOk.call(this);
        if (res) this.close();
        else {
          this.loading = false;
          this.$nextTick(() => (this.loading = true));
        }
      } else this.close();
    },
    async handleCancel() {
      if (this.onCancel) {
        await this.onCancel.call(this);
      }
      this.close();
    },
    close() {
      this.show = false;
      this.$root.$destroy()
      this.$root.$el.remove();
    },
  },
};
</script>

<style lang="less">
// .u-dialog {
//   position: fixed;
//   left: 0;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 10000;

//   .u-dialog-wrap {
//     position: fixed;
//     left: 50%;
//     top: 50%;
//     // background: #fff;
//     padding: 10px 40px;
//     font-size: 14px;
//     // border-radius: 2px;
//     transform: translate(-50%, -50%);
//     // color: #000;
//   }
// }
</style>

<template>
  <Modal
    :title="title"
    v-model="show"
    :loading="loading"
    @on-cancel="handleCancel"
    @on-ok="handleOk"
    :width="width"
    :closable="closable"
    :mask-closable="maskClosable"
    :draggable="draggable"
  >
    <slot></slot>
    <div slot="footer" v-if="buttons">
      <Buttons ref="buttons" :buttons="buttons" :target="this" :size="buttonSize">返回</Buttons>
    </div>
  </Modal>
</template>

<script>
export default {
  props: {
    title: String,
    onOk: {},
    onCancel: {},
    buttons: {},
    buttonSize: {
      default: 'default',
    },
    width: {},
    closable: {},
    maskClosable: {},
    draggable: {
      default: false,
    },
  },
  data() {
    return {
      show: true,
      loading: true,
    };
  },
  methods: {
    async handleCancel() {
      if (this.onCancel) {
        await this.onCancel.call(this);
      }
      this.close();
    },
    close() {
      this.$root.$el.remove();
    },
    async handleOk() {
      this.loading = true;
      if (this.onOk) {
        let res;
        try {
          res = await this.onOk();
        } catch (err) {
          console.log(err);
          this.$Message.error(err);
          this.loading = false;
          this.show = true;
          return;
        }
        if (!res) {
          this.loading = false;
          this.show = true;
          this.$nextTick(() => {
            this.loading = true;
          });
          return;
        }
      }
      this.handleClose();
    },
  },
};
</script>

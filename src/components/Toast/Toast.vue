<template>
  <div class="u-toast" @click="handleClick">
    <div class="u-toast-mask"></div>
    <div class="u-toast-wrap">
      <Alert :type="type" :show-icon="showIcon">
        {{title || content}}
        <span v-if="title && content" slot="desc" v-html="content"></span>
      </Alert>
    </div>
  </div>
</template>

<script>
export default {
  name: 'u-toast',
  props: {
    title: {
      type:String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    type: {},
    showIcon: {},
    onClose: {},
    delay: {
      default: 2000
    }
  },
  mounted () {
    if (this.delay) {
      setTimeout(this.handleClick, this.delay)
    }
  },
  methods: {
    handleClick () {
      this.$root.$el.remove()
      if (this.onClose) {
        this.onClose()
      }
    },
    close () {
      this.handleClick()
    }
  }
}
</script>

<style lang="less">
.u-toast {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;

  .u-toast-mask {
    position: fixed;
    background-color: rgba(55, 55, 55, 0.6);
    width: 100%;
    height: 100%;
  }

  .u-toast-wrap {
    position: fixed;
    left: 50%;
    top: 50%;
    // background: #fff;
    padding: 10px 40px;
    font-size: 14px;
    // border-radius: 2px;
    transform: translate(-50%, -50%);
    // color: #000;
  }

  .ivu-alert, .ivu-alert-desc {
    font-size: 14px;
  }
}

</style>
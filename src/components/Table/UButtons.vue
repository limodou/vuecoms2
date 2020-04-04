<template>
  <div class="u-buttons">
    <ButtonGroup v-for="btnGroup in getButtons" :size="btnSize">
      <template v-for="btn in btnGroup">
        <template v-if="!btn.hidden">
          <Button
            v-if="!btn.component || btn.component == 'Button'"
            :type="btn.type || 'default'"
            :html-type="btn.htmlType"
            :ghost="btn.ghost || false"
            :disabled="btn.disabled !== undefined ? btn.disabled : disabled"
            :shape="btn.shape"
            :size="btn.size"
            :long="btn.long"
            :loading="btn.loading"
            :icon="btn.icon"
            @click.prevent="handleButtonClick(btn)"
          >
            {{ btn.label }}
          </Button>
          <component
            v-else
            :is="btn.component"
            v-bind="btn.props"
            v-on="btn.on"
          ></component>
        </template>
      </template>
    </ButtonGroup>
  </div>
</template>

<script>
import { ButtonGroup, Button, Icon } from "iview";

export default {
  name: "Buttons",

  components: {
    ButtonGroup,
    Button,
    Icon
  },

  inject: ["managerElement"],

  data() {
    return {
      disabled: false,
      btns: {}
    };
  },

  props: {
    buttons: [Array, Object],
    data: {},
    target: {},
    size: {
      default: "small"
    }
  },

  computed: {
    getButtons() {
      if (Array.isArray(this.buttons)) return this.buttons;
      else return this.buttons.items || [];
    },

    btnSize() {
      return this.buttons.size || this.size;
    }

    // btngroups () {
    //   let v = []
    //   for(let bs of this.buttons) {
    //     let x = []
    //     for(let b of bs) {
    //       if (!b.hidden) {
    //         x.push(b)
    //       }
    //     }
    //     if (x.length > 0)
    //       v.push(x)
    //   }
    //   return v
    // }
  },

  methods: {
    handleButtonClick(btn) {
      if (btn.onClick) {
        btn.onClick(this.target, this.data, btn);
      }
    },
    collectButtons() {
      let btns = {};

      let rootButtons = null; // 用于记录保存按钮信息到根元素的变量
      if (this.managerElement && this.managerElement.btns) {
        rootButtons = this.managerElement.btns;
      }

      for (let bs of this.getButtons) {
        for (let b of bs) {
          if (b.name) {
            btns[b.name] = b;
            if (rootButtons) {
              rootButtons[b.name] = b;
            }
            this.$set(b, "loading", b.loading || false);
          }
        }
      }
      this.btns = btns;
    }
  },

  mounted() {
    this.collectButtons();
  },

  watch: {
    buttons: {
      handler() {
        this.collectButtons();
      }
    },
    deep: true
  }
};
</script>

<style lang="less">
.u-buttons {
  display: inline-block;

  .ivu-btn-group {
    margin-right: 5px;
  }
}
</style>

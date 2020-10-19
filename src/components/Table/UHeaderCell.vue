<template>
  <div class="u-header-cell">
    <div
      v-if="column.type === 'column'"
      class="u-table-header-header-cell"
      :style="trStyles(column)"
    >
      <HeaderCellRender
        v-if="column.headerRender"
        :render="column.headerRender"
        :column="column"
      ></HeaderCellRender>

      <template v-else>
        <div class="u-table-header-cell-title" :class="{ nowrap: nowrap }">
          <span v-html="column.title" :title="title"></span>
          <Filterable
            v-if="column.filterable && column.leaf"
            :store="store"
            :column="column"
          ></Filterable>
        </div>

        <Sort v-if="column.sortable && column.leaf" :store="store" :column="column"></Sort>

        <div
          v-if="resizable && column.resizable && column.leaf"
          class="u-table-header-cell-resizer"
          @mousedown.stop.prevent="handleMouseDown(column, $event)"
        ></div>
      </template>
    </div>

    <div v-if="column.type === 'check'" class="u-table-header-cell-title">
      <Checkbox
        v-if="multiSelect"
        @click.prevent.native="handleCheckAll"
        :value="checkAll"
        :indeterminate="indeterminate"
      ></Checkbox>
      <span v-if="column.title">{{ column.title }}</span>
    </div>

    <div v-if="column.type === 'index'" class="u-table-header-cell-title">
      <span v-if="column.title">{{ column.title }}</span>
    </div>
  </div>
</template>

<script>
import { html2text, mapState } from "../utils/utils.js";
import Sort from "./USort";
import Filterable from "./UFilter";
import HeaderCellRender from "./UHeaderCellRender";

export default {
  name: "UHCell",
  props: {
    column: Object,
    store: Object,
  },
  components: {
    Sort,
    Filterable,
    HeaderCellRender,
  },

  computed: {
    ...mapState(
      "nowrap",
      "resizable",
      "multiSelect",
      "checkAll",
      "rowHeight",
      "static",
      "indeterminate",
      "tree",
      "iconWidth",
      "treeField"
    ),
    title() {
      let showTitle = this.column.showHeaderTitle;
      if (showTitle) {
        if (typeof showTitle === "function") {
          //调用原始值及format值
          return showTitle(this.column.title);
        } else {
          return html2text(this.column.title);
        }
      }
    },
  },

  methods: {
    handleCheckAll() {
      if (this.static) return;
      let result;
      if (this.indeterminate) {
        this.store.selectAll();
        return;
      }
      this.checkAll = !this.checkAll;
      if (this.checkAll) {
        this.store.selectAll();
      } else {
        this.store.deselectAll();
      }
    },

    handleMouseDown(column, e) {
      this.$parent.handleMouseDown(column.col, e);
    },

    trStyles(column) {
      let style = {};
      // 如果是树型结构，增加图标的padding-left
      if (this.tree && column.name === this.treeField) style.paddingLeft = `${this.iconWidth}px`;
      if (!this.nowrap) {
        return style;
      } else {
        let h = `${column.rowspan * this.rowHeight}px`;
        style.height = h;
        style.lineHeight = h;
        return style;
      }
    },
  },
};
</script>

<style lang="less">
.u-header-cell {
  width: 100%;
  height: 100%;
  position: relative;

  .u-cell-checkbox {
    cursor: pointer;
  }

  .u-table-header-cell-title {
    padding: 0 4px;
  }
}
</style>

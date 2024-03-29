<template>
  <div class="u-grid-wrapper" :class="themeClass">
    <slot name="beforeQuery"></slot>
    <Query
      ref="query"
      v-if="query"
      v-bind="query"
      @input="handleQuerySubmit"
      @on-query-change="handleQueryChange"
    ></Query>
    <slot name="afterQuery"></slot>
    <div class="u-grid-tools" slot="tools" v-if="buttons || rightButtons">
      <div class="u-grid-tools-left" v-if="buttons">
        <Buttons ref="buttons" :size="buttonSize" :buttons="buttons" :data="store" :target="this"></Buttons>
      </div>
      <div class="u-grid-tools-right" v-if="rightButtons">
        <Buttons ref="rightButtons" :size="buttonSize" :buttons="rightButtons" :data="store" :target="this"></Buttons>
      </div>
    </div>
    <slot name="beforeTable"></slot>
    <div class="u-grid">
      <u-table
        v-if="leftWidth"
        :store="store"
        :width="leftWidth"
        :table-width="tableWidth"
        :table-class="leftTableClass"
        fixed="left"
        ref="left"
      >
      </u-table>

      <u-table
        :store="store"
        :width="gridWidth"
        :table-width="tableWidth"
        table-class="u-grid-body"
        ref="table"
        @scroll="handleScroll"
      ></u-table>

      <u-table
        v-if="rightWidth && xscroll && !isScrollRight"
        :store="store"
        :width="rightWidth"
        :table-width="tableWidth"
        :table-class="rightTableClass"
        fixed="right"
        ref="right"
      >
      </u-table>

      <div class="column-dragger-guide" v-show="columnResizing" :style="columnDraggerStyles"></div>
      <div ref="loading" class="loading" v-if="loadingText" v-show="loading" v-html="loadingText"></div>
    </div>
    <Pagination
      ref="pagination"
      v-if="pagination && store.states.data.length > 0"
      :store="store.states"
      @on-page="handlePage"
      @on-page-size="handlePageSize"
    >
      <Buttons
        ref="bottomButtons"
        v-if="buttomButtons"
        :size="buttonSize"
        :buttons="bottomButtons"
        :target="this"
        :data="store"
      ></Buttons>
      <slot name="tools"></slot>
    </Pagination>
    <div v-else class="no-pagination">
      <Buttons
        ref="bottomButtons"
        v-if="buttomButtons"
        :size="buttonSize"
        :buttons="bottomButtons"
        :target="this"
        :data="store"
      ></Buttons>
      <slot name="tools"></slot>
    </div>
    <slot name="afterTable"></slot>
  </div>
</template>

<script>
import UTable from "./UTable";
import Store from "./UGridStore";
import Pagination from "./pagination";
import Buttons from "./UButtons";
import { mapState, mapMethod, copyDataRow, setChoice, deepCopy, findParent, isEmpty, getWH } from "../utils/utils.js";
import Emitter from "../mixins/emitter.js";
import Query from "../Query";
import debounce from "lodash/debounce";
import { addListener, removeListener } from "resize-detector";

export default {
  name: "Grid",
  mixins: [Emitter],

  components: {
    UTable,
    Pagination,
    Buttons,
    Query,
  },

  data() {
    const store = new Store(this, this.data, this.value);
    return {
      store,
      autoloaded: false,
      btns: {},
    };
  },

  provide() {
    return { managerElement: this };
  },

  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
    value: {
      type: Array,
      default() {
        return [];
      },
    },
    // 用于选择控件设置choices
    choices: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  computed: {
    ...mapState(
      "columns",
      "columnResizing",
      "checkCol",
      "indexCol",
      "gridWidth",
      "width",
      "height",
      "resizable",
      "columnPosition",
      "guiderHeight",
      "defaultColWidth",
      "leftWidth",
      "rightWidth",
      "checkColTitle",
      "checkColWidth",
      "indexColWidth",
      "indexColTitle",
      "scrollLeft",
      "total",
      "pageSizeOpts",
      "pagination",
      "loading",
      "loadingText",
      "loadingTop",
      "loadingLeft",
      "autoLoad",
      "url",
      "param",
      "buttons",
      "rightButtons",
      "bottomButtons",
      "buttonSize",
      "selected",
      "editMode",
      "actionColumn",
      "deleteRowConfirm",
      "onSaveRow",
      "onDeleteRow",
      "onError",
      "onLoadData",
      "onBeforeEditing",
      "onEditing",
      "onCancelEdit",
      "query",
      "theme",
      "cellTitle",
      "isScrollRight",
      "page",
      "start",
      "pageSize",
      "nowrap",
      "addAutoScrollTo",
      "onRowEditRender",
      "static",
      "xscroll",
      "afterLoadData",
      "multiHeaderSep",
      "zebra",
      "oldParentWidth",
      "columnHtml",
      "headerColumnHtml"
    ),

    columnDraggerStyles() {
      return {
        left: this.columnPosition - 7 + "px",
        height: this.guiderHeight + "px",
      };
    },

    themeClass() {
      return {
        [`theme-${this.theme}`]: this.theme,
        "u-grid-zebra": this.zebra,
      };
    },

    tableWidth() {
      let w = 0;
      this.columns.forEach(col => {
        w = col.hidden ? w : w + col.width;
      });
      return w;
    },

    leftTableClass() {
      let cls = "u-grid-body u-table-left";
      if (this.scrollLeft) {
        cls += " dark";
      }
      return cls;
    },

    rightTableClass() {
      let cls = "u-grid-body u-table-right";
      if (!this.isScrollRight) {
        cls += " dark";
      }
      return cls;
    },
  },

  methods: {
    ...mapMethod(
      "getSelection",
      "showLoading",
      "setSelection",
      "removeRow",
      "setComment",
      "removeComment",
      "getSelectedRows",
      "getColumn",
      "getDefaultRow",
      "makeRows",
      "sendInputEvent",
      "deselectAll",
      "selectAll",
      "select",
      "deselect",
      "toggle",
      "getComment",
      "clearRowComment",
      "getClass",
      "removeClass",
      "setClass",
      "addRow",
      "addEditRow",
      "updateRow",
      "addChildRow",
      "addEditChildRow",
      "moveRow",
      "expand",
      "collapse",
      "isEditing"
    ),

    resize(width, height) {
      if (width) this.width = width;
      if (this.width === "auto") {
        this.store.states.gridWidth = this.$el.clientWidth === 0 ? this.$parent.$el.clientWidth : this.$el.clientWidth;
      } else {
        this.store.states.gridWidth = this.width;
      }
      if (height) this.height = height;

      // if (!this.resizable) return
      // let parentWidth = this.$el.clientWidth
      let cols = [];
      let w = this.gridWidth - 2;
      let hasLeftFixed = false;
      let hasRightFixed = false;
      let max_level = 0;

      for (let col of this.columns) {
        col.subs = col.title.split(this.multiHeaderSep);
        max_level = Math.max(max_level, col.subs.length);
        if (col.width) {
          w -= col.width;
        } else {
          cols.push(col);
        }
        switch (col.fixed) {
          case "left":
            hasLeftFixed = true;
            break;
          case "right":
            hasRightFixed = true;
            break;
        }
      }

      if (cols.length > 0 && this.gridWidth) {
        let len = cols.length;

        // 当总宽度小于实际宽度，未设宽度的列使用缺省最小宽度
        let stepW = w / len;
        let lastW = w - (len - 1) * stepW;
        for (let i = 0; i < len; i++) {
          if (w > 0) {
            if (i === len - 1) {
              cols[i].width = Math.max(lastW, this.defaultColWidth);
            } else {
              cols[i].width = Math.max(stepW, this.defaultColWidth);
            }
          } else {
            cols[i].width = this.defaultColWidth;
          }
        }
      }

      // 处理左侧固定列
      if (hasLeftFixed || hasRightFixed) {
        let leftCols = [];
        let rightCols = [];
        let restCols = [];
        this.store.states.leftWidth = 0;
        this.store.states.rightWidth = 0;

        for (let i = 0, len = this.columns.length; i < len; i++) {
          let col = this.columns[i];
          if (
            col.fixed === "left" ||
            (hasLeftFixed && (col.name === "__check_col__" || col.name === "__index_col__"))
          ) {
            col.fixed = "left";
            leftCols.push(col);
            this.store.states.leftWidth += col.width;
          } else if (col.fixed === "right") {
            rightCols.push(col);
            this.store.states.rightWidth += col.width;
          } else {
            restCols.push(col);
          }
        }
        this.store.states.columns = leftCols.concat(restCols).concat(rightCols);
      }
      this.store.states.drawColumns = this.parse_header(this.columns, max_level);
    },

    parse_header(cols, max_level) {
      let columns = [], //保存每行的最后有效列
        columns_width = {}, //保存每行最右坐标
        i,
        len,
        j,
        jj,
        col,
        jl,
        subs_len,
        path,
        rowspan, //每行平均层数，max_level/sub_len，如最大4层，当前总层数为2,则每行占两层
        colspan,
        parent, //上一层的结点为下一层的父结点
        new_col, //记录显示用的表头单元
        left; //某层最左结点

      if (!cols || cols.length === 0) return [];

      //初始化表头层
      for (i = 0; i < max_level; i++) {
        columns[i] = [];
        columns_width[i] = 0;
      }
      //处理多级表头
      for (let col of cols) {
        subs_len = col.subs.length;
        rowspan = 1; //Math.floor(max_level / subs_len)
        for (j = 0; j < subs_len; j++) {
          path = col.subs[j];
          new_col = Object.assign({}, col);
          new_col.title = path.replace("%%", "/");
          new_col.level = j;
          new_col.colspan = 1;
          new_col.col = col;
          if (j == subs_len - 1) {
            //如果是最后一层，则rowspan为最大值减其余层
            new_col.rowspan = max_level - (subs_len - 1) * rowspan;
            new_col.leaf = true;
          } else {
            new_col.rowspan = rowspan;
          }

          //查找同层最左边的结点，判断是否title和rowspan一致
          //如果一致，进行合并，即colspan +1
          //如果不一致，则插入新的结点
          //对于一层以下的结点，还要看上一层是否同一个结点，如果是才合并，否则插入
          if (columns[j].length > 0) left = columns[j][columns[j].length - 1];
          else {
            left = null;
          }

          //进行合并的判断，当left不为null，并且标题，层级，并且位置小于当前位置
          if (left && left.title === new_col.title && left.level === new_col.level) {
            left.colspan++;
            left.width += new_col.width;
            columns_width[j] += new_col.width;
            // left.leaf = false
          } else {
            //当new_col占多行时，将下层结点清空
            columns[j].push(new_col);
            new_col.left = columns_width[j];
            columns_width[j] += new_col.width;
            for (jl = 1; jl < new_col.rowspan; jl++) {
              columns_width[j + jl] += new_col.width;
            }
          }
          col.left = new_col.left;
        }
      }
      return columns;
    },

    getDefaultColumn(options) {
      // 如果column设置了showTitle，则使用column的值，否则使用全局的cellTitle属性
      let show;
      if (this.cellTitle === undefined) {
        show = true;
      } else {
        show = this.cellTitle;
      }
      if (options.showTitle !== undefined) {
        show = options.showTitle;
      }
      // 如果column设置了showHeadreTitle，则使用column的值，否则使用全局的headerTitle属性
      let headerShow;
      if (this.headerTitle === undefined) {
        headerShow = true;
      } else {
        headerShow = this.headerTitle;
      }
      if (options.showHeaderTitle !== undefined) {
        headerShow = options.showHeaderTitle;
      }
      return Object.assign(
        {
          name: "title",
          width: 0,
          sortable: false,
          filterable: false,
          align: "",
          headerAlign: "",
          hidden: false,
          fixed: "",
          resizable: true,
          type: "column",
          editorOptions: {},
          showTitle: show,
          showHeaderTitle: headerShow,
          html: this.columnHtml,
          headerHtml: this.headerColumnHtml,
        },
        options || {}
      );
    },

    makeCols() {
      var cols = [];

      let check_column;
      let index_column;
      // 生成checkbox列
      check_column = this.getDefaultColumn({
        name: "__check_col__",
        type: "check",
        resizable: false,
        width: this.checkColWidth,
        title: this.checkColTitle,
        align: "center",
        fixed: "",
      });

      // 生成序号列
      index_column = this.getDefaultColumn({
        name: "__index_col__",
        type: "index",
        resizable: false,
        width: this.indexColWidth,
        title: this.indexColTitle,
        align: "center",
        fixed: "",
      });
      let hasCheckCol = this.checkCol;
      let hasIndexCol = this.indexCol;

      this.data.columns.forEach(col => {
        if (col.name === "__check_col__") {
          if (col.hidden) {
            hasCheckCol = false;
          } else {
            hasCheckCol = true;
            Object.assign(check_column, col);
          }
        } else if (col.name === "__index_col__") {
          if (col.hidden) {
            hasIndexCol = false;
          } else {
            hasIndexCol = true;
            Object.assign(index_column, col);
          }
        } else {
          if (col.hidden) return
          let d = this.getDefaultColumn(col);
          // 增加行编辑操作列的render函数
          if (this.editMode === "row" && col.name === this.actionColumn) {
            d.render = this.editActionRender(col.render);
          }
          if (!d.title) d.title = d.name;
          // 静态模式下，隐藏操作列
          if ((!this.static && col.name === this.actionColumn) || col.name !== this.actionColumn) cols.push(d);
          // 处理format回调，如果是一个字符串，则转为函数
          if (typeof col.format === "string") {
            let func_str = "return " + "`" + col.format + "`";
            let func = new Function("value", "column", "row", func_str);
            col._format = col.format;
            col.format = func;
          }
        }
      });

      if (hasIndexCol) {
        cols.unshift(index_column)
      }
      if (hasCheckCol) {
        cols.unshift(check_column)
      }
      return cols;
    },

    handleResize() {
      this.store.states.columns = this.makeCols();
      this.resize();
    },

    handleScroll(left, top) {
      if (this.leftWidth && this.$refs.left) {
        this.$refs.left.$refs.body.scrollTop = top;
      }
      if (this.rightWidth && this.$refs.right) {
        this.$refs.right.$refs.body.scrollTop = top;
      }
    },

    handlePage(page) {
      this.go(page);
    },

    handlePageSize(size) {
      this.go(1, { pageSize: size });
    },

    handleQueryChange(change) {
      this.$emit("on-query-change", change);
    },

    // 生成缺省的行编辑按钮
    editActionRender(render) {
      return (h, param) => {
        if (!render || param.row._editting) {
          if (this.onRowEditRender) {
            let render = this.onRowEditRender(h, param.row);
            if (render) return render;
          }
          let cls = "u-cell-text";
          if (this.nowrap) cls += " nowrap";
          return h(
            "div",
            {
              class: cls,
            },
            [this.defaultEditRender(h, param.row), this.defaultDeleteRender(h, param.row)]
          );
        } else {
          return render(h, param);
        }
      };
    },

    async validateRow(row) {
      this.clearRowComment(row);
      let res = await this._validateRow(row._editRow);
      if (res) {
        for (let key in res) {
          let v = res[key];
          this.setComment(row, key, v, "error");
        }
        this.$set(row, "_saving", false);
        if (this.onError) {
          this.onError(res);
        }
      }
      return res;
    },

    defaultEditRender(h, row) {
      return h(
        "Button",
        {
          props: {
            type: "primary",
            size: "small",
            loading: row._saving,
          },
          style: {
            margin: "0 5px",
          },
          on: {
            click: async () => {
              if (!row._editting) {
                if (this.onBeforeEditing) {
                  let ret = this.onBeforeEditing(row);
                  if (!ret) return;
                }
                this.$set(row, "_editRow", Object.assign({}, row));
                this.$set(row, "_editting", true);
                if (this.onEditing) this.onEditing(row);
              } else {
                this.$set(row, "_saving", true);
                // 校验错误
                let res = await this.validateRow(row);
                if (res) {
                  return;
                }

                if (this.onSaveRow) {
                  let callback = (flag, data) => {
                    if (flag === "ok") {
                      this.updateRow(copyDataRow(row, Object.assign(row._editRow, data)));
                      this.clearRowComment(row);
                      this.$set(row, "_editting", !row._editting);
                      this.$set(row, "_new", false); //保存之后，将_new置为false
                      delete row._editRow;
                      this.sendInputEvent();
                    } else {
                      this.clearRowComment(row);
                      for (let key in data) {
                        let v = data[key];
                        this.setComment(row, key, v, "error");
                      }
                    }
                    this.$set(row, "_saving", false);
                  };
                  // 增加获取干净数据的处理 2020/04/08
                  let cleanData = deepCopy(row._editRow, true);
                  this.onSaveRow(cleanData, callback, row);
                } else {
                  this.updateRow(copyDataRow(row, row._editRow));
                  delete row._editRow;
                  this.$set(row, "_editting", false);
                  this.$set(row, "_saving", false);
                  this.sendInputEvent();
                }
              }
            },
          },
        },
        row._editting ? "保存" : "编辑"
      );
    },

    // 校验某一行数据
    async _validateRow(row) {
      let rules = {};
      for (let c of this.store.states.columns) {
        if (c.editor && c.editor instanceof Object && c.editor.rule) {
          rules[c.name] = c.editor.rule;
        }
      }
      let res;
      if (!isEmpty(rules)) {
        res = await this.$validator.validate(row, rules);
      }
      return res;
    },

    defaultDeleteRender(h, row) {
      let defaultDeleteFunc = () => {
        if (row._editting) {
          if (this.onCancelEdit) this.onCancelEdit(row);
          this.$set(row, "_editting", false);
          this.$delete(row, "_editRow");
          this.removeComment(row);
          if (row._new) {
            this.removeRow(row);
          }
          return;
        }

        let callback = (flag, data) => {
          if (flag === "ok") {
            this.removeRow(row);
            this.sendInputEvent();
          } else {
            for (let key in data) {
              let v = data[key];
              this.setComment(row, key, v, "error");
            }
            this.$set(row, "_deleting", false);
          }
        };
        if (this.onDeleteRow) {
          this.onDeleteRow(row, callback);
        } else {
          this.removeRow(row);
          this.sendInputEvent();
        }
      };

      let type = row._editting ? "default" : "error";

      return h(
        "Button",
        {
          style: {
            margin: "0 5px",
          },
          props: {
            type: type,
            placement: "top",
            size: "small",
            loading: row._deleting,
          },
          on: {
            click: () => {
              if (this.deleteRowConfirm && !row._editting) {
                this.$Modal.confirm({
                  content: "请确认是否要删除本条记录？",
                  onOk: () => {
                    defaultDeleteFunc();
                  },
                });
              } else {
                defaultDeleteFunc();
              }
            },
          },
        },
        row._editting ? "取消" : "删除"
      );
    },

    go(page, opts) {
      this.page = page;
      if (opts && opts.pageSize) this.pageSize = opts.pageSize;
      this.start = (this.page - 1) * this.pageSize + 1;
      this.$set(this.param, "page", page);
      this.loadData(opts || {});
    },

    reset_query(value) {
      this.$refs.query.reset();
      if (value) {
        this.$refs.query.setValue(value);
        Object.assign(this.param, value);
      }
    },

    clear() {
      this.page = 1;
      this.start = 1;
      this.$set(this.param, "page", 1);
      this.store.states.data = [];
    },

    loadData(url, param) {
      let _url;
      if (url instanceof Object) {
        _url = this.url;
        param = url;
      } else {
        _url = url || this.url;
      }
      Object.assign(this.param, param || {});
      // data 为数据行， others 为其它信息，如total
      const callback = (data, others) => {
        if (data) {
          this.store.states.data = [];
          this.store.states.data = this.makeRows(data);
        }
        if (others && others instanceof Object) {
          this.store.mergeStates(others);
        }
        if (this.afterLoadData) {
          this.afterLoadData();
          this.afterLoadData = null; // 清除
        }
        this.$nextTick(() => {
          this.showLoading(false);
          this.setSelection(this.selected);
          this.sendInputEvent();
        });
      };
      if (this.onLoadData) {
        this.showLoading(true);
        this.onLoadData(_url, this.param, callback);
      }
    },

    handleQuerySubmit(data) {
      this.go(1, data);
    },

    getData() {
      return deepCopy(this.store.states.data, true);
    },

    hideColumn(name, flag=true) {
      for (let col of this.data.columns) {
        if (col.name === name) {
          this.$set(col, 'hidden', flag);
        }
      }
    }
  },

  created() {
    this.store.states.columns = this.makeCols();
    this.store.states.data = this.makeRows(this.store.states.data);
  },

  mounted() {
    this.resize();
    window.addEventListener("resize", this.handleResize, true);

    // 初始化query 的 param
    if (this.$refs.query && this.$refs.query.value) this.param = Object.assign(this.param, this.$refs.query.value);

    if (this.autoLoad) {
      this.$nextTick(() => {
        this.loadData();
      });
    }
    this.oldParentWidth = this.$parent.$el.offsetWidth;
    let self = this;

    this.__resizeHandler = debounce(
      () => {
        let parent = self.$el.parentNode;
        if (!parent) return;
        let p_width = getWH(parent, "width");
        let width = p_width;
        while (1) {
          parent = parent.parentNode;
          if (!parent || !parent.offsetWidth) break;
          if (parent.offsetWidth < width) {
            width = parent.offsetWidth;
            break;
          }
          width = parent.offsetWidth;
        }
        width = Math.min(width, p_width);
        if (width !== self.oldParentWidth) {
          self.store.states.columns = self.makeCols();
          self.resize(width);
          self.oldParentWidth = width;
        }
      },
      100,
      { leading: true }
    );
    if (this.store.states.detectParentResize) {
      let el = findParent(this, "Build");
      if (!el) {
        el = this.$parent.$el;
      } else {
        el = el.$el;
      }
      addListener(el, this.__resizeHandler);
      addListener(self.$el.parentNode, this.__resizeHandler);
    }
  },

  destroy() {
    removeListener(this.$parent.$el, this.__resizeHandler);
  },

  watch: {
    "data.columns": {
      handler: function() {
        this.store.states.columns = this.makeCols();
        this.resize();
      },
      deep: true,
    },

    choices: {
      immediate: true,
      handler(v) {
        for (let field of this.columns) {
          let choices = v[field.name];
          if (choices && field.editor) {
            setChoice(this, field.editor, choices);
          }
        }
        if (this.query && this.query.fields) {
          for (let field of this.query.fields) {
            let choices = v[field.name];
            if (choices) {
              setChoice(this, field, choices);
            }
          }
        }
      },
      deep: true,
    },

    value: {
      handler: function(value) {
        this.store.states.data = this.makeRows(value || []);
      },
      deep: true,
    },
    "store.states.static": function(value) {
      this.store.states.columns = this.makeCols();
      this.resize();
    },
    // 'store.states.data': {
    //   handler: function (value) {
    //     this.$emit('input', value)
    //   },
    //   deep: true
    // }

    "store.states.filterValue": {
      deep: true,
      handler(newVal) {
        this.go(1, newVal);
      },
    },
  },
};
</script>

<style lang="less">
.ivu-btn-group {
  margin-right: 3px;
}

label {
  margin-bottom: 0px;
}

.u-grid-wrapper {
  .u-grid-tools {
    margin-bottom: 5px;

    &:after {
      content: "";
      display: block;
      height: 0;
      clear: both;
      overflow: hidden;
      visibility: hidden;
    }

    .u-grid-tools-left {
      float: left !important;
    }

    .u-grid-tools-right {
      float: right !important;
    }
  }

  .u-grid {
    position: relative;
    font-size: 14px;

    > .column-dragger-guide {
      height: 100%;
      top: 0px;
      left: 0px;
      border-left: 2px dashed green;
      position: absolute;
      z-index: 1000;
    }

    > .loading {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: auto;
      height: 34px;
      text-align: center;
      color: black;
      line-height: 34px;
      border: 1px solid gray;
      min-width: 100px;
      background-color: antiquewhite;
      z-index: 9999;
    }

    .u-table-left,
    .u-table-right {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1000;
      overflow: hidden;
      border-right: none;
      border-bottom: none;

      &.dark {
        box-shadow: 1px 0px 2px #999;
      }

      .u-table-body-scroll {
        overflow: hidden;
      }
    }

    .u-table-right {
      top: 0;
      right: 0;
      left: auto;
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;

      &.dark {
        box-shadow: -1px 0px 2px #999;
      }
    }

    .ivu-checkbox-wrapper {
      margin-right: 0px;
    }
  }

  &.theme-simple {
    .u-table {
      border: none;
      .u-table-header-wrapper {
        background-color: #eee;

        .u-table-header-scroll table.u-table-header th {
          border: none;
          border-bottom: 1px solid #eee;
        }
      }
      .u-table-body-scroll table tr td {
        border: none;
        border-bottom: 1px solid #eee;
      }
    }
  }
  &.theme-mini {
    .u-table {
      border: none;
      .u-table-header-wrapper {
        background-color: transparent;

        .u-table-header-scroll table.u-table-header th {
          border: none;
          border-bottom: 1px solid #eee;
        }
      }
      .u-table-body-scroll table tr td {
        border: none;
      }
    }
  }
}
.u-grid-zebra .u-table-body-scroll table {
  tr {
    background-color: #fff;
  }
  @nth: ~"nth-child(2n)";
  tr:@{nth} {
    background-color: #f8f8f8;

    &.selected {
      background-color: #ffefd5;
    }

    &.hover {
      background-color: #e1eff8;
    }
  }
}
</style>

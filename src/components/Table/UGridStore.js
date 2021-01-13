import List from '../utils/list.js'
import {
  uuid,
  walkTree,
  isEmpty
} from '../utils/utils.js'
import config from '../config'
let settings = config.grid.base

let rowKey = 1

class Store {
  constructor(grid, options, value) {
    this.grid = grid
    this.states = Object.assign({
      columns: [],
      rowHeight: 34,
      minColWidth: 5,
      defaultColWidth: 100,
      nowrap: false,
      width: 'auto',
      height: 'auto',
      theme: 'default', // 表格theme
      gridWidth: 0,
      checkCol: false,
      checkColWidth: 30,
      checkColTitle: '',
      columnAlign: 'center', // 缺省列的对齐方式
      columnHeaderAlign: 'center', // 缺省表头列的对齐方式
      cellTitle: true, // 单元格显示title属性
      headerShow: true, // 是否显示表头，缺省为true
      hoverShow: true, // 是否显示hover效果
      multiHeaderSep: '/', // 多行表头分隔符
      idField: 'id',
      orderField: '', // 排序字段
      static: false, // 是否静态，如果true，则行编辑将禁止，不能进行行选择，可以执行setSelection()
      data: [],
      sortMode: 'remote', // 排序方式，缺省为 remote， 支持 local
      multiSelect: false,
      clickSelect: false, // 点击选中
      selectedRowClass: 'selected', // 选中行反显样式，可以设为指定类名
      resizable: true, // 是否表头列可以调整大小
      draggable: false,
      indexCol: false, // 是否显示序号列
      indexColTitle: '#',
      indexColWidth: 40,
      loadingText: '<i class="ivu-load-loop ivu-icon ivu-icon-ios-loading"></i> 正在装入...', // 正在装入时显示的文本
      autoLoad: true, // 是否自动装入数据
      url: '', // 访问后台的URL
      param: {}, // 访问后台的URL所带参数
      buttons: null,
      zebra: true,
      rightButtons: null,
      bottomButtons: null,
      buttonSize: 'small',
      comments: {}, // 记录单元格的注释，形式为 {row_id: {col_name:comment}}
      classes: {}, // 记录单元格的class
      combineCols: [], // 单元格合并列名
      editMode: 'row', // 编辑模式 'full' 全屏模式 'row' 行模式
      actionColumn: '', // 行编辑时，显示编辑按钮的列名,将缺省显示['编辑', '删除']
      deleteRowConfirm: true, // 删除前是否先确认
      query: null, // 查询条件对象
      noData: '暂无数据', //无数据时显示内容
      noDataHeight: 40, //无数据显示的高度
      // addAutoScrollTo: true, //行编辑在添加新行时，自动滚动到新加行
      detectParentResize: true,
      // 增加单元格横向合并
      colspan: false,
      colspanDelimeter: '--',

      // tree 相关的参数
      tree: false, // 是否treegrid
      defaultExpanded: false, // 缺省折叠状态
      treeField: '', // 展示树结构的列名
      expandField: '_expand', // 标识折叠状态列名
      childrenField: 'children', // 子结点列名
      openedIcon: 'ivu-icon ivu-icon-md-arrow-dropdown', // 树结点展开的图标
      closedIcon: 'ivu-icon ivu-icon-md-arrow-dropright',
      indentWidth: 20, // 子结点缩近宽度
      iconWidth: 14, // icon所占宽度
      hoverRowKey: null, // hover时的rowKey
      checkStrictly: true, // 是否选中时联动选子结点

      // 回调
      onLoadData: null, // 装入数据回调函数，将传入 function (url, param, callback)，当树型结构时，会传入parent字段
      onSelect: null, // 在选择行前执行，返回为True，则允许选中
      onSelectAll: null, // 全选事件回调，如果定义了，则在全选或全不选中，不会再调用 onSelect 回调
      onDeselect: null, // 在取消选择行前执行，返回为True，则允许取消选中
      onCheckable: null, // 是否显示checkbox
      onSaveRow: null, // 保存行时调用 function (row, callback), callback(flag, data)
      onRowClass: null, // 定制行的 class
      // flag 为 'ok'表示成功，data 为最后的数据 'error'表示有错误, data为出错信息
      onError: null, // 保存行时，校验出错时回调
      onSaveCol: null, // 保存单元格时调用 function (value, callback), callback(flag, data)
      // flag 为 'ok'表示成功，data 为最后的数据 'error'表示有错误, data为出错信息
      onDeleteRow: null, // 删除行的确认 function (row, callback), callback(flag, data)
      onRowEditRender: null, // 判断某行编辑列重定义 function (h, row) 返回 null 表示使用缺省的编辑render，
      // 否则应返回一个自定义的render, h为create函数
      onMove: null, // 表格行移动时，如果需要与后台通讯，可以定义onMove，将需要修改的排序信息返回给后台，参数是 [{idfield: orderNo}]
      // 需要定义idField，返回为true，表示成功，否则不进行排序
      onEditing: null, // 进入行编辑状态回调 function(row)，包括点击内置的编辑按钮和调用 addEditRow 方法
      onBeforeEditing: null, // 当点击内置的编辑按钮时，先执行这个判断，如果返回 true 表示可以继续，否则不能编辑
      onCancelEdit: null, // 点击内置的删除按钮时的回调 function(row)

      // 内部变量
      drawColumns: [], // 用于绘制的表头
      columnResizing: false,
      columnPosition: 0,
      checkAll: false,
      indeterminate: false, // 是否checkbox中间状态
      fixedColumns: [],
      leftWidth: 0, // 左侧固定列宽度
      rightWidth: 0, // 右侧固定列宽度
      hscroll: false,
      xscroll: false,
      scrollLeft: 0, // 记录横向滚动条偏移量，用于显示左侧固定列的特殊样式
      isScrollRight: false,
      guiderHeight: 0, // 拖动指示器的高度
      loading: false, // 是否显示loading信息
      selected: {}, // 记录选中结果，可以跨页保存
      selectedRows: {},
      afterLoadData: null, // 在loadData之后的回调用于特殊场合，处理之后会清除，只会运行一次
      oldParentWidth: 0, // 父元素的上次宽度
      filterValue: {}, // 过滤相关的数据
      filterImmediate: true, // 是否在操作过滤时立即返回结果，还是显示一个确定按钮
      filterOkText: '确定', // 显示过滤器确定按钮的文本

      // 分页相关参数
      prev: '上一页',
      next: '下一页',
      first: '',
      last: '',
      start: 1,
      total: 0, // 总条数
      pageSizeOpts: [10, 20, 30, 40, 50], // 每页条数选项
      pagination: false, // 是否显示分页信息，缺省为 false
      page: 1,
      pageSize: 10,
      pageBtnSize: 'small'
    }, settings)

    for (let name in options) {
      if (options.hasOwnProperty(name) && this.states.hasOwnProperty(name)) {
        this.states[name] = options[name]
      }
    }

    if (value && value.length > 0) {
      this.states['data'] = value
    }

    this.setParam(options.param)

    // 初始化states.param
    this.states.param.page = this.states.page
    this.states.param.pageSize = this.states.pageSize

    if (!grid) {
      throw new Error('Grid object is Required.')
    }
  }

  getRowId(row) {
    return row[this.states.idField] || row._rowKey
  }

  selected(row) {
    let id = this.getRowId(row)
    return this.states.selected[id + '']
  }

  toggle(row, force = false) {
    if (this.selected(row)) this.deselect(row, force)
    else this.select(row, force)
  }

  _select(row, force = false) {
    let selectable = true
    let checkable = true
    if (!force && this.states.onSelect) {
      selectable = this.states.onSelect(row, true)
    }
    if (!force && this.states.onCheckable) {
      checkable = this.states.onCheckable(row, true)
    }
    if (selectable && checkable) {
      let id = this.getRowId(row)
      this.grid.$set(this.states.selected, id, id)
      this.grid.$set(this.states.selectedRows, id, row)
    }
    row._selectable = selectable && checkable
    return selectable && checkable
  }

  checkSelectStatus() {
    const _f = (data) => {
      // 检查父结点的选中状态
      let total = 0
      let selected = 0
      let result
      for (let c of data) {
        // 处理子结点
        if (c[this.states.childrenField] && c[this.states.childrenField].length > 0) {
          result = _f(c[this.states.childrenField])
          total += result.total
          selected += result.selected
          if (c._checkable) {
            console.log(c, result)
            c._indeterminate = false
            if (this.states.checkStrictly) {
              if (this.selected(c)) selected++
            } else {
              if (result.total === result.selected && result.total > 0) {
                c._checked = true
                if (!this.states.checkStrictly)
                  this._select(c)
                selected++
              } else {
                c._checked = false
                // 不销定check则取消选中
                if (!this.states.checkStrictly)
                  this._deselect(c)
                if (result.selected)
                  c._indeterminate = true
              }
            }
            total++
          }
        } else {
          if (c._checkable) {
            if (this.selected(c)) {
              selected++
            }
            total++
          }
        }
      }
      result = {
        total,
        selected
      }
      return result
    }
    let result
    result = _f(this.states.data)
    this.states.indeterminate = false
    if (result.total === result.selected && result.total > 0) {
      this.states.checkAll = true
    } else {
      this.states.checkAll = false
      if (result.selected > 0) this.states.indeterminate = true
    }
  }

  select(row, force = false) {
    if (this._select(row, force)) {
      if (!this.states.multiSelect) {
        this.deselectAll()
        this._select(row, force)
      } else {
        if (!this.states.checkStrictly) {
          let data = row[this.states.childrenField]
          if (data && data.length > 0) {
            let rows = []
            walkTree(data, (r) => {
              if (this._select(r, force)) {
                rows.push(r)
              }
            }, this.states.childrenField)
          }
        }
        this.checkSelectStatus()
      }
      this.grid.$emit('on-selected', row)
    }
  }

  selectAll(force = false) {
    let rows = []
    walkTree(this.states.data, (row) => {
      if (this._select(row, force)) {
        rows.push(row)
      }
    }, this.states.childrenField)
    this.states.checkAll = true
    this.states.indeterminate = false
    this.grid.$emit('on-selected-all', rows)
  }

  _deselect(row, force = false) {
    let deselectable = true
    if (!force && this.states.onDeselect) {
      deselectable = this.states.onDeselect(row)
    } else if (!force && this.states.onSelect) {
      deselectable = this.states.onSelect(row, false)
    }
    if (deselectable) {
      let id = this.getRowId(row)
      this.grid.$delete(this.states.selected, id)
      this.grid.$delete(this.states.selectedRows, id)
    }
    return deselectable
  }

  deselect(row, force = false) {
    if (this._deselect(row, force)) {
      if (!this.states.checkStrictly) {
        let data = row[this.states.childrenField]
        if (data && data.length > 0) {
          let rows = []
          walkTree(data, (r) => {
            if (this._deselect(r, force)) {
              rows.push(r)
            }
          }, this.states.childrenField)
        }
      }
      this.checkSelectStatus()
      this.grid.$emit('on-deselected', row)
    }
  }

  deselectAll(force = false) {
    let rows = []
    const callback = (row) => {
      if (this._deselect(row, force)) {
        rows.push(row)
      }
    }
    walkTree(this.states.data, callback)

    // this.states.data.forEach(row => {
    //   if (!this._deselect(row)){
    //     rows.push(row)
    //   }
    // })
    // if (rows.length === 0) {
    //   this.states.selected = {}
    //   this.states.selectedRows = {}
    // }
    this.states.checkAll = false
    this.states.indeterminate = false
    this.grid.$emit('on-deselected-all', rows)
  }

  getSelection() {
    let s = []
    for (let c in this.states.selected) {
      s.push(c)
    }
    return s
  }

  getSelectedRows() {
    return Object.values(this.states.selectedRows)
  }

  setSelection(selection, force = true) {
    // if (Array.isArray(selection)) {
    //   for(let c of selection) {
    //     this.grid.$set(this.states.selected, c, c)
    //   }  
    // } else {
    //   this.grid.$set(this.states, 'selected', selection)
    // }
    if (isEmpty(selection)) return
    let index, s
    if (Array.isArray(selection)) {
      s = selection.slice()
    } else if (selection instanceof Object) {
      s = []
      for (let c in selection) {
        s.push(c)
      }
    } else {
      s = [selection]
    }
    let checkAll = true
    let indeterminate = false
    const callback = (row) => {
      if (s.length === 0) {
        checkAll = false
        return true
      }
      let id = row[this.states.idField]
      index = s.indexOf(id)
      if (index > -1) {
        if (this._select(row, force)) {
          indeterminate = true
        }
        s.splice(index, 1)
      } else {
        checkAll = false
      }
    }
    walkTree(this.states.data, callback)

    // 处理剩余数据
    for (let c of s) {
      this.grid.$set(this.states.selected, c, c)
    }

    this.states.checkAll = checkAll
    if (!checkAll) {
      this.states.indeterminate = indeterminate
    }
  }

  showLoading(loading = true, text = '') {
    this.states.loading = loading
    if (text) {
      this.states.loadingText = text
    }
  }

  //编辑完成后， 发送事件
  sendInputEvent() {
    this.grid.$emit('input', this.states.data)
  }

  removeRow(row) {
    let d
    if (!row._parent) d = this.states.data
    else d = row._parent[this.states.childrenField]
    let removed = List.remove(d, row, this.getKeyField(row))
    for (let i of removed) {
      this.deselect(i, true)
      this.states.total -= 1
    }
    this.sendInputEvent()
    // 增加当无数据时的向前翻页或刷新的处理
    if (this.states.data.length === 0) {
      let pages = Math.ceil(this.states.total / this.states.pageSize)
      if (this.states.page < pages) {
        this.grid.loadData()
      } else if (this.states.page > 1) {
        this.grid.go(this.states.page - 1)
      }
    }
  }

  getKey(row, column) {
    let key, col
    if (typeof row === 'object') {
      key = row._rowKey
    } else {
      key = row
    }
    if (typeof column === 'object') {
      col = column.name
    } else {
      col = column
    }
    return {
      key,
      col
    }
  }


  getComment(row, column) {
    let {
      key,
      col
    } = this.getKey(row, column)
    let r = this.states.comments[key]
    if (!r) return ''
    return r[col]
  }

  setComment(row, column, content, type = 'info') {
    let {
      key,
      col
    } = this.getKey(row, column)
    let r = this.states.comments[key]
    if (!r) {
      r = this.grid.$set(this.states.comments, key, {})
    }
    this.grid.$set(r, col, {
      content: content,
      type: type
    })
  }

  clearRowComment(row) {
    for (let col of this.states.columns) {
      this.removeComment(row, col)
    }
  }

  removeComment(row, column) {
    let {
      key,
      col
    } = this.getKey(row, column)
    let r = this.states.comments[key]
    if (r) {
      if (!col) {
        this.grid.$delete(this.states.comments, key)
      } else {
        this.grid.$delete(r, col)
      }
    }
  }

  getClass(row, column) {
    let {
      key,
      col
    } = this.getKey(row, column)
    let r = this.states.classes[key]
    if (!r) return ''
    return r[col]
  }

  setClass(row, column, name) {
    let {
      key,
      col
    } = this.getKey(row, column)
    let r = this.states.classes[key]
    if (!r) {
      r = this.grid.$set(this.states.classes, key, {})
    }
    this.grid.$set(r, col, name)
  }

  removeClass(row, column) {
    let {
      key,
      col
    } = this.getKey(row, column)
    let r = this.states.classes[key]
    if (r) {
      if (!col) {
        this.grid.$delete(this.states.classes, key)
      } else {
        this.grid.$delete(r, col)
      }
    }
  }

  getKeyField(row) {
    let key
    if (row[this.states.idField]) {
      key = this.states.idField
    } else if (row['_rowKey']) {
      key = '_rowKey'
    } else {
      throw Error('Row data has not defined idField or _rowKey')
    }
    return key
  }

  // 更新行
  updateRow(row, parent) {
    let data
    if (!row._parent && !parent) {
      data = this.states.data
    } else {
      data = (row._parent || parent)[this.states.childrenField]
    }
    List.update(data, row, this.getKeyField(row))
    this.sendInputEvent()
    return row
  }

  getPosition(row, list) {
    if (!row || !list || list && list.length === 0) return -1
    return List.index(list, row, this.getKeyField(row))
  }

  // 新加记录有一个 _new 属性
  // parent 用于处理添加子结点
  // position = 'before', 'after'
  addRow(row, item, position = 'after', isChild = false) {
    let pos, data
    if (!row || isEmpty(row)) {
      row = this.getDefaultRow()
      for (let c of this.states.columns) {
        let v = ''
        if (c.type === 'column') {
          row[c.name] = ''
        }
      }
    } else {
      row = this.getDefaultRow(row)
    }
    if (!item) {
      data = this.states.data
      pos = -1
      if (position === 'before') {
        pos = 0
      }
    } else if (!isChild) {
      data = item._parent
      if (data) {
        data = data[this.states.childrenField]
      } else {
        data = this.states.data
      }
      pos = this.getPosition(item, data)
    } else {
      row._parent = item
      data = item[this.states.childrenField]
      if (!data) {
        this.grid.$set(item, this.states.childrenField, [])
        data = item[this.states.childrenField]
        this.grid.$set(item, '_loaded', true)
        this.grid.$set(item, '_expand', true)
      }
      // 子结点，after为最后，before为最前
      if (position === 'after') pos = -1
      else pos = 0
    }
    if (position === 'after')
      List.add(data, row, pos)
    else
      List.insert(data, pos, row)
    this.states.total += 1
    this.sendInputEvent()
    return row
  }

  // 判断某条记录是否有子结点
  hasChildren(row) {
    return row[this.states.childrenField] && row[this.states.childrenField].length > 0
  }
  // 如果传了参数，则展开指定结点，否则全部展开
  expand(row) {
    if (row) {
      if (this.hasChildren(row) && !row._expand) {
        this.grid.$set(row, '_expand', true)
      }
    } else {
      walkTree(this.states.data, (row) => {
        if (this.hasChildren(row) && !row._expand)
          this.grid.$set(row, '_expand', true)
      }, this.states.childrenField)
    }
  }

  // 如果传了参数，则收起指定结点，否则全部收起
  collapse(row) {
    if (row) {
      if (this.hasChildren(row) && row._expand) {
        this.grid.$set(row, '_expand', false)
      }
    } else {
      walkTree(this.states.data, (row) => {
        if (this.hasChildren(row) && row._expand)
          this.grid.$set(row, '_expand', false)
      }, this.states.childrenField)
    }
  }

  // 返回是否存在处理于行编辑状态的行，如果有返回 true
  isEditing() {
    let flag = false
    walkTree(this.states.data, (row) => {
      if (row._editting) {
        flag = true
        return true
      }
    }, this.states.childrenField)
    return flag
  }

  addChildRow(row, parent, position) {
    return this.addRow(row, parent, position, true)
  }
  /* 生成新的可编辑行
   options 为滚动属性
  */
  addEditRow(row, parent, position, isChild = false) {
    if (this.states.onBeforeEditing) {
      let ret = this.states.onBeforeEditing(row)
      if (!ret) return
    }
    if (!row || isEmpty(row)) {
      row = {
        _new: true
      }
    } else {
      row['_new'] = true
    }
    let n_row = this.addRow(row, parent, position, isChild)
    this.grid.$set(n_row, '_editRow', Object.assign({}, n_row))
    this.grid.$set(n_row, '_editting', true)
    if (this.states.onEditing) this.states.onEditing(n_row)
    return n_row
  }

  addEditChildRow(row, parent, position) {
    return this.addEditRow(row, parent, position, true)
  }

  mergeStates(o) {
    for (let name in o) {
      if (this.states.hasOwnProperty(name)) {
        this.grid.$set(this.states, name, o[name])
      }
    }
  }

  // 获得指定表头字段
  getColumn(name) {
    for (let col of this.states.columns) {
      if (col.name === name) return col
    }
  }

  /* 设置查询相关的参数，分别回填到对应的 page, pageSize, query 中作为初始值 */
  setParam(p) {
    if (!p) return
    if (p.hasOwnProperty('page')) {
      this.states.page = p.page
      delete p.page
    }
    if (p.hasOwnProperty('pageSize')) {
      this.states.pageSize = p.pageSize
      delete p.pageSize
    }

    if (this.states.query)
      this.states.query.value = Object.assign({}, p)
  }

  getDefaultRow(row = {}, parent) {
    return Object.assign({
      _hover: false,
      _selectable: true, // 可被选中
      _checkable: true, // 可显示checkbox
      _checked: false, // 是否选中状态
      _indeterminate: false, // 中间态状态
      _editting: false,
      _hidden: false,
      _level: 0,
      _rowKey: rowKey++,
      _parent: parent
    }, row)
  }

  makeRows(data, parent) {
    let rows = []
    let selectedRows = {}
    data.forEach(row => {
      let new_row = this.getDefaultRow(row, parent)
      if (this.hasChildren(new_row)) {
        new_row['_loaded'] = true
        new_row[this.states.childrenField] = this.makeRows(new_row[this.states.childrenField])
      }
      rows.push(new_row)
      // 处理选中

      let id = this.getRowId(new_row)
      if (this.states.selected[id]) {
        selectedRows[id] = new_row
      }
    })
    this.states.selectedRows = selectedRows
    return rows
  }

  _callOnMove(order) {
    return new Promise((resolve, reject) => {
      if (this.states.onMove) {
        const callback = (result) => {
          if (result) {
            resolve(true)
          } else {
            reject(false)
          }
        }
        this.states.onMove(order, callback)
      } else {
        resolve(true)
      }
    })
  }

  _move(data, pos, des, row) {
    let _id = this.states.idField
    let _order = this.states.orderField
    if (pos === des) return
    let begin = pos
    let end = des
    if (pos > des) {
      begin = des
      end = pos
    }
    let new_order = List.reorder(data, pos, des, {
      idField: _id,
      orderField: _order
    })
    this._callOnMove(new_order).then(() => {
      for (let i = begin, _len = end; i <= _len && i < data.length; i++) {
        for (let j = 0, _len_j = new_order.length; j < _len_j; j++) {
          if (new_order[j][this.states.idField] === data[i][this.states.idField]) {
            data[i][_order] = new_order[j][_order]
            break
          }
        }
      }
      row = data.splice(pos, 1)
      data.splice(des, 0, row[0])
    })
  }

  // 移动元素位置
  // position up, down, first, last
  moveRow(row, position) {
    let d, des // 目标位置
    let _id = this.states.idField
    let _order = this.states.orderField
    if (!row._parent) d = this.states.data
    else d = row._parent[this.states.childrenField]
    let pos = this.getPosition(row, d)
    row = this.states.data[pos]
    switch (position) {
      case 'up':
        des = pos - 1
        if (this.pagination && des < 0 && !row._parent && this.states.page > 1) {
          this.states.afterLoadData = () => {
            let new_order = []
            let last = this.states.data[this.states.data.length - 1]
            new_order.push({
              [_id]: row[_id],
              [_order]: last[_order]
            })
            new_order.push({
              [_id]: last[_id],
              [_order]: row[_order]
            })
            this._callOnMove(new_order).then(() => {
              row[_order] = last[_order]
              this.states.data.splice(this.states.data.length - 1, 1, row)
            })
          }
          this.grid.go(this.states.page - 1)
          return
        }
        break
      case 'down':
        des = pos + 1
        if (this.pagination && des >= this.states.data.length && !row._parent && this.states.page < this.grid.$refs.pagination.pages) {
          this.states.afterLoadData = () => {
            let new_order = []
            let last = this.states.data[0]
            new_order.push({
              [_id]: row[_id],
              [_order]: last[_order]
            })
            new_order.push({
              [_id]: last[_id],
              [_order]: row[_order]
            })
            this._callOnMove(new_order).then(() => {
              row[_order] = last[_order]
              this.states.data.splice(0, 1, row)
            })
          }
          this.grid.go(this.states.page + 1)
          return
        }
        break
      case 'first':
        des = 0
        break
      case 'last':
        des = d.length
        break
    }
    this._move(d, pos, des, row)
    this.sendInputEvent()
  }
}

export default Store
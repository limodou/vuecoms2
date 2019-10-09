import List from '../utils/list.js'

export default {
  props: {
    name: String,
    title: {
      type: String,
      default: ''
    },
    tools: {
      type: Array,
      default: () => []
    },
    fields: {
      type: Array,
      default: () => []
    },
    layout: {
      type: Array,
      default: () => []
    },
    boxComponent: {
      type: String,
      default: 'Box'
    },
    boxOptions: {},
    value: Object,
    static: {
      type: Boolean,
      default: false
    }, //是否表态展示
    staticSuffix: {
      type: String,
      default: '_static'
    },
    buttons: {},
    labelWidth: {
      type: Number,
      default: 150
    },
    labelAlign: {
      type: String,
      default: 'right'
    },
    theme: {
      type: String,
      default: 'default'
    },
    validateResult: {},
    labelDir: { //标签排列方向，水平 horizontal 垂直 vertical
      type: String,
      default: 'horizontal'
    },
    hidden: { // 设置隐藏
      type: Boolean,
      default: false
    }
  },

  computed: {
    rows () {
      let r = [], name
      for (let row of this.layout) {
        let new_r = []
        let span = 24 / row.length

        //重新计算col，对于col可以设置labelWidth, labelAlign, static, hidden, colspan
        for (let col of row) {
          if (typeof col === 'object') {
            name = col.name
            span = col.colspan || span
          } else {
            name = col
            col = {name}
          }
          let f
          if (col.name) {
            f = List.get(this.fields, name, 'name')
            if (!f) throw new Error(`Can't find field ${name} in fields, please check if the name is not correct between layout and fields`)
          } else f = {}
          let field = Object.assign({}, col, {
            component: col.component || 'FormCell',
            colspan: span,
            labelWidth: col.labelAlign || f.labelAlign || this.labelWidth,
            labelAlign: col.labelAlign || f.labelAlign || this.labelAlign,
            static: col.static || f.static || this.static,
            hidden: col.hidden || f.hidden || this.hidden
          }, f)

          // 处理自定义字段列表
          if (field.component !== 'FormCell' && col.fields) {
            field.fields = {}
            for (let c of col.fields) {
              let ff = List.get(this.fields, c, 'name')
              if (!ff) throw new Error(`Can't find field ${c} in fields, please check if the name is not correct between layout and fields`)
              field.fields[c] = ff
            }
          }
          
          if (!field.hidden)
            new_r.push(field)
        }
        if (new_r.length > 0)
          r.push(new_r)
      }
      return r
    },

    btns () {
      if (Array.isArray(this.buttons)) return this.buttons
      else return this.buttons.items
    },

    size () {
      return this.buttons.size || 'default'
    },

    themeClasses () {
      let klass = {}
      klass[`build-layout-theme-${this.theme}`] = true
      klass[`u-layout-${this.labelDir}`] = true
      return klass
    }
  }
}

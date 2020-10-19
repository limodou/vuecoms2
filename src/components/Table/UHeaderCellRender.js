import {findParent} from '../utils/utils'

export default {
  name: 'HeaderCellRender',
  functional: true,
  props: {
    render: Function,
    column: {
      type: Object,
      default: null
    }
  },
  render: (h, ctx) => {
    let grid = findParent(ctx.parent, 'Grid')
    let param = {
      column: ctx.props.column,
      grid: grid
    }
    return ctx.props.render(h, param)
  }
}

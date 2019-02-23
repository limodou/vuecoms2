<template>
  <tr v-for="(row, row_index) in rows"
    ref="rows"
    v-if="!row.row._hidden"
    :style="bodyTrStyle"
    :key="getRowId(row.row)"
    :class="{selected:row.row._selected, hover:row.row._hover}"
    @mouseenter="handleTrMouseEnter(row.row)"
    @mouseleave="handleTrMouseLeave(row.row)"
    >
    <td v-for="(col, col_index) in row.columns"
      :key="col_index"
      @click="handleClick(col.row)"
      :style="cellStyles(col.column)"
      :rowspan="col.rowspan"
      :colspan="col.colspan">
      <Cell :store="store" :col="col" :row_index="row_index" :fixed="fixed"></Cell>
    </td>
  </tr>
</template>

import Cell from './UCell'

export default {
  name: 'uRow',
  components: {Cell},
  props: {
    row: {}
  }
}
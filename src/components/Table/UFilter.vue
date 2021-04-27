<template>
  <div class="u-column-filter exactElement" v-clickoutside:exactElement="handleOutside">
    <Dropdown trigger="custom" class="exactElement" :visible="visible" transfer>
      <a href="javascript:void(0)" @click="handleOpen">
        <i :class="`ivu-icon ivu-icon-${store.states.filterIconOn} filter-on`" v-if="has"></i>
        <i :class="`ivu-icon ivu-icon-${store.states.filterIconOff} filter-off`" v-else></i>
      </a>
      <DropdownMenu slot="list">
        <div class="filter-content exactElement">
          <label class="filter-label">
            {{ column.filterable.label }}
          </label>
          <GenericInput
            v-bind="column.filterable"
            :name="column.name"
            :value="value"
            label-dir="vertical"
            :on="on"
          >
          </GenericInput>
          <!-- <Button v-if="!filterImmediate" @click="handleSubmit">filterOkText</Button> -->
        </div>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import clickoutside from '../directives/clickoutside';
import { mapState, deepCompare, isEmpty } from '../utils/utils.js';
import config from '../config';

export default {
  name: 'u-column-filter',
  directives: { clickoutside },

  data() {
    let value = { [this.column.name]: this.store.states.filterValue[this.column.name] };
    return { visible: false, on: { 'on-keydown': this.handleKeydown }, value };
  },

  props: {
    store: Object,
    column: Object,
  },

  computed: {
    ...mapState('filterValue', 'filterImmediate', 'filterOkText'),

    has() {
      return !isEmpty(this.filterValue[this.column.name]);
    },
    immediate() {
      return this.filterImmediate
      // return this.column.filter.immediate === undefined
      //   ? this.filterImmediate
      //   : this.column.filter.immediate;
    },
  },

  watch: {
    filterValue: {
      deep: true,
      handler(newVal) {
        if (!deepCompare(this.value[this.column.name], this.filterValue[this.column.name])) {
          this.$set(this.value, this.column.name, this.filterValue[this.column.name]);
        }
      },
    },
    value: {
      deep: true,
      handler(newVal) {
        if (this.immediate) {
          this.$set(this.filterValue, this.column.name, newVal[this.column.name]);
        }
      },
    },
  },

  methods: {
    handleOpen() {
      this.visible = true;
    },

    handleOutside() {
      this.visible = false;
    },
    handleKeydown(e) {
      if (e.key === 'Enter') {
        this.visible = false;
      }
    },
  },
};
</script>

<style lang="less">
.u-column-filter {
  display: inline-block;
  margin-left: 2px;

  .filter-off {
    color: #999;
  }
}
.filter-label {
  margin-bottom: 5px;
  display: block;
}
.filter-content {
  padding: 10px;
}
</style>

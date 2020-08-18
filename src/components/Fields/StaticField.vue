<template>
  <div v-if="showTitle" class="u-generic-input-text" v-html="display" :title="title" :class="classes"></div>
  <div v-else class="u-generic-input-text" v-html="display"></div>
</template>

<script>
export default {
  name: 'StaticField',
  props: ['value', 'format', 'name', 'staticSuffix', 'showTitle', 'classes'],
  computed: {
    display () {
      let static_name = `${this.name}${this.staticSuffix}`
      let v = this.value[static_name]
      if (v !== undefined && v !== null) {
        if (this.format) {
          // TODO 这块参数和文档有些不一致，第一个建议是原值，第二个是 column，第三个是整条记录的数据，暂时先不改
          v = this.format(v, this.value[this.name], this.value)
        }
      } else {
        v = ''
      }
      return v
    },
    title () {
      let showTitle = this.showTitle
      if (showTitle && typeof this.display === 'string') {
        if (typeof showTitle === 'function') {
          //调用原始值及format值
          return showTitle(this.value, this.display)
        } else {
          return this.display.replace(/<\/?.+?\/?>/g, '')
        }
      }
    }
  }
}
</script>

<style lang="less">
.u-generic-input-text {
  padding: 3px 4px;
}
</style>

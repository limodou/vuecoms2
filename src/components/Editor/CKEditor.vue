<template>
  <textarea :name="name" @change="handleChange"></textarea>
</template>

<script>
export default {
  name: 'CKEditor',
  data () {
    return {
      current: this.value,
      editor: null
    } 
  },
  props: ['name', 'value'],
  methods: {
    handleChange (value) {
      this.$emit('input', this.editor.getData())
    }
  },
  mounted () {
    ClassicEditor.create(this.$el).then(editor => {
      this.editor = editor
      if (this.value) {
        this.editor.setData(this.value)
      }
    })
  },
  watch: {
    value: {
      handler () {
        this.editor && this.editor.setData(this.value)
      }
    }
  },
  beforeDestroy () {
    this.editor.destroy()
  }
}
</script>

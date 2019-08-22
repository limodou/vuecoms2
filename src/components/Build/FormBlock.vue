<template>
<div>
  <slot></slot>
</div>
</template>

<script>
import validateMixin from './validateMixin'

export default {
  name: 'form-block',
  mixins: [validateMixin],
  props: {
  //   value: {
  //   },
  //   validateResult: {},
  //   data: {
  //     type: Object
  //   },
    // field: {
    //   default () {
    //     return {}
    //   }
    // }
  },
  // data() {
  //   return {
  //     validating: false
  //   }
  // },
  methods: {
    async validate (value, validateResult) {
      // if (this.validating) return
      // this.validating = true
      // this.$emit('validating', true)
      let error
      if (!Array.isArray(validateResult)) {
        validateResult = [validateResult]
        value = [value]
      }
      for (let i=0, _len=validateResult.length; i<_len; i++) {
        let v = validateResult[i]
        let validateRules = {}
        let fieldsLabel = {}
        for(let k of Object.keys(v)) {
          let field = v[k].field
          if (field && !field.static && !field.hidden) {
            validateRules[k] = v[k].rule
            fieldsLabel[k] = field.label
          }
        }

        let res = await this.$validator.validate(value[i], validateRules, fieldsLabel)
        if (res) {
          for(let k of Object.keys(res)) {
            v[k].validateState = 'error'
            v[k].error = res[k]
            if (!error) error = res[k]
          }
        } else {
          for(let k of Object.keys(v)) {
            v[k].validateState = 'success'
            v[k].error = ''
          }
        }
      }

      // this.validating = false
      // this.$emit('validating', false)

      return error
    },

    makeFields (fields=[]) {
      let fs = {}
      for(let field of fields) {
        fs[field.name] = field
        this.$set(field, 'static', field.static || false)
        this.$set(field, 'hidden', field.hidden || false)
        this.$set(field, 'enableOnChange', false) // 禁止Input确发onChange回调
        if (typeof field.options === 'undefined') {
          this.$set(field, 'options', {})
        }
        if (field.options.hasOwnProperty('choices'))
          this.$set(field.options, 'choices', field.options.choices)
        if (!field.type)
          this.$set(field, 'type', 'str') //str
      }
      return fs
    },
    makeValidateResult (fields=[]) {
      let validateResult = {}
      for(let name in fields) {
        let field = fields[name]
        let rule = this.getRule(field)
        validateResult[name] = {error: '', validateState: '', rule, field, fullfield: field.label}
      }
      return validateResult
    }
  },
  // watch: {
  //   data: {
  //     handler () {
  //       this.makeFields()
  //       this.makeValidateResults()
  //       // this.mergeRules()
  //     },
  //     deep: true
  //   }
  // }
}
</script>
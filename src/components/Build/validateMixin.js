export default {
  methods: {
    validateRule: async function (value, fieldname, validateResult) {
      let result = validateResult[fieldname]
      if (!result) return
      if (result.rule.length > 0) {
        result.validateState = 'validating'
    
        let res = await this.$validator.validate(value, {[fieldname]: result.rule}, {fieldname: result.fullfield})
        if (res) {
          result.validateState = 'error'
          result.error = res[fieldname]
        } else {
          result.validateState = 'success'
          result.error = ''
        }
      }
    }
  }
}


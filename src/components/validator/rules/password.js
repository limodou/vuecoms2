const PASSWORD = "^(?=.*[a-zA-Z])(?=.*\\\d)(?=.*[~!@#$%^&*()_+`\\\-={}\\\[\\]:\\\";'<>?,.\\\/])."

export default (rule, value, model) => {
	let oldvalue = value
	if (rule.trim && value) value = value.trim()
  if (!value) {
		if (rule.required) return rule.makeError('required')
		if (!oldvalue) return
	}

  if (value) {
    let range
    let expected
    let type
    let length = value.length
    if (rule.min && rule.max && (length<rule.min || length>rule.max)) {
      type = 'passwordRange'
      return rule.makeError(type, expected)
    } else if (rule.min && length<rule.min) {
      expected = rule.min
      type = 'passwordMin'
      return rule.makeError(type, expected)
    } else if (rule.max && length > rule.max) {
      expected = rule.max
      type = 'passwordMax'
      return rule.makeError(type, expected)
    } else if (rule.range && (length < rule.range[0] || length > rule.range[1])) {
      expected = `${rule.range[0]}-${rule.range[1]}`
      type = 'passwordRange'
      return rule.makeError(type, expected)
    } else {
      range = '*$'
      type = 'password'
    }
    const pattern = new RegExp(PASSWORD+range)
    
    if (!pattern.test(value)) {
      return rule.makeError(type, expected)
    }
  }
}
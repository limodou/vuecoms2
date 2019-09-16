const PASSWORD = "^(?=.*[a-zA-Z])(?=.*\\\d)(?=.*[~!@#$%^&*()_+`\\\-={}\\\[\\]:\\\";'<>?,.\\\/])."

export default (rule, value, model) => {
	let oldvalue = value
	if (rule.trim) value = value.trim()
  if (!value) {
		if (rule.required) return rule.makeError('required')
		if (!oldvalue) return
	}

  if (value) {
    let range
    let expected
    let type
    if (rule.min && rule.max) {
      range = `{${rule.min},${rule.max}}$`
      expected = `${rule.min}-${rule.max}`
      type = 'passwordRange'
    } else if (rule.min) {
      range = `{${rule.min},}$`
      expected = rule.min
      type = 'passwordMin'
    } else if (rule.max) {
      range = `{,${rule.max}}$`
      expected = rule.max
      type = 'passwordMax'
    } else if (rule.range) {
      range = `{${rule.range[0]},${rule.range[1]}}$`
      expected = `${rule.range[0]}-${rule.range[1]}`
      type = 'passwordRange'
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
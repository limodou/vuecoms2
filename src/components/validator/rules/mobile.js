const MOBILE = /^1[3456789]\d{9}$/

export default (rule, value, model) => {
	let oldvalue = value
	if (rule.trim) value = value.trim()
	if (!value) {
		if (rule.required) return rule.makeError('required')
		if (!oldvalue) return
	}

  if(value && !(MOBILE.test(value))){ 
      return rule.makeError('mobile')
  } 
}
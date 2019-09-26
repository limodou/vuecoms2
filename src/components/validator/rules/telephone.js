const TELEPNONE = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/

export default (rule, value, model) => {
	let oldvalue = value
	if (rule.trim && value) value = value.trim()
	if (!value) {
		if (rule.required) return rule.makeError('required')
		if (!oldvalue) return
	}

  if(value && !(TELEPNONE.test(value))){ 
      return rule.makeError('telephone')
  } 
}
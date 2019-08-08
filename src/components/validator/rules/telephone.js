const TELEPNONE = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/

export default (rule, value, model) => {
	if (!value) {
		if (rule.required) return rule.makeError('required')
		return
	}

  if(value && !(TELEPNONE.test(value))){ 
      return rule.makeError('telephone')
  } 
}
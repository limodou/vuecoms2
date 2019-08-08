const MOBILE = /^1[3456789]\d{9}$/

export default (rule, value, model) => {
	if (!value) {
		if (rule.required) return rule.makeError('required')
		return
	}

  if(value && !(MOBILE.test(value))){ 
      return rule.makeError('mobile')
  } 
}
export default (rule, value, model) => {
	if (!value) {
		if (rule.required) return rule.makeError('required')
		return
	}

	if (value) {
		if ((rule.convert === undefined || rule.convert === true) && !(value instanceof Date)) {
			value = new Date(value)
		}
		
		if (!(value instanceof Date)) {
			return rule.makeError("date")
		}
	
		if (isNaN(value.getTime())) {
			return rule.makeError("date")
		}	
	}
}
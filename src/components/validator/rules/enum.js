export default (rule, value, model) => {
	if (!value) {
		if (rule.required) return rule.makeError('required')
		return
	}

	if (rule.values != null && rule.values.indexOf(value) === -1) {
		return rule.makeError("enumValue", rule.values, value);
	}
}

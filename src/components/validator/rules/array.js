export default (rule, value, model) => {
	if (!Array.isArray(value)) {
		return rule.makeError("array")
	}

	const arrLength = value.length;

	if (rule.required && arrLength === 0)
		return rule.makeError('required')

	if (rule.min != null && arrLength < rule.min) {
		return rule.makeError("arrayMin", rule.min, arrLength);
	}

	if (rule.max != null && arrLength > rule.max) {
		return rule.makeError("arrayMax", rule.max, arrLength);
	}

	// Check fix length
	if (rule.length != null && arrLength !== rule.length) {
		return rule.makeError("arrayLength", rule.length, arrLength);
	}	

	if (rule.contains != null && value.indexOf(rule.contains) === -1) {
		return rule.makeError("arrayContains", rule.contains);
	}	

	if (rule.enum != null) {
		for (let i = 0; i < value.length; i++) {
			if (rule.enum.indexOf(value[i]) === -1) {
				return rule.makeError("arrayEnum", value[i], rule.enum);
			}
		}
	}	
}
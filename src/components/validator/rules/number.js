export default (rule, value, model) => {
	if (value === undefined || value === '') {
		if (rule.required) return rule.makeError('required')
		return
	}

	if (rule.convert === true && typeof value !== "number") {
		value = Number(value)
	}

	if (typeof value !== "number") {
		return rule.makeError("number")
	}

	if (isNaN(value) || !isFinite(value)) {
		return rule.makeError("number")
	}

	if (rule.min !== undefined && value < rule.min) {
		return rule.makeError("numberMin", rule.min, value)
	}

	if (rule.max !== undefined && value > rule.max) {
		return rule.makeError("numberMax", rule.max, value)
	}

	if (rule.range && (value < rule.range[0] || value > rule.range[1])) {
		return rule.makeError("numberRange", `(${rule.range[0]}, ${rule.range[1]})`, value)
	}

	// Check fix value
	if (rule.equal !== undefined && value !== rule.equal) {
		return rule.makeError("numberEqual", rule.equal, value)
	}	

	// Check not fix value
	if (rule.notEqual !== undefined && value === rule.notEqual) {
		return rule.makeError("numberNotEqual", rule.notEqual)
	}	

	// Check integer
	if (rule.integer === true && value % 1 !== 0) {
		return rule.makeError("numberInteger", value)
	}	

	// Check positive
	if (rule.positive === true && value <= 0) {
		return rule.makeError("numberPositive", value)
	}	

	// Check negative
	if (rule.negative === true && value >= 0) {
		return rule.makeError("numberNegative", value)
	}
}
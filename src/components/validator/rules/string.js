const NUMERIC_PATTERN = /^-?[0-9]\d*(\.\d+)?$/
const ALPHA_PATTERN = /^[a-zA-Z]+$/
const ALPHANUM_PATTERN = /^[a-zA-Z0-9]+$/
const ALPHADASH_PATTERN = /^[a-zA-Z0-9_-]+$/
const INTEGER = /^\d+$/

export default (rule, value, model) => {
	let oldvalue = value
	if (rule.trim && value) value = value.trim()

	if (!value) {
		if (rule.required) return rule.makeError('required')
		if (!oldvalue) return
	}

	if (typeof value !== "string") {
		return rule.makeError("string")
	}

	const valueLength = value.length

	if (rule.min && valueLength < rule.min) {
		return rule.makeError("stringMin", rule.min, valueLength)
	}

	if (rule.max && valueLength > rule.max) {
		return rule.makeError("stringMax", rule.max, valueLength)
	}

	if (rule.length && valueLength !== rule.length) {
		return rule.makeError("stringLength", rule.length, valueLength)
	}

	if (rule.range && (valueLength < rule.range[0] || valueLength > rule.range[1])) {
		return rule.makeError("stringRange", `(${rule.range[0]}, ${rule.range[1]})`, valueLength)
	}
	if (rule.pattern) {
		if (rule.pattern.startsWith('/') && rule.pattern.endsWith('/')) rule.pattern = rule.pattern.slice(1, rule.pattern.length-1)
		const pattern = typeof rule.pattern == "string" ? new RegExp(rule.pattern, rule.patternFlags) : rule.pattern
		if (!pattern.test(value))
			return rule.makeError("stringPattern", pattern )
	}

	if (rule.contains && value.indexOf(rule.contains) === -1) {
		return rule.makeError("stringContains", rule.contains)
	}

	if (rule.enum  && rule.enum.indexOf(value) === -1) {
		return rule.makeError("stringEnum", rule.enum)
	}

	if (rule.numeric === true && !NUMERIC_PATTERN.test(value) ) {
		return rule.makeError("stringNumeric", "A numeric string", value)
	}

	if (rule.integer === true && !INTEGER.test(value)) {
		return rule.makeError("stringInteger", "A integer string", value)
	}

	if(rule.alpha === true && !ALPHA_PATTERN.test(value)) {
		return rule.makeError("stringAlpha", "An alphabetic string", value)
	}

	if(rule.alphanum === true && !ALPHANUM_PATTERN.test(value)) {
		return rule.makeError("stringAlphanum", "An alphanumeric string", value)
	}

	if(rule.alphadash === true && !ALPHADASH_PATTERN.test(value)) {
		return rule.makeError("stringAlphadash", "An alphadash string", value)
	}
}

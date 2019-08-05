const PRECISE_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const BASIC_PATTERN = /^\S+@\S+\.\S+$/;

export default (rule, value, model) => {
	if (!value) {
		if (rule.required) return rule.makeError('required')
		return
	}

	if (typeof value !== "string") {
		return rule.makeError("string")
	}

	let pattern;
	if (rule.mode == "precise")
		pattern = PRECISE_PATTERN
	else
		pattern = BASIC_PATTERN

	if (!pattern.test(value)) {
		return rule.makeError("email")
	}
}

export default (rule, value, model) => {
	if (rule.convert === true && typeof value !== "boolean") {
		if (
			value === 1
		|| !value
		|| value === 0
		|| value === "true"
		|| value === "false"
		|| value === "1"
		|| value === "0"
		|| value === "on"
		|| value === "off"
		) 
			return 
		else return rule.makeError('boolean')
	}
	
	if (typeof value !== "boolean") {
		return rule.makeError("boolean");
	}
}

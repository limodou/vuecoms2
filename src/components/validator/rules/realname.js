const HZ = /^([\u4e00-\u9fa5\·]+)$/
const EN = /^([a-zA-Z\.\s]+)$/
const ALL = /^([\u4e00-\u9fa5\·]+|[a-zA-Z\.\s]+)$/

export default (rule, value, model) => {
	let oldvalue = value
	if (rule.trim && value) value = value.trim()
  if (!value) {
		if (rule.required) return rule.makeError('required')
		if (!oldvalue) return
	}

  if (rule.hz && !HZ.test(value)) {
    return rule.makeError('realnameHZ')
  }
  if (rule.en && !EN.test(value)) {
    return rule.makeError('realnameEN')
  }
  if(!ALL.test(value)) {
    return rule.makeError('realname')
  }

  const valueLength = value.length

	if (rule.min && valueLength < rule.min) {
		return rule.makeError("stringMin", rule.min, valueLength)
  }

  if (!rule.max) rule.max = 20

	if (rule.max && valueLength > rule.max) {
		return rule.makeError("stringMax", rule.max, valueLength)
	}
}

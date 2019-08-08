const HZ = /^([\u4e00-\u9fa5\·]{1,20})$/
const ALL = /^([\u4e00-\u9fa5\·]{1,20}|[a-zA-Z\.\s]{1,20})$/

export default (rule, value, model) => {
  if (!value) {
		if (rule.required) return rule.makeError('required')
		return
	}

  if (rule.hz && !HZ.test(value)) {
    return rule.makeError('realnameHZ')
  }
  if(!ALL.test(value)) {
    return rule.makeError('realname')
  }
}

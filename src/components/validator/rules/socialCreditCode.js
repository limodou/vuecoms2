const SocialCreditCode = /^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$/

export default (rule, value, model) => {
	if (!value) {
		if (rule.required) return rule.makeError('required')
		return
	}

  if(value && !(SocialCreditCode.test(value))){ 
      return rule.makeError('SocialCreditCode')
  } 
}
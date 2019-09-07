const SocialCreditCode = /^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$/

// 获取校验位
const checkCRC = (code) => {
	let weight = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28]
	let str = '0123456789ABCDEFGHJKLMNPQRTUWXY'
	let map1 = {} // 正向映射
	let map2 = {} // 反向映射
	Array.from(str).forEach((v, index) => {
		map1[v] = index
		map2[index] = v
	})
	let t = 0
	Array.from(code).forEach((v, index) => {
		t += (weight[index] || 0) * map1[v]
	})
	return code[code.length-1] === map2[31-t%31]
}
export default (rule, value, model) => {
	if (!value) {
		if (rule.required) return rule.makeError('required')
		return
	}

  if(value && !(SocialCreditCode.test(value) && checkCRC(value))){ 
      return rule.makeError('SocialCreditCode')
  } 
}
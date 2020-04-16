export default {
	required: "{field} 必填！",

	string: "{field} 必须是一个字符串！",
	stringEmpty: "{field} 不允许为空！",
	stringMin: "{field} 长度需大于等于 {expected} 长度！",
	stringMax: "{field} 长度需小于等于 {expected} 长度！",
	stringLength: "{field} 长度需等于 {expected} 长度！",
	stringPattern: "{field} 无法与要求的模式相匹配！",
	stringRange: "{field} 长度应在 {expected} 长度之间！",
	stringContains: "{field} 应包含 '{expected}' 内容！",
	stringEnum: "{field} 无法与任一允许的值相匹配！",
	stringNumeric: "{field} 需要是包含数字的字符串！",
	stringInteger: "{field} 需要是包含数字的字符串！",
	stringAlpha: "{field} 需要是包含字母的字符串！",
	stringAlphanum: "{field} 需要是包含字母和数字的字符串！",
	stringAlphadash: "{field} 需要是包含字母、横线及下划线的字符串！",

	number: "{field} 需要是一个数值！",
	numberMin: "{field} 需要大于等于 {expected}！",
	numberMax: "{field} 需要小于等于 {expected}！",
	numberRange: "{field} 需要在 {expected} 之间！",
	numberEqual: "{field} 需要等于 {expected}！",
	numberNotEqual: "{field} 不能等于 {expected}！",
	numberInteger: "{field} 需要是整数！",
	numberPositive: "{field} 需要是一个正数！",
	numberNegative: "{field} 需要是一个负数！",

	array: "{field} 需要一个数组！",
	arrayMin: "{field} 需要至少包含 {expected} 个值！",
	arrayMax: "{field} 需要至多包含 {expected} 个值！",
	arrayLength: "{field} 需要包含 {expected} 个值！",
	arrayContains: "{field} 的值需要包含 '{expected}' ！",
	arrayEnum: "{field} 的值未包含在 '{expected}' 中！",

	boolean: "{field} 需要是一个布尔值！",

	date: "{field} 需要是一个日期格式值！",
	dateMin: "{field} 需要大于等于 {expected}！",
	dateMax: "{field} 需要小于等于 {expected}！",

	email: "{field} 需要是有效的邮箱地址！",

	url: "{field} 需要是有效的链接地址！",

	enumValue: "{field} 的值未包含在 '{expected}' 中！！",

	object: "{field} 需要是一个对象！",
	objectStrict: "{field} 包含无效的键值: '{actual}'！",

	idnumber: "{field} 不是有效身份证号！",
	mobile: "{field} 不是有效手机号！",
	telephone: "{field} 不是有效的固定电话号码！",
	ip: "{field} 不是有效的IP地址！",
	ipv4: "{field} 不是有效的IPV4地址！",
	ipv6: "{field} 不是有效的IPV6地址！",
	realname: "{field} 不是有效的姓名，仅支持全部汉字，或全部英文字母！",
	realnameHZ: "{field} 不是有效的姓名，仅支持汉字！",
	realnameEN: "{field} 不是有效的姓名，仅支持英文字母, 点号和空格！",
	password: "{field} 不是有效的密码，需要包含字母，数字和特殊字符！",
	passwordMin: "{field} 长度需大于等于 {expected} 长度！",
	passwordMax: "{field} 长度需小于等于 {expected} 长度！",
	passwordRange: "{field} 长度应在 {expected} 长度之间！",
	SocialCreditCode: "{field} 不是有效统一社会信用代码！",
	zipcode: "{field} 不是有效的邮政编码！",

};
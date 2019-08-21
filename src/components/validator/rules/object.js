import {isEmpty} from '../../utils/utils'

export default async function (rule, value, model) {
	if (typeof value !== "object" || value === null || Array.isArray(value)) {
		return rule.makeError("object")
	}

	if (rule.props) {
		return await this.validate(value, rule.props)
	}
}
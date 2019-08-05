import {isEmpty} from '../../utils/utils'

export default (rule, value, model) => {
	if (rule.required && isEmpty(value)) {
		return rule.makeError('required')
	}
}


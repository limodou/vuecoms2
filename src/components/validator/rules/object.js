import {isEmpty} from '../../utils/utils'

export default (rule, value, model) => {
	if (typeof value !== "object" || value === null || Array.isArray(value)) {
		return rule.makeError("object")
	}

	if (rule.strict === true && rule.props) {
		const allowedProps = Object.keys(rule.props)
		const invalidProps = [];
		const props = Object.keys(value);

		for (let i = 0; i < props.length; i++) {
			if (allowedProps.indexOf(props[i]) === -1) {
				invalidProps.push(props[i]);
			}
		}
		if (invalidProps.length !== 0) {
			return rule.makeError("objectStrict", undefined, invalidProps.join(", "));
		}
	}
}
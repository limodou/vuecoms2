import Field from './Field'
import {isDate, formatDate} from '../utils/utils.js'

export default class DatetimeField extends Field {
  constructor (parent, options) {
    super(parent, options)
    this.component = 'DatePicker'
    this.defaultOptions = {transfer: true, type: 'datetime'}
    this.events = ['input']
  }

  convert_value (x) {
    if (this.options.convert === false) return x
    if (x instanceof Date){
      return formatDate(x, this.options.format || 'yyyy/MM/dd HH:mm:ss')
    }
    if (isDate(x)) {
      return x
    }
    return ''
  }
}

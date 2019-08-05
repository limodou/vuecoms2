import any from './any'
import boolean from './boolean'
import date from './date'
import email from './email'
import Enum from './enum'
import array from './array'
import number from './number'
import object from './object'
import string from './string'
import url from './url'

let rules = {
  any,
  boolean,
  date,
  email,
  enum: Enum,
  array,
  number,
  object,
  string,
  url
}
export default {...rules}
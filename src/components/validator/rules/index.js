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
import idnumber from './idnumber'
import mobile from './mobile'
import telephone from './telephone'
import ip from './ip'
import realname from './realname'
import password from './password'
import socialCreditCode from './socialCreditCode'
import zipcode from './zipcode'

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
  url,
  idnumber,
  mobile,
  telephone,
  ip,
  realname,
  password,
  socialCreditCode,
  zipcode
}
export default {...rules}
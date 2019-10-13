import { expect } from 'chai'

import Validator from '../src/components/validator'
import messages from '../src/components/validator/messages/messages_en_US'

const async_validate = (rule, value, model) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('Error')
    }, 1)
  })
}

describe('validator', function () {
  it('Test any', function() {
    let validator = new Validator({messages})
    return validator.validate({s: 'x'}, {s: {type: 'any', required: true}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test any required', function() {
    let validator = new Validator({messages})
    return validator.validate({b: 'x'}, {s: {type: 'any', required: true}}).then((res) => {
      expect(res).to.eql({ s: 'The \'s\' field is required!' })
    })
  })

  it('Test any required messages', function() {
    let validator = new Validator({messages})
    return validator.validate({b: 'x'}, {s: {type: 'any', required: true, messages: {required: 'Error'}}}).then((res) => {
      expect(res).to.eql({ s: 'Error' })
    })
  })

  it('Add new rule type', function() {
    const abc = (rule, fieldvalue, model) => {
      if (fieldvalue !== 'abc') return "The value should be 'abc'!"
    }
    let validator = new Validator({rules: {abc}})
    return validator.validate({s: 'x'}, {s: {type: 'abc'}}).then((res) => {
      expect(res).to.eql({s: 'The value should be \'abc\'!'})
    })
  })

  it('Replace message of required', function() {
    let required = "{field} 必填！"
    let validator = new Validator({messages: {required}})
    return validator.validate({b: 'x'}, {s: {type: 'any', required: true}}).then((res) => {
      expect(res).to.eql({ s: 's 必填！' })
    })
  })

  it('Test boolean valid', function() {
    let validator = new Validator({messages})
    return validator.validate({b: true}, {b: {type: 'boolean'}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test boolean invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({b: '1'}, {b: {type: 'boolean'}}).then((res) => {
      expect(res).to.eql({ b: "The 'b' field must be a boolean!" })
    })
  })

  it('Test boolean convert', function() {
    let validator = new Validator({messages})
    return validator.validate({b: '1'}, {b: {type: 'boolean', convert: true}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test date', function() {
    let validator = new Validator({messages})
    return validator.validate({d: '2019-12-06'}, {d: {type: 'date', convert: true}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test date long', function() {
    let validator = new Validator({messages})
    return validator.validate({d: '2019-12-06 12:23:24'}, {d: {type: 'date'}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test date empty', function() {
    let validator = new Validator({messages})
    return validator.validate({d: ''}, {d: {type: 'date', convert: true}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test date invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({d: 'abc'}, {d: {type: 'date', convert: true}}).then((res) => {
      expect(res).to.eql({d: "The 'd' field must be a Date!"})
    })
  })

  it('Test date array rule', function() {
    let validator = new Validator({messages})
    return validator.validate({d: 'abc'}, {d: [
      {type: 'any', required: true},
      {type: 'date', convert: true}]}).then((res) => {
        expect(res).to.eql({d: "The 'd' field must be a Date!"})
      })
  })

  it('Test email valid', function() {
    let validator = new Validator({messages})
    return validator.validate({e: 'abc@gmail.com'}, {e: {type: 'email'}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test email invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({e: 'abc'}, {e: {type: 'email'}}).then((res) => {
      expect(res).to.eql({e: "The 'e' field must be a valid e-mail!"})
    })
  })

  it('Test enum valid', function() {
    let validator = new Validator({messages})
    return validator.validate({e: 'a'}, {e: {type: 'enum', values: ['a', 'b', 'c']}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test enum invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({e: 'd'}, {e: {type: 'enum', values: ['a', 'b', 'c']}}).then((res) => {
      expect(res).to.eql({e: "The 'e' field value 'a,b,c' does not match any of the allowed values!"})
    })
  })

  it('Test custom validate function', function() {
    let validator = new Validator({messages})
    return validator.validate({e: 'd'}, {e: {validate (rule, value, model) {}}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test custom validate function invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({e: 'd'}, {e: {validate (rule, value, model) {
      return 'Error'
    }}}).then((res) => {
      expect(res).to.eql({e: 'Error'})
    })
  })

  it('Test custom validate function return Error', function() {
    let validator = new Validator({messages})
    return validator.validate({e: 'd'}, {e: {validate (rule, value, model) {
      return new Error('Error')
    }}}).then((res) => {
      expect(res).to.eql({e: 'Error'})
    })
  })

  it('Test array invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({a: 'd'}, {a: {type: 'array'}}).then((res) => {
      expect(res).to.eql({a: "The 'a' field must be an array!"})
    })
  })

  it('Test array required', function() {
    let validator = new Validator({messages})
    return validator.validate({a: []}, {a: {type: 'array', required: true}}).then((res) => {
      expect(res).to.eql({ a: "The \'a\' field is required!" })
    })
  })

  it('Test array empty', function() {
    let validator = new Validator({messages})
    return validator.validate({a: []}, {a: {type: 'array'}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test array min', function() {
    let validator = new Validator({messages})
    return validator.validate({a: ['1']}, {a: {type: 'array', required: true, min:3}}).then((res) => {
      expect(res).to.eql({a: "The 'a' field must contain at least 3 items!"})
    })
  })

  it('Test array max', function() {
    let validator = new Validator({messages})
    return validator.validate({a: [1, 2, 3, 4, 5]}, {a: {type: 'array', required: true, max:3}}).then((res) => {
      expect(res).to.eql({a: "The 'a' field must contain less than or equal to 3 items!"})
    })
  })

  it('Test array length', function() {
    let validator = new Validator({messages})
    return validator.validate({a: [1, 2, 3, 4, 5]}, {a: {type: 'array', required: true, length:3}}).then((res) => {
      expect(res).to.eql({a: "The 'a' field must contain 3 items!"})
    })
  })

  it('Test array contains', function() {
    let validator = new Validator({messages})
    return validator.validate({a: [1, 2, 3, 4, 5]}, {a: {type: 'array', required: true, contains:6}}).then((res) => {
      expect(res).to.eql({a: "The 'a' field must contain the '6' item!"})
    })
  })

  it('Test array enum', function() {
    let validator = new Validator({messages})
    return validator.validate({a: [1, 2, 3, 4, 5]}, {a: {type: 'array', required: true, enum:[1, 6]}}).then((res) => {
      expect(res).to.eql({a: "The 'a field value '2' does not match any of the allowed values!"})
    })
  })

  it('Test array items required', function() {
    let validator = new Validator({messages})
    return validator.validate({a: []}, {a: {type: 'array', validate () {return 'TEST'}, items: {type: 'object', props: {
      a: 'number',
      b: 'number'
    }}}}).then((res) => {
      expect(res).to.eql({ a: "The \'a\' field is required!" })
    })
  })

  it('Test array items invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({a: [
      {a: 1, b: '2'},
      {a: 1, b: 2}
    ]}, {a: {type: 'array', items: {type: 'object', props: {
      a: 'number',
      b: 'number'
    }}}}).then((res) => {
      expect(res).to.eql({a:[{b:"The 'b' field must be a number!"},null]})
    })
  })

  it('Test number', function() {
    let validator = new Validator({messages})
    return validator.validate({n: '1'}, {n: {type: 'number'}}).then((res) => {
      expect(res).to.eql({n: "The 'n' field must be a number!"})
    })
  })

  it('Test number convert', function() {
    let validator = new Validator({messages})
    return validator.validate({n: '1'}, {n: {type: 'number', convert: true}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test number convert not required', function() {
    let validator = new Validator({messages})
    return validator.validate({n: ''}, {n: {type: 'number', positive: true, convert: true}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test number convert negative', function() {
    let validator = new Validator({messages})
    return validator.validate({n: '-1'}, {n: {type: 'number', convert: true}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test number min', function() {
    let validator = new Validator({messages})
    return validator.validate({n: 1}, {n: {type: 'number', min: 3}}).then((res) => {
      expect(res).to.eql({n: "The 'n' field must be greater than or equal to 3!"})
    })
  })

  it('Test number max', function() {
    let validator = new Validator({messages})
    return validator.validate({n: 5}, {n: {type: 'number', max: 3}}).then((res) => {
      expect(res).to.eql({n: "The 'n' field must be less than or equal to 3!"})
    })
  })

  it('Test number range', function() {
    let validator = new Validator({messages})
    return validator.validate({n: 5}, {n: {type: 'number', range: [10, 20]}}).then((res) => {
      expect(res).to.eql({n: "The 'n' field should between (10, 20)!"})
    })
  })

  it('Test number equal', function() {
    let validator = new Validator({messages})
    return validator.validate({n: 5}, {n: {type: 'number', equal: 3}}).then((res) => {
      expect(res).to.eql({n: "The 'n' field must be equal with 3!"})
    })
  })

  it('Test number notequal', function() {
    let validator = new Validator({messages})
    return validator.validate({n: 5}, {n: {type: 'number', notEqual: 5}}).then((res) => {
      expect(res).to.eql({n: "The 'n' field can't be equal with 5!"})
    })
  })

  it('Test number integer', function() {
    let validator = new Validator({messages})
    return validator.validate({n: 0.5}, {n: {type: 'number', integer: true}}).then((res) => {
      expect(res).to.eql({n: "The 'n' field must be an integer!"})
    })
  })

  it('Test number positive', function() {
    let validator = new Validator({messages})
    return validator.validate({n: -1}, {n: {type: 'number', positive: true}}).then((res) => {
      expect(res).to.eql({n: "The 'n' field must be a positive number!"})
    })
  })

  it('Test number negative', function() {
    let validator = new Validator({messages})
    return validator.validate({n: 1}, {n: {type: 'number', negative: true}}).then((res) => {
      expect(res).to.eql({n: "The 'n' field must be a negative number!"})
    })
  })

  // it('Test object empty', function() {
  //   let validator = new Validator({messages})
  //   return validator.validate({n: {}}, {n: {type: 'object'}}).then((res) => {
  //     expect(res).to.eql({n: "The 'n' field is required!"})
  //   })
  // })

  it('Test string', function() {
    let validator = new Validator({messages})
    return validator.validate({s: ''}, {s: {type: 'string', required: true}}).then((res) => {
      expect(res).to.eql({s: "The 's' field is required!"})
    })
  })

  it('Test string empty', function() {
    let validator = new Validator({messages})
    return validator.validate({s: ''}, {s: {type: 'string'}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test string empty trim', function() {
    let validator = new Validator({messages})
    return validator.validate({s: '     '}, {s: {type: 'string', trim: true}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test string alpha', function() {
    let validator = new Validator({messages})
    return validator.validate({s: '12'}, {s: {type: 'string', alpha: true}}).then((res) => {
      expect(res).to.eql({s: "The 's' field must be an alphabetic string!"})
    })
  })

  it('Test string range', function() {
    let validator = new Validator({messages})
    return validator.validate({s: '123456'}, {s: {type: 'string', range: [2,5]}}).then((res) => {
      expect(res).to.eql({s: "The 's' field length should between (2, 5) characters long!"})
    })
  })

  it('Test string pattern', function() {
    let validator = new Validator({messages})
    return validator.validate({s: '123456'}, {s: {type: 'string', pattern: '^[0-9]+$'}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test string pattern invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({s: '12356a'}, {s: {type: 'string', pattern: '^[0-9]+$'}}).then((res) => {
      console.log(res)
      expect(res).to.be.eql({s: "The 's' field fails to match the required pattern!"})
    })
  })

  it('Test string pattern invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({s: '123456'}, {s: {type: 'string', pattern: '/^[0-9]+$/'}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test url', function() {
    let validator = new Validator({messages})
    return validator.validate({s: 'http://abc.com'}, {s: {type: 'url', required: true}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test url empty', function() {
    let validator = new Validator({messages})
    return validator.validate({s: ''}, {s: 'url'}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test multile rules valid', function() {
    let validator = new Validator({messages})
    return validator.validate({s: 'http://abc.com', n: 12}, {s: 'url', n: 'number'}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test multile rules invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({s: 'http://abc.com', n: 12}, {s: 'number', n: 'url'}).then((res) => {
      expect(res).to.eql({s: "The 's' field must be a number!", n: "The 'n' field must be a string!"})
    })
  })

  it('Test async rule', function() {
    let validator = new Validator({messages})
    return validator.validate({s: 'http://abc.com', n: 12}, {s: {validate: (rule, value, model) => {
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          resolve()
        }, 1000)
      })
    }}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test async rule invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({s: 'http://abc.com', n: 12}, {s: {validate: async_validate}}).then((res) => {
      expect(res).to.eql({s: "Error"})
    })
  })

  it('Test async multi rules invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({s: 'http://abc.com', n: 12}, 
      {s: {validate: async_validate}, n: {validate: async_validate}}).then((res) => {
      expect(res).to.eql({s: "Error", n: "Error"})
    })
  })

  it('Test certid', function() {
    let validator = new Validator({messages})
    return validator.validate({c: '11010519491231002X'}, 
      {c: 'idnumber'}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test certid invalid crc', function() {
    let validator = new Validator({messages})
    return validator.validate({c: '110105194912310021'}, 
      {c: 'idnumber'}).then((res) => {
      expect(res).to.eql({c: "The 'c' is not an available ID Number!"})
    })
  })

  it('Test certid invalid date', function() {
    let validator = new Validator({messages})
    return validator.validate({c: '110105194902310026'}, 
      {c: 'idnumber'}).then((res) => {
      expect(res).to.eql({c: "The 'c' is not an available ID Number!"})
    })
  })

  it('Test certid invalid area', function() {
    let validator = new Validator({messages})
    return validator.validate({c: '160105194912310029'}, 
      {c: 'idnumber'}).then((res) => {
      expect(res).to.eql({c: "The 'c' is not an available ID Number!"})
    })
  })

  it('Test mobile', function() {
    let validator = new Validator({messages})
    return validator.validate({c: '13301101217'}, 
      {c: 'mobile'}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test mobile invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({c: '11301101217'}, 
      {c: 'mobile'}).then((res) => {
      expect(res).to.eql({c: "The 'c' is not an available mobile number!"})
    })
  })

  it('Test telephone', function() {
    let validator = new Validator({messages})
    return validator.validate({c: '028-23422342'}, 
      {c: 'telephone'}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test telephone invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({c: '234223'}, 
      {c: 'telephone'}).then((res) => {
      expect(res).to.eql({c: "The 'c' is not an available telephone number!"})
    })
  })

  it('Test IP', function() {
    let validator = new Validator({messages})
    return validator.validate({c: '12.32.24.244'}, 
      {c: 'ip'}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test IP invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({c: '12.32.24.266'}, 
      {c: 'ip'}).then((res) => {
      expect(res).to.eql({c: "The 'c' is not an available IP address!"})
    })
  })

  it('Test real name', function() {
    let validator = new Validator({messages})
    return validator.validate({c: '姓名'}, 
      {c: 'realname'}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test real name invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({c: '姓 名'}, 
      {c: 'realname'}).then((res) => {
      expect(res).to.eql({c: "The 'c' is not an available real name, you should only include chinese, alpha and dot!"})
    })
  })

  it('Test real name invalid length', function() {
    let validator = new Validator({messages})
    return validator.validate({c: '姓名很长的中文超过二十个字符长度应该报错才对'}, 
      {c: 'realname'}).then((res) => {
      expect(res).to.eql({c: "The 'c' field length must be less than or equal to 20 characters long!"})
    })
  })

  it('Test password', function() {
    let validator = new Validator({messages})
    return validator.validate({c: 'abc123&'}, 
      {c: 'password'}).then((res) => {
      expect(res).to.to.null
    })
  })

  it('Test password invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({c: 'abc'}, 
      {c: 'password'}).then((res) => {
      expect(res).to.eql({c: "The 'c' is not an available password, you should include alpha, number and special character!"})
    })
  })

  it('Test password invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({c: 'ab1#'}, 
      {c: {type: 'password', range: [8, 20]}}).then((res) => {
      expect(res).to.eql({c: "The 'c' length should between 8-20 characters long!"})
    })
  })

  it('Test password invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({c: 'abc'}, 
      {c: 'password'}).then((res) => {
      expect(res).to.eql({c: "The 'c' is not an available password, you should include alpha, number and special character!"})
    })
  })

  it('Test password trim invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({c: '   '}, 
      {c: 'password'}).then((res) => {
      expect(res).to.eql({c: "The 'c' is not an available password, you should include alpha, number and special character!"})
    })
  })

  it('Test social credit code', function() {
    let validator = new Validator({messages})
    return validator.validate({c: '91350100M000100Y43'}, 
      {c: {type: 'socialCreditCode'}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test social credit code invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({c: '91110108801146341A'}, 
      {c: {type: 'socialCreditCode'}}).then((res) => {
      expect(res).to.eql({c: "The 'c' is not an available Social Credit Code!"})
    })
  })

  it('Test social credit code trim invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({c: '         '}, 
      {c: {type: 'socialCreditCode'}}).then((res) => {
      expect(res).to.eql({c: "The 'c' is not an available Social Credit Code!"})
    })
  })

  it('Test zipcode', function() {
    let validator = new Validator({messages})
    return validator.validate({c: '100055'}, 
      {c: {type: 'zipcode'}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test zipcode empty', function() {
    let validator = new Validator({messages})
    return validator.validate({c: ''}, 
      {c: {type: 'zipcode'}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test zipcode invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({c: 'X00055'}, 
      {c: {type: 'zipcode'}}).then((res) => {
      expect(res).to.eql({c: "The 'c' is not an available Zip Code!"})
    })
  })

  it('Test zipcode trim invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({c: '      '}, 
      {c: {type: 'zipcode', trim: true}}).then((res) => {
      expect(res).to.eql({c: "The 'c' is not an available Zip Code!"})
    })
  })

  it('Test object', function() {
    let validator = new Validator({messages})
    return validator.validate({n: 1}, {n: {type: 'object'}}).then((res) => {
      expect(res).to.eql({n: "The 'n' must be an Object!"})
    })
  })

  it('Test object props', function() {
    let validator = new Validator({messages})
    return validator.validate({o: {a: '1', b: '2'}}, 
      {o: {type: 'object', props: {
        a: 'string',
        b: 'string'
      }}}).then((res) => {
      expect(res).to.be.null
    })
  })

  it('Test object props invalid', function() {
    let validator = new Validator({messages})
    return validator.validate({o: {a: '1', b: '2'}}, 
      {o: {type: 'object', props: {
        a: 'string',
        b: 'number'
      }}}).then((res) => {
      expect(res).to.eql({o: {b: "The 'b' field must be a number!"}})
    })
  })

})
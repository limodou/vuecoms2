import { expect } from 'chai'

import Validator from '../src/components/validator'
import messages from '../src/components/validator/messages/messages_en_US'

const async_validate = (rule, value, model) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      reject('Error')
    }, 1000)
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

  it('Add new rule type', function() {
    const abc = (rule, fieldvalue, model) => {
      if (fieldvalue !== 'abc') throw new Error("The value should be 'abc'!")
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
      throw new Error('Error')
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

  it('Test object', function() {
    let validator = new Validator({messages})
    return validator.validate({n: 1}, {n: {type: 'object'}}).then((res) => {
      expect(res).to.eql({n: "The 'n' must be an Object!"})
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


})
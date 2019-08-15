// export default async function (rule, value, model) {
//   const r = Object.assign({}, rule, {type: 'string', length: 6, integer: true})
//   let res
//   try {
//     res = await this.validateRule(r, value, model)
//   } catch (e) {
//     res = e
//   }
//   if (res)
//       return r.makeError('zipcode')
// }
export default async function (rule, value, model) {
  return this.useRule({type: 'string', length: 6, integer: true}, rule, value,model, (err)=>{
    return rule.makeError('zipcode')
  })
}
// export default function (rule, value, model) {
//   const r = Object.assign({}, rule, {type: 'string', length: 6, integer: true})
//   return new Promise((resolve, reject) => {
//     this.validateRule(r, value, model).then((res) => {
//       if (res)
//         resolve(r.makeError('zipcode'))
//       else
//         resolve()
//     }).catch((err)=>{
//       reject(r.makeError('zipcode'))
//     })
//   })
// }
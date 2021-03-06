import {deepCopy} from '../utils/utils'

export default {
  methods: {
    merge_object (object, ...source) {
      for (let c of source) {
        for (let x in c) {
          this.$set(object, x, deepCopy(c[x]))
        }
      }
    },
    reset_object (object) {
      for (let c in object) {
        if (Array.isArray(object[c])) {
          this.$set(object, c, [])
        } else if (object[c] instanceof Date) {
          this.$set(object, c, '')
        } else if (object[c] instanceof Object) {
          this.reset_object(object[c])
        } else if (typeof object[c] === 'number') {
          this.$set(object, c, 0)
        } else if (typeof object[c] === 'string') {
          this.$set(object, c, '')
        } else if (typeof object[c] === 'boolean') {
          this.$set(object, c, false)
        } else {
          this.$set(object, c, '')
        }
      }
    }
  }
}
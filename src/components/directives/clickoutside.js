import { isEmpty } from '../utils/utils'

function ifHasExact(el, exactArea) {
    if (!exactArea) return false
    let r = []
    let els = el.getElementsByClassName(exactArea)
    for(let c = 0; c < els.length; c++ ) {
        r.push(els[c])
    }
    return r
}

function ifInExact (exactElms, target) {
    for (let el of exactElms) {
        if (el.contains(target)) return true
    }
    return false
}

const name = '@@__references__'

export default {
    bind (el, binding, vnode) {
        function documentHandler (e) {
            if (!isEmpty(el[name]) && ifInExact(el[name], e.target) || isEmpty(el[name]) && el.contains(e.target)) {
                return false;
            }
            if (binding.expression) {
                binding.value(e);
            }
        }
        el.__vueClickOutside__ = documentHandler;
        el[name] = ifHasExact(el, binding.arg)
        document.addEventListener('click', documentHandler);
    },
    update () {

    },
    unbind (el, binding) {
        document.removeEventListener('click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
        delete el.__references__;
    }
};
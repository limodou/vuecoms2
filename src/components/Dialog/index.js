import Vue from 'vue'
import Dialog from './Dialog.vue'
import LoadingDialog from './Loading-Dialog.vue'
import ConfirmDialog from './Confirm-Dialog.vue'

const components = {
  Dialog,
  LoadingDialog,
  ConfirmDialog
}

function showModal(dialog_component, props) {
  if (dialog_component && dialog_component instanceof Object) {
    props = dialog_component
    dialog_component = Dialog
  }
  const Component = Vue.extend({
    render(h) {
      return h(dialog_component, {
        attrs: props
      })
    }
  });
  const Instance = new Component()
  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  return component
}

function showConfirmModal(props) {
  const Component = Vue.extend({
    render(h) {
      return h(ConfirmDialog, {
        attrs: props
      })
    }
  });
  const Instance = new Component()
  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  return component
}

const install = function (Vue) {
  if (install.installed) return;
  for (let name in components) {
    Vue.component(name, components[name])
  }
  Vue.prototype.$Dialog = showModal
  Vue.prototype.$ConfirmDialog = showConfirmModal
}

export default {
  install
}

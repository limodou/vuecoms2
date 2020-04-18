import Toast from './Toast.vue'

let component

// 当props不传参数时，可以直接关闭上一个实例
function showToast (props) {
  if (!props && component) {
    component.$children[0].close()
    return
  } 
  const Component = Vue.extend({
    render(h) {
      return h(Toast, {
        props: props
      })
    }
  });

  const Instance = new Component()
  component = Instance.$mount()
  document.body.appendChild(component.$el)
}
export default showToast
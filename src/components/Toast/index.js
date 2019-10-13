import Toast from './Toast.vue'

function showToast (props) {
  const Instance = new Vue({
    render (h) {
      return h(Toast, {
          props: props
      })
    }
  });

  const component = Instance.$mount()
  document.body.appendChild(component.$el)
}
export default showToast
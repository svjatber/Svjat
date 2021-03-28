export default {
    bind(el, bindings, vnode){
      el.style.color = bindings.value
    },
    update(el, bindings, vnode){
      el.style.color = bindings.value
    }
}

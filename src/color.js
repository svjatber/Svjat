export default {
    bind(el, bindings, vnode){
      const arg = bindings.arg
      console.log(arg)
      el.style[arg] = bindings.value
    },
}

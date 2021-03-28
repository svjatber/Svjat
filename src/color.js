export default {
    bind(el, bindings, vnode){
      if(bindings.modifiers['font']) el.style.fontSize = '30px'
      let delay = 0
      if(bindings.modifiers['delay']) delay = 2000
      setTimeout(()=>{
        el.style[bindings.arg] = bindings.value
      }, delay)
    }
}

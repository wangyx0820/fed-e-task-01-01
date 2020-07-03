import {h, init} from 'snabbdom'

/*
    h -——> 创建虚拟dom,
           参数：（标签+选择器，标签内容）、（标签+选择器，数组）、（标签+选择器、{}、内容or数组）
    init ——> 可以创建一个patch函数，对比两个vnode的差异更新到真实DOM
    patch函数的参数：
        第一个参数：可以是DOM元素，内部会把DOM元素转化为Vnode
        第二个参数：Vnode
*/
let patch = init([])
let vnode = h('div#container','hello word')

let app = document.querySelector('#app')

let oldVnode = patch(app,vnode)

//假设时刻，更新原有DOM内容
vnode = h('div#cont.wrap','hello snabbdom')

patch(oldVnode,vnode)

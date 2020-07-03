import {h,init} from 'snabbdom'

let patch = init([])
let vnode = h('div#container',[
    h('h1','我是标题1'),
    h('p','我是p标签1')
])

let app = document.querySelector('#app')
let oldVnode = patch(app,vnode)
setTimeout(function(){
    vnode = h('div#container',[
        h('h1','我是新的title'),
        h('p','我是新的p')
    ])
    patch(oldVnode,vnode)
    //清空页面元素
    patch(oldVnode,h('!'))
},2000)

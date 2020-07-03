import {h,init} from 'snabbdom'

// 1.导入模块
import style from 'snabbdom/modules/style'
import eventlisteners from 'snabbdom/modules/eventlisteners'

// 2.注册模块
let patch = init([
    style,
    eventlisteners
])

// 3.使用h()函数的第二个参数传入模块需要的数据（对象）
let vnode = h('div',{
    style:{
        backgroundColor:'pink',
    },
    on:{
        click:clickFn
    }
},[
    h('h1','我是标题'),
    h('p','我是p标签')
])

function clickFn(){
    console.log('我被点击了')
}

let app = document.querySelector('#app')
patch(app,vnode)

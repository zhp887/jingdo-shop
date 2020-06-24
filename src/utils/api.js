import fetch from './fetch' //fetch实际上一个axios实例（promise对象)
// 第一种写法
// export aaa
// export bbb
// import { aaa, bbb } from './xxx.js'

// 第二种写法：在同一个模块中，最多只能使用一次 export default
// export default
// import ccc from './xxx.js'

//注册接口
export function regist(data){
    return fetch({
        url:'/user/regist',
        method:'post',
        data
    })
}
//登录接口
export function login(data){
    return fetch({
        url:'/user/login',
        method:'post',
        data
    })
}
// 获取首页为你推荐的商品列表
export function getHotGoodList(params){
    return fetch({
        url:'/jd/getHotGoodList',
        method:'get',
        params
    })
}
//获取商品详情
export function getGoodDetail(params){
    return fetch({
        url:'/jd/getGoodDetail',
        method:'get',
        params
    })
}
//加入购物车
export function addToCart(data){
    return fetch({
        url:'/jd/addToCart',
        method:'post',
        data
    })
}
//获取购物车列表
export function getCartList(params){
    return fetch({
        url:'/jd/getCartList',
        method:'get',
        params
    })
}
//删除一条购物记录
export function deleteCart(params){
    return fetch({
        url:'/jd/deleteToCart',
        method:'get',
        params
    })
}
//修改购物车中商品的数量
export function updateCart(data){
    return fetch({
        url:'/jd/updateCartNum',
        method:'post',
        data
    })
}
//提交购物车
export function submitCart(data){
    return fetch({
        url:'/jd/submitToCart',
        method:'post',
        data
    })
}
//把所有接口方法统一抛出
export default{
    regist,
    login,
    getHotGoodList,
    getGoodDetail,
    addToCart,
    getCartList,
    deleteCart,
    updateCart,
    submitCart
}
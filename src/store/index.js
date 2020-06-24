import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//这是一个store子模块
import cart from './modules/cart'

const store = new Vuex.Store({
    //modules这个选项用于把子module进行合并(带命名空间)
    modules:{
        cart,
    }
})

export default store
import { getCartList} from '@/utils/api'

export default {
    namespaced: true,
    state:{
        list:[]
    },
    getters:{
        total:function(state){
            var t = 0
            state.list.map(ele=>{
                if (ele.checked) {
                    t += ele.num * ele.good.price * 100
                }
            })
            return t
        }
    },
    mutations:{
        updateList(state,payload){
            payload.map((ele,idx)=>{
                //自定义一个checked，用于控制Checkbox
                payload[idx].checked = true
            })
            state.list = payload
        },
        updateListItem(state,payload){
            console.log('payload',payload)
            state.list[payload.index].checked = payload.checked
        },
        updateListAll(state,payload){
            state.list.map((ele,idx)=>{
                state.list[idx].checked = payload
            })
        }
    },
    actions:{
        getCartList(store,payload){
            getCartList(payload).then(arr=>{
                store.commit('updateList',arr)
            })
        }
    }
}
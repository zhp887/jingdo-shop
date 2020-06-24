<template>
    <div class='home'>
        <!-- 顶部提示 -->
        <van-pull-refresh v-model="refreshing" @refresh='onRefresh'>
            <van-notice-bar 
                left-icon='volume-o'
                background='#b20d07'
                color='#ffffff'
                scrollable
                mode="closeable">
                打开京东App，购物更轻松; 京东618，抢618元大红包！京东购物，更快，更省！
            </van-notice-bar>
            <!-- 搜索框 -->
            <van-search
                shape="round"
                background="#b20d07"
                :placeholder="tips"
                show-action
                disabled
                >
                <template #action>
                    <div @click="skipToLogin">登录</div>
                </template>
            </van-search>
            <!-- 轮播图 -->
            <van-swipe class="home-swipe" :autoplay='3000' indicator-color='white'>
                <van-swipe-item>
                    <van-image
                     fit="contain"
                     src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/123287/30/5114/118908/5ee9e766E50040221/cd2215a2d91d1809.jpg!cr_1125x445_0_171!q70.jpg.dpg"/>
                </van-swipe-item>
                <van-swipe-item>
                    <van-image
                     fit="contain"
                     src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/120069/23/3943/100429/5ed706a6E46b65a74/11457cbd655fff67.jpg!cr_1125x445_0_171!q70.jpg.dpg"/>
                </van-swipe-item>
                <van-swipe-item>
                    <van-image
                     fit="contain"
                     src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/118233/21/10385/193825/5ee9e683E5392791c/09391ad1586a223b.jpg!q70.jpg.dpg"/>
                </van-swipe-item>
            </van-swipe>
            <!-- 分割线 -->
            <van-divider>
                <template>
                    <div class="hot">为你推荐</div>
                </template>
            </van-divider>
            <!-- 列表 -->
            <van-list
            finished-text="没有更多了"
            :finished="finished"
            v-model="loading"
            @load="onLoad"
            :immediate-check="false"
            offset="50">
                <div v-for="i in len" :key="i">
                    <Good :good='list[2*(i-1)]'></Good>
                    <Good :good='list[2*(i-1)+1]'></Good>
                </div>
            </van-list>
        </van-pull-refresh>
        
        <TabBar></TabBar>
    </div>   
</template>
<script>
import{
    NoticeBar,
    Search,
    PullRefresh,
    Swipe,
    SwipeItem,
    Image,
    Divider,
    List,
    Toast
} from 'vant'
export default {
    name:'Home',
    components:{
        TabBar:()=>import('@/components/common/TabBar.vue'),
        Good:()=>import('@/components/common/Good.vue'),
        [NoticeBar.name]:NoticeBar,
        [Search.name]:Search,
        [PullRefresh.name]:PullRefresh,
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem,
        [Image.name]:Image,
        [Divider.name]:Divider,
        [List.name]:List,
    },
    data:function(){
        return{
            refreshing:false,
            list: [],
            page:1,
            finished:false,
            loading:false
        }
    },
    computed:{
        tips:function(){
            var arr = ['九阳热水壶','Mac Pro','笔记本电脑','华为手机']
            return arr[Math.floor(Math.random()*4)]
        },
        len:function(){
            return Math.floor(this.list.length/2)
        }
    },
    mounted(){
        this.getList()
    },
    methods:{
        skipToLogin(){
            //跳转到登录页
            this.$router.replace('/login')
        },
        onRefresh(){
            //在这里调接口，刷新当前页面的数据
            this.page = 1
            this.getList()
        },
        onLoad(){
            this.loading = true
            this.page++
            this.getList()
        },
        getList(){
            let params = {
                hot:false,
                page:this.page
            }
            this.$http.getHotGoodList(params).then(res=>{
                console.log('商品列表',res)
                if (res.length < 10) {
                    Toast('没有更多了')
                }
                if (this.refreshing) {
                    this.list = res
                }else{
                    this.list = [...this.list,...res]
                }
                this.finished = false
                this.refreshing = false
                this.loading = false
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.home{
    .login{
        color:#ffffff;
    }
    .home-swipe{
        .van-swipe-item{
            background: #b20d07;
            .van-image{
                display:block;
                width:100%;
                height:100%;
            }
        }
    }
    .van-divider{
        border-color: #b20d07;
        .hot{
            color: #b20d07;
            font-size: .4rem;
            font-weight: bold;
        }
    }
   
}
</style>
<template lang='html'>
    <div class="good" @click='skipToDetail'>
        <div class="box">
            <img :src='good.img' @touchstart='skipToDetail'>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        good:{
            type:Object,
            required:true
        }
    },
    methods:{
        skipToDetail(){
            this.$router.push('/detail/'+this.good._id)
        }
    }
}
</script>
<style lang="scss" scoped>
.good{
    display: inline-block;
    width: 5rem;
    height: 5rem;
    border: 1px solid orange;
    box-sizing: border-box;
    .box{
        &>img{
            display: block;
            width: 100%;
            height: 100%;
        }
    }
}
</style>
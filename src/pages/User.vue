<template>
    <div>
        <TabBar></TabBar>
    </div>
    
</template>
<script>
export default {
    name:'User',
    components:{
        TabBar:()=>import('@/components/common/TabBar.vue')
    }
}
</script>
<style lang="scss" scoped>

</style
<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {mapActions} from 'vuex'
export default {
  name: 'App',
  mounted(){
    this.getCartList({})
  },
  methods:{
    ...mapActions('cart',['getCartList'])
  },
  components: {
    // HelloWorld
  }
}
</script>

<style long='scss' scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

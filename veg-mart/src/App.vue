<template>
  <div>
      <router-view>
    
  </router-view>
  </div>
</template>
<script>
export default {
  mounted(){
<<<<<<< HEAD
    /*window.localStorage.setItem('vgUser','9106942548')*/
    this.$router.push('/login')
=======
    window.localStorage.setItem('vgUser','9106942548')
    // var user = window.localStorage.getItem('vgUser')
    // this.$router.push('/register')
>>>>>>> 3031838f7c69a19b361ec60756115d3fa971979e
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div>
      <router-view>
    
  </router-view>
  </div>
</template>
<script>
export default {
  mounted(){
    window.localStorage.setItem('vgUser','9106942548')
    // var user = window.localStorage.getItem('vgUser')
    // this.$router.push('/register')
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
input[type="text"]:disabled {
  background: #fff;
}
input[type="date"]:disabled {
  background: #fff;
}
input[type="email"]:disabled {
  background: #fff;
}
</style>

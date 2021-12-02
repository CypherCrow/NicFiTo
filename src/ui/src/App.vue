<template>
  <div id="app"> 
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
    margin: 40px 0px;
    font-size: 30px;  
}

button {
  border-radius: 5; 
  background: rgb(165, 181, 146); 
}
</style>

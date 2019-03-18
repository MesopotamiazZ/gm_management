<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  box-sizing: border-box;
}
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
html, body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>

<template>
  <div id="app">
    <navigation />
    <Welcome />
    <Services />
  </div>
</template>


<script>

import navigation from './components/navigation.vue'
import Welcome from './components/Welcome.vue'
import Services from './components/Services'

export default {
  name: 'app',
  components: {
    navigation,
    Welcome,
    Services
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Raleway&display=swap');

body {
  margin:0;

}
#app {
  width:100%;
  font-family: 'Open Sans', sans-serif;
}
</style>

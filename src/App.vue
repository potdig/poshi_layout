<template>
  <side-bar />
  <div id="video-area" />
</template>

<script>
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>

<style scoped>
#video-area {
  background-color: rgba(0, 0, 0, 0);
  width: 972px;
  height: 720px;
}
</style>
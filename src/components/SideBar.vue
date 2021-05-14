<template>
  <div id="container">
    <balloon />
    <poshippo />
  </div>
</template>

<script>
import Balloon from './Balloon.vue'
import Poshippo from './Poshippo.vue'
export default {
  components: { Poshippo, Balloon }
}
</script>

<style scoped>
#container {
  background: #CBEDD8 url('../assets/green_border.png');
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
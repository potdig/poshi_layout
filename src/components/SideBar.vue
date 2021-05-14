<template>
  <div id="container">
    <poshippo />
  </div>
</template>

<script>
import Poshippo from './Poshippo.vue'
export default {
  components: { Poshippo },
  props: {
    msg: String
  }
}
</script>

<style scoped>
#container {
  background: #CBEDD8 url('../assets/green_border.png');
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
}
</style>
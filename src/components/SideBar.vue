<template>
  <div id="container">
    <timer id="timer" />
    <balloon />
    <poshippo />
  </div>
</template>

<script>
import Balloon from './Balloon.vue'
import Poshippo from './Poshippo.vue'
import Timer from './Timer.vue'
export default {
  components: { Poshippo, Balloon, Timer }
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

#timer {
  margin-bottom: auto;
}
</style>
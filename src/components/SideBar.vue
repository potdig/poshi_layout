<template>
  <div id="container">
    <split id="split" />
    <balloon />
    <poshippo />
  </div>
</template>

<script>
import Balloon from './Balloon.vue'
import Poshippo from './Poshippo.vue'
import Split from './Split.vue'
export default {
  components: { Poshippo, Balloon, Split }
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

#split {
  margin-top: 1em;
  margin-bottom: auto;
}
</style>
<template>
  <div id="container" :class="{ transparent }">
    <split id="split" v-if="!casual" />
    <balloon />
    <poshippo />
  </div>
</template>

<script>
import Balloon from './Balloon.vue'
import Poshippo from './Poshippo.vue'
import Split from './Split.vue'
export default {
  props: { 
    casual: Boolean,
    transparent: Boolean
  },
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
  padding: 12px;
}

#container.transparent {
  background: rgba(0, 0, 0, 0)
}

#split {
  margin-bottom: auto;
}
</style>
<template>
  <div id="container" :class="{ transparent, small }">
    <split id="split" v-if="!casual" />
    <balloon :small="small" />
    <poshippo />
    <credits />
  </div>
</template>

<script>
import Balloon from './Balloon.vue'
import Poshippo from './Poshippo.vue'
import Split from './Split.vue'
import Credits from './Credits.vue'

export default {
  props: { 
    casual: Boolean,
    transparent: Boolean,
    small: Boolean
  },
  components: { Poshippo, Balloon, Split, Credits }
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

#container.small {
  font-size: 0.625em;
}

#split {
  margin-bottom: auto;
}
</style>
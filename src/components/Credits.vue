<template>
  <div v-if="credits">
    <p id="credits">{{ credits }}</p>
  </div>
</template>

<script>
import config from '../config.json'

export default {
  computed: {
    credits() {
      return config['credits']
    }
  }
}

</script>
<style scoped>
div {
  position: relative;
  background-color: #ffffff8f;
  border-radius: 16px;
  padding: 8px;
}

p {
  font-family: 'RocknRoll One', sans-serif;
  font-size: 1.2em;
}
</style>

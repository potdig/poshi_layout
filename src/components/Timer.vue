<template>
  <div>
    <p>{{ time }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import timer from '../lib/timer'

timer.init()
export default {
  computed: {
    ...mapGetters(['time'])
  }
}
</script>

<style>
</style>

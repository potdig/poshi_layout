<template>
  <div>
    <p>{{ formattedTime }}<span>.{{ milliseconds }}</span></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import timer from '../lib/timer'

timer.init()

const formatForSeconds = 's'
const formatForMinutes = 'm:ss'
const formatForHours = 'h:mm:ss'
export default {
  computed: {
    ...mapGetters(['time']),
    formattedTime() {
      if (this.time.hours) {
        return this.time.toFormat(formatForHours)
      } else if (this.time.minutes) {
        return this.time.toFormat(formatForMinutes)
      } else {
        return this.time.toFormat(formatForSeconds)
      }
    },
    milliseconds() {
      return this.time.milliseconds.toString().padStart(3, '0')
    }
  }
}
</script>

<style>
</style>

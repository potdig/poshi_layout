<template>
  <div>
    <p>{{ formattedTime.slice(0, -1) }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Duration } from 'luxon'
import timer from '../lib/timer'

timer.init()

const formatForSeconds = 's.SSS'
const formatForMinutes = 'm:ss.SSS'
const formatForHours = 'h:mm:ss.SSS'
export default {
  computed: {
    ...mapGetters(['time']),
    formattedTime() {
      const duration = Duration
        .fromMillis(this.time)
        .shiftTo('hours', 'minutes', 'seconds', 'milliseconds')
      if (duration.hours) {
        return duration.toFormat(formatForHours)
      } else if (duration.minutes) {
        return duration.toFormat(formatForMinutes)
      } else {
        return duration.toFormat(formatForSeconds)
      }
    }
  }
}
</script>

<style>
</style>

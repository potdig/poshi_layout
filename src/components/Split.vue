<template>
  <div>
    <p>{{ formattedTime }}<span>.{{ milliseconds }}</span></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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

<style scoped>
p {
  font-family: 'RocknRoll One', sans-serif;
  font-size: 4em;
}

p span {
  font-size: 0.7em;
}
</style>

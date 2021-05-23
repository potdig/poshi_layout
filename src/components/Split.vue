<template>
  <div>
    <p id="title">{{ gameTitle }}</p>
    <p id="category">{{ category }}</p>
    <p id="timer">{{ formattedTime }}<span>.{{ milliseconds }}</span></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const formatForSeconds = 's'
const formatForMinutes = 'm:ss'
const formatForHours = 'h:mm:ss'
export default {
  computed: {
    ...mapGetters(['time', 'game']),
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
    },
    gameTitle() {
      return this.game.name
    },
    category() {
      return this.game.category
    }
  }
}
</script>

<style scoped>
p {
  font-family: 'RocknRoll One', sans-serif;
}

#title {
  font-size: 2.4em;
}

#category {
  font-size: 1.7em;
}

#timer {
  font-size: 4em;
}

#timer span {
  font-size: 0.7em;
}
</style>

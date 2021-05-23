<template>
  <div>
    <p id="title">{{ gameTitle }}</p>
    <p id="category">{{ category }}</p>
    <p id="timer">{{ formattedTime }}<span>.{{ milliseconds }}</span></p>
    <p id="attempts"><span id="completed">{{ completedAttempts }}</span>/<span id="total">{{ attempts }}</span></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['timer', 'game']),
    formattedTime() {
      return this.timer.formatted()
    },
    milliseconds() {
      return this.timer.ms()
    },
    gameTitle() {
      return this.game.jpTitle ? this.game.jpTitle : this.game.title
    },
    category() {
      return this.game.category
    },
    attempts() {
      return this.game.attempts
    },
    completedAttempts() {
      return this.game.completedAttempts
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

#attempts {
  text-align: right;
  font-size: 2em;
}

#attempts #total {
  font-size: 0.7em;
}

#attempts #completed {
  position: relative;
  top: -0.3em;
}
</style>

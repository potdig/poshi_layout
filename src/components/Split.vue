<template>
  <div>
    <p id="title">{{ gameTitle }}</p>
    <p id="category">{{ game.category }}</p>
    <p id="timer">{{ timer.formatted() }}<span>.{{ timer.ms() }}</span></p>
    <p id="attempts"><span id="completed">{{ game.completedAttempts }}</span>/<span id="total">{{ game.attempts }}</span></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['timer', 'game']),
    gameTitle() {
      return this.game.jpTitle ? this.game.jpTitle : this.game.title
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

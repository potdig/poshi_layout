<template>
  <div>
    <p id="title">{{ gameTitle }}</p>
    <p id="category">{{ game.category }}</p>
    <p id="timer" :style="{ color: timer.color() }">{{ timer.formatted() }}<span>.{{ timer.ms() }}</span></p>
    <p id="attempts">{{ game.attempts }}</p>
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
div {
  position: relative;
  background-color: #ffffff8f;
  border-radius: 16px;
  padding: 8px;
}

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
  position: absolute;
  right: 8px;
  bottom: 8px;
  text-align: right;
  font-size: 1.2em;
}

</style>

<template>
  <div id="balloon">
    <div id="message-area">
      <p v-html="msg"></p>
    </div>
    <img src="../assets/balloon_tip.png" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '乱数に抗いたい'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap');

#balloon {
  margin-bottom: 10px;
  animation: flow-up 3s cubic-bezier(0.37, 0, 0.63, 1) infinite alternate;
}

#message-area {
  font-family: 'RocknRoll One', sans-serif;
  font-size: 1.4em;
  position: relative;
  max-width: 80%;
  border-radius: 12px;
  background-color: white;
  margin: 0 auto -2px;
  padding: 0.4em;
}

p {
  margin: 0;
}

@keyframes flow-up {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-30px);
  }
}
</style>

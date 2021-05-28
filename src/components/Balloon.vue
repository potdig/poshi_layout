<template>
  <div id="balloon">
    <div id="message-area">
      <transition name="fade" mode="out-in">
        <p v-html="customMsg" v-if="showCustomMsg"></p>
        <div id="sns" v-else>
          <p style="color: #1d9bf0">
            <svg-icon type="mdi" :path="twitterLogo" :size="logoSize" />
            potato_digger
          </p>
          <p style="color: #9147ff">
            <svg-icon type="mdi" :path="twitchLogo" :size="logoSize" />
            poshippo
          </p>
          <p style="color: #ff0000">
            <svg-icon type="mdi" :path="youtubeLogo" :size="logoSize" />
            poshiRTA
          </p>
        </div>
      </transition>
    </div>
    <img src="../assets/balloon_tip.png" />
  </div>
</template>

<script>
import { DateTime } from 'luxon'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiTwitter, mdiTwitch, mdiYoutube } from '@mdi/js'
import config from '../config.json'

const now = () => DateTime.local()
const end = () => DateTime.local().plus({ seconds: 10 })

export default {
  components: { SvgIcon },
  props: {
    small: Boolean
  },
  computed: {
    customMsg() {
      return config['customMsg']
    },
    logoSize() {
      return this.small ? 20 : 32
    },
    twitterLogo() {
      return mdiTwitter
    },
    twitchLogo() {
      return mdiTwitch
    },
    youtubeLogo() {
      return mdiYoutube
    }
  },
  data() {
    return {
      now: now(),
      end: end(),
      showCustomMsg: true
    }
  },
  mounted() {
    setInterval(() => {
      this.now = now()
      if (this.now > this.end) {
        this.showCustomMsg = !this.showCustomMsg
        this.end = end()
      }
    }, 100)
  }
}
</script>

<style>
#balloon {
  margin-bottom: 10px;
  animation: flow-up 3s cubic-bezier(0.37, 0, 0.63, 1) infinite alternate;
}

#message-area {
  font-family: 'RocknRoll One', sans-serif;
  font-size: 2em;
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

#sns p {
  display: flex;
  justify-content: center;
  align-items: baseline;
}

svg {
  position: relative;
  top: 4px;
  margin-right: 4px;
}

.fade-leave-active {
  animation: fade .5s;
}

.fade-enter-active {
  animation: fade .5s reverse;
}

@keyframes fade {
  0% {
    opacity: 100%;
  }

  100% {
    opacity: 0%;
  }
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

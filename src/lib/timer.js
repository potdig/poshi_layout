const formatForSeconds = 's'
const formatForMinutes = 'm:ss'
const formatForHours = 'h:mm:ss'

const notRunning = 'NotRunning'
const running = 'Running'
const ended = 'Ended'

class Timer {
  constructor(time, state, pb) {
    this.time = time
    this.state = state
    this.pb = pb
  }

  formatted() {
    if (this.time.hours) {
      return this.time.toFormat(formatForHours)
    } else if (this.time.minutes) {
      return this.time.toFormat(formatForMinutes)
    } else {
      return this.time.toFormat(formatForSeconds)
    }
  }

  ms() {
    return this.time.milliseconds.toString().padStart(3, '0')
  }

  color() {
    if (this.state == notRunning) {
      return '#3d3d3d7f'
    } else if (this.state == ended && this.isPB()) {
      return '#1699ea'
    } else if (this.state == running && this.time < this.pb) {
      return '#009a55'
    } else {
      return '#3d3d3d'
    }
  }

  isPB() {
    return this.time.toMillis() === this.pb.toMillis()
  }
}

export default Timer

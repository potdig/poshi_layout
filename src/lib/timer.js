const formatForSeconds = 's'
const formatForMinutes = 'm:ss'
const formatForHours = 'h:mm:ss'

class Timer {
  constructor(time, state) {
    this.time = time
    this.state = state
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
}

export default Timer

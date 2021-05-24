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

  formattedTime() {
    return this._format(this.time)
  }

  formattedPb() {
    return `${this._format(this.pb)}.${this._padMillisecondsWithZero(this.pb)}`
  }

  ms() {
    return this._padMillisecondsWithZero(this.time)
  }

  color() {
    if (this.state == notRunning) {
      return '#3d3d3d7f'
    } else if (this.state == ended) {
      return this.isPB() ? '#1699ea' : '#dd3737'
    } else if (this.state == running) {
      return this.time <= this.pb ? '#009a55' : '#dd3737'
    } else {
      return '#3d3d3d'
    }
  }

  isPB() {
    return this.time.toMillis() <= this.pb.toMillis()
  }

  _format(time) {
    if (time.hours) {
      return time.toFormat(formatForHours)
    } else if (time.minutes) {
      return time.toFormat(formatForMinutes)
    } else {
      return time.toFormat(formatForSeconds)
    }
  }

  _padMillisecondsWithZero(time) {
    return time.milliseconds.toString().padStart(3, '0')
  }
}

export default Timer

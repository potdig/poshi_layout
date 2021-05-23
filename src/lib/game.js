class Game {
  // {"name":"getGame","data":{"gameName":"Bust-A-Move 3 DX","gameIcon":null,"categoryName":"Vs. CPU Normal","attempts":9,"completedAttempts":9}}
  constructor(data) {
    if (data) {
      this.name = data.gameName
      this.category = data.categoryName
      this.attempts = data.attempts
      this.completedAttempts = data.completedAttempts
    } else {
      this.name = ''
      this.category = ''
      this.attempts = 0
      this.completedAttempts = 0
    }
  }
}

export default Game

import jpTitles from '../config/jp-titles.json'

class Game {
  // {"name":"getGame","data":{"gameName":"Bust-A-Move 3 DX","gameIcon":null,"categoryName":"Vs. CPU Normal","attempts":9,"completedAttempts":9}}
  constructor(data) {
    if (data) {
      this.title = data.gameName
      this.category = data.categoryName
      this.attempts = data.attempts
      this.completedAttempts = data.completedAttempts
    } else {
      this.title = ''
      this.category = ''
      this.attempts = 0
      this.completedAttempts = 0
    }

    const titleConfig = jpTitles
      .find(title => title.en == this.title)
    if (titleConfig) {
      this.jpTitle = titleConfig.jp
    }
  }
}

export default Game

class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static smallWord(word) {
    const smallWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    return smallWords.includes(word.toLowerCase())
  }

  static titleize(string) {
    let words = string.split(" ")
    let newString = this.capitalize(words[0])
    for (let i = 1; i < words.length; i++) {
      if (this.smallWord(words[i])) {
        newString += " " + words[i]
      } else {
        newString += " " + this.capitalize(words[i])
      }
    }
    return newString
  }
}
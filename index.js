class Formatter {
  static capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  static sanitize(s) {
    return s.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  static titleize(s) {
    s = s.split(" ")
    const bad = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']

    for(let i = 0; i < s.length; i++) {
      if (i === 0) {
        s[i] = this.capitalize(s[i])
      } else {
        if (!(bad.includes(s[i]))) {
          s[i] = this.capitalize(s[i])
        }
      }
    }

    return s.join(" ")
  }
}
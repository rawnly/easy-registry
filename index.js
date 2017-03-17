const got = require('got');
const date = require('./libs/date');

class Package {
  constructor(name) {
    this.name = name.toLowerCase()
    this.ever = `https://api.npmjs.org/downloads/range`
    this.url = `https://api.npmjs.org/downloads/point`
  }
  // LAST DAY STATS
  day(callback) {
    // If callback !undefined then use it.
    if (callback !== undefined) {

      // Start HTTP/S request
      got(`${this.url}/last-day/${this.name}`).then(({body}) => {
        callback(err = undefined, jparse(body))
      }).catch((err) => {
      if (err)
          throw new Error(err)
      });

    } else {
      // else use a promise
      return new Promise((fulfill, reject) => {

        // Start HTTP/S request
        got(`${this.url}/last-day/${this.name}`).then(({body}) => {
          fulfill(jparse(body))
        }).catch((err) => {
          if (err) {
            reject(err)
          }
        });

      });
    }
  }

  // LAST WEEK STATS
  week(callback) {
    // If callback !undefined then use it.
    if (callback !== undefined) {

      // Start HTTP/S request
      got(`${this.url}/last-week/${this.name}`).then(({body}) => {
        callback(err = undefined, jparse(body))
      }).catch((err) => {
      if (err)
          throw new Error(err)
      });

    } else {
      // else use a promise
      return new Promise((fulfill, reject) => {

        // Start HTTP/S request
        got(`${this.url}/last-week/${this.name}`).then(({body}) => {
          fulfill(jparse(body))
        }).catch((err) => {
          if (err) {
            reject(err)
          }
        });

      });
    }
  }

  // LAST MONTH STATS
  month(callback) {
    // If callback !undefined then use it.
    if (callback !== undefined) {

      // Start HTTP/S request
      got(`${this.url}/last-month/${this.name}`).then(({body}) => {
        callback(err = undefined, jparse(body))
      }).catch((err) => {
      if (err)
          throw new Error(err)
      });

    } else {
      // else use a promise
      return new Promise((fulfill, reject) => {

        // Start HTTP/S request
        got(`${this.url}/last-month/${this.name}`).then(({body}) => {
          fulfill(jparse(body))
        }).catch((err) => {
          if (err) {
            reject(err)
          }
        });

      });
    }
  }

  // LAST YEAR STATS
  year(callback) {
    // If callback !undefined then use it.
    if (callback !== undefined) {

      // Start HTTP/S request
      got(`${this.ever}/${d.getFullYear() - 1}-${month}-${day}:${date}/${this.name}`).then(({body}) => {
        callback(err = undefined, jparse(body))
      }).catch((err) => {
      if (err)
          throw new Error(err)
      });

    } else {
      // else use a promise
      return new Promise((fulfill, reject) => {

        // Start HTTP/S request
        got(`${this.ever}/${d.getFullYear() - 1}-${month}-${day}:${date}/${this.name}`).then(({body}) => {
          fulfill(jparse(body))
        }).catch((err) => {
          if (err) {
            reject(err)
          }
        });

      });
    }
  }

  // ABSOLUTE STATS
  total(callback) {
    // If callback !undefined then use it.
    if (callback !== undefined) {

      // Start HTTP/S request
      got(`${this.ever}/1000-01-01:${date}/${this.name}`).then(({body}) => {
        callback(err = undefined, jparse(body))
      }).catch((err) => {
      if (err)
          throw new Error(err)
      });

    } else {
      // else use a promise
      return new Promise((fulfill, reject) => {

        // Start HTTP/S request
        got(`${this.ever}/1000-01-01:${date}/${this.name}`).then(({body}) => {
          fulfill(jparse(body))
        }).catch((err) => {
          if (err) {
            reject(err)
          }
        });

      });
    }
  }
}


module.exports = Package;

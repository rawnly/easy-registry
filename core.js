'use strict'

require('chili-js');
const date = require('./libs/date');
const got = require('got');

function pkg(name) {
  this.name = name;
  this.ever = `https://api.npmjs.org/downloads/range`
  this.url = `https://api.npmjs.org/downloads/point`;
}

function last_day(callback) {
  if ( this.name ) {
    got(`${this.url}/last-day/${this.name}`).then(({body}) => {

      if (callback !== undefined) {
        callback(err = undefined, jparse(body))
      } else {
        console.log( jparse(body) );
      }

    }).catch((err) => {
      if (callback !== undefined) {
        callback(err, body = undefined)
      } else {
        return err;
      }
    })
  } else {
    throw new Error('Expected module name!')
  }
}

function last_week(callback) {
  if (this.name) {
    got(`${this.url}/last-week/${this.name}`).then(({body}) => {
      if (callback !== undefined) {
        callback(err = undefined, jparse(body))
      } else {
        console.log( jparse(body) );
      }
    }).catch((err) => {
      if (callback !== undefined) {
        callback(err, body = undefined)
      } else {
        return err;
      }
    })
  } else {
    throw new Error('Expected module name!')
  }
}

function last_month(callback) {
  if (this.name) {
    got(`${this.url}/last-month/${this.name}`).then(({body}) => {
      if (callback !== undefined) {
        callback(err = undefined, jparse(body))
      } else {
        console.log( jparse(body) );
      }
    }).catch((err) => {
      if (callback !== undefined) {
        callback(err, body = undefined)
      } else {
        return err;
      }
    })
  } else {
    throw new Error('Expected module name!')
  }
}

function last_year(callback) {
  if (this.name) {
    got(`${this.ever}/${d.getFullYear() - 1}-${month}-${day}:${date}/${this.name}`).then(({body}) => {
      if (callback !== undefined) {
        callback(err = undefined, jparse(body))
      } else {
        console.log( jparse(body) );
      }
    }).catch((err) => {
      if (callback !== undefined) {
        callback(err, body = undefined)
      } else {
        return err;
      }
    })
  } else {
    throw new Error('Expected module name!')
  }
}

function _ever(callback) {
  if ( this.name ) {
    got(`${this.ever}/1000-01-01:${date}/${this.name}`).then(({body}) => {
      if (callback !== undefined) {
        callback(err = undefined, jparse(body))
      } else {
        console.log( jparse(body) );
      }
    }).catch((err) => {
      if (callback !== undefined) {
        callback(err, body = undefined)
      } else {
        return err;
      }
    })
  } else {
    throw new Error('Expected module name!')
  }
}

module.exports = {
  init: pkg,
  day: last_day,
  week: last_week,
  month: last_month,
  year: last_year,
  absolute: _ever
}

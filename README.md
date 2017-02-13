# Easy Registry

<p align="center"> <img src="https://cloud.githubusercontent.com/assets/16429579/22896657/3f5b2b66-f221-11e6-8702-3c51f80896f5.png" alt="wall"></p>
> Easy tool for [NPM Registry][registry]

This module provides to give you information about a **npm** module.

```js
const registry = require('easy-registry')

// Module Name
registry.init('splash-cli')

// Get downloads in the last day
registry.day((err, data) => {
  if (!err) {
    console.log(data)
  }
})

// Get downloads in the last week
registry.week((err, data) => {
  if (!err) {
    console.log(data)
  }
})

// Get downloads in the last month
registry.month((err, data) => {
  if (!err) {
    console.log(data)
  }
})

// Get download in the last year
registry.year((err, data) => {
  if (!err) {
    console.log(data)
  }
})


// Get total downloads
//(from 1 Jan 1000  to current day)
registry.absolute((err, data) => {
  if (!err) {
    console.log(data)
  }
})
```

View the [full example](samples/example.js) for more infos about data manipulation.


## Install
**NPM**
```bash
  $ npm install easy-registry --save
```

**YARN**
```bash
  $ yarn add easy-registry
```

## Related
- [got](https://github.com/sindresorhus/got)
- [chili-js](https://github.com/rawnly/chili-js)

[registry]: https://registry.npmjs.org


<h3 align="center"> Written in love by @Rawnly </h3>

# Easy Registry

<p align="center"> <img src="https://cloud.githubusercontent.com/assets/16429579/22896657/3f5b2b66-f221-11e6-8702-3c51f80896f5.png" alt="wall"></p>
> Easy tool for [NPM Registry][registry]

This module provides to give you information about a **npm** module.

You can grab downloads and `date` informations. You can also use [this module](https://github.com/jstrace/chart) to create beautiful chars.


## Install
**NPM**
```bash
  $ npm install easy-registry --save
```

**YARN**
```bash
  $ yarn add easy-registry
```

## Usage
```js
// Modules
const chart = require('chart');
const chili = require('chili-js');
const Package = require('easy-registry')

// Variables
const myModule = new Package('myModule')

// The magic happens
myModule.day((err, infos) => {
  let downloads = infos.map(info => {
    return info.downloads
  });

  downloads.sort((a, b) => {
    return a - b
  });

  const ch = chart(downloads, {
    width: 70,
    height: 30
  });

  console.log(ch);
});
```
> With Callback

<br>
<br>
<br>

```javascript
// Modules
const chart = require('chart');
const chili = require('chili-js');
const Package = require('easy-registry')

// Variables
const myModule = new Package('myModule')

// The magic happens
myModule.day().then(infos => {
  const downloads = infos.map(info => {
    return info.downloads
  });

  // .sum() is a `chili-js` function!
  console.log(`Total: ${downloads.sum()}`);

}).catch(err => {
  throw new Error(err)
})
```
> With Promises

View the [full example](samples/example.js) for more informations about `data manipulation`.

<br>

## API
1. `.day(callback)`   - Get datas about the last day.
2. `.week(callback)`  - Get datas about the last week.
3. `.month(callback)` - Get datas about the last month.
4. `.year(callback)`  - Get datas about the last year.
5. `.total(callback)` - Get datas from `1 Jan 1000` to the `current day`.

## Modules in the examples
- [chili-js](https://github.com/rawnly/chili-js) - Useful NodeJs variables and functions
- [jstrace/chart](https://github.com/jstrace/chart) - Ansi charts for nodejs



---
> Made with :heart: by [@Rawnly](https://github.com/rawnly)


[registry]: https://registry.npmjs.org

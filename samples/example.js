const chili = require('chili-js');

const Package = require('../index.js');
const reg = new Package('easy-registry')

// With Promises
reg.total().then((data) => {
  let downloads = data.downloads.map(dw => {
    return dw.downloads
  })

  console.log(`Total Downloads: ${downloads.sum()}`);

}).catch((err) => {
  console.log(err);
})

// With Callback
reg.total((err, data) => {
  if (err) {
    throw new Error(err)
  }

  let downloads = data.downloads.map(dw => {
    return dw.downloads
  })

  console.log(`Total Downloads: ${downloads.sum()}`);

})

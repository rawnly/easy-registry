require('chili-js'); // -> https://github.com/rawnly/chili-js

const reg = require('easy-registry');



// Initialize
reg.init('easy-registry')

// get the data
reg.absolute( (err, data) => {
  let _downloads = [];

  data.downloads.forEach((item) => {
    _downloads.push(item.downloads)
  });

  console.log( '--> Total Downloads: ' + c.sum() );
})

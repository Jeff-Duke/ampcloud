const dataurl = require('dataurl');
const fs = require('fs');

const gimmeSong = (callback) => {
  fs.readFile('/Users/Duke/turing/mod-4/projects/test-project/04-the_xx-islands.mp3',
  (err, data) => {
    if (err) { callback(err); }
    const encoded = dataurl.convert({ data, mimeType: 'audio/mp3' });
    callback(null, encoded);
  });
};

module.exports = gimmeSong;

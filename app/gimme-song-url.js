'use strict';
const dataurl = require('dataurl');
const fs = require('fs');
const id3 = require('id3js');

const gimmeSong = (filePath, callback) => {
  const track = {};
  id3({ file: filePath, type: id3.OPEN_LOCAL }, (err, tags) => {
    if (err) { console.log(err); }
    if (tags) {
      const { title, album, artist } = tags;
      Object.assign(track, {
        title,
        artist,
        album,
      });
    }
  });
  fs.readFile(filePath,
  (err, data) => {
    if (err) { callback(err); }
    const encoded = dataurl.convert({ data, mimetype: 'audio/mp3' });
    Object.assign(track, {
      encoded,
    });
    console.log(track);
    // callback(null, track);
  });
};

module.exports = gimmeSong;

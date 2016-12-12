const dataurl = require('dataurl');
const fs = require('fs');
const id3 = require('id3js');
const mp3Duration = require('mp3-duration');
const PlayList = require('./src/components/PlayerView/PlayList');
const EventEmitter = require('events').EventEmitter;

const server = new EventEmitter();

const gimmeSongObject = (filePath) => {
  let track = {};
  id3({ file: filePath, type: id3.OPEN_LOCAL }, (err, tags) => {
    if (err) { console.log(err); }
    if (tags) {
      const { title, album, artist } = tags;
      Object.assign(track, {
        title,
        artist,
        album,
        track: tags.v1.track,
        filePath,
      });
    }
    PlayList.push(track);
    server.emit('playlist-updated');
    track = {};
  });
  mp3Duration(filePath, (err, duration) => {
    if (err) console.log(err.message);
    Object.assign(track, {
      duration,
    });
  });
};

const gimmeSong = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) { reject(err); }
      resolve(dataurl.convert({ data, mimetype: 'audio/mp3' }));
    });
  });
};

module.exports = { gimmeSong, gimmeSongObject };

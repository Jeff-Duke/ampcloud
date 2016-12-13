const dataurl = require('dataurl');
const fs = require('fs');
const id3 = require('id3js');
const mp3Duration = require('mp3-duration');
const EventEmitter = require('events').EventEmitter;

const server = new EventEmitter();

const gimmeDuration = (filePath) => {
  const durationPromise = new Promise((resolve, reject) => {
    mp3Duration(filePath, (err, duration) => {
      if (duration) {
        resolve(duration);
      }
      if (err) { reject(err); }
    });
  });
  return durationPromise;
};

const gimmeTags = (track) => {
  const { filePath } = track;
  const tagsPromise = new Promise((resolve, reject) => {
    id3({ file: filePath, type: id3.OPEN_LOCAL }, (err, tags) => {
      if (tags) {
        const { title, album, artist } = tags;
        Object.assign(track, { title, album, artist, track: tags.v1.track });
        resolve(track);
      }
      if (err) { reject(err); }
    });
  });
  return tagsPromise;
};

const gimmeSongObject = (filePath) => {
  const track = {};
  return gimmeDuration(filePath)
  .then((duration) => Object.assign(track, { duration, filePath }))
  .then((track) => gimmeTags(track));
};

const gimmeSong = (filePath) => {
  const songPromise = new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) { reject(err); }
      resolve(dataurl.convert({ data, mimetype: 'audio/mp3' }));
    });
  });
  return songPromise;
};

module.exports = { gimmeSong, gimmeSongObject };

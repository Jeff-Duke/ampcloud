'use strict';
import Audio5js from 'audio5';

const audioReady = (mp3Path) => {
  this.load(mp3Path);
};

const playPause = exports.playPause = () => {
  if (this.playing) {
    this.pause();
    this.volume(0);
    console.log(this.position, this.duration, this.load_percent, this.volume());
  }
  else {
    this.play();
    this.volume(1);
  }
};

const moveToStart = exports.moveToStart = () => this.seek(0);

const initAudio = exports.initAudio = () => {
  const audio5js = new Audio5js({
    throw_errors: true,
    format_time: true,
    ready: audioReady,
  });
};


'use strict';

const { app, BrowserWindow, dialog} = require('electron');
const fs = require('fs');
const path = require('path');

const gimmeSong = global.gimmeSong = require('./gimme-song-url');
const gimmeSongObject = require('./gimme-song-url');

let mainWindow;
let config = {};

if (process.env.NODE_ENV === 'development') {
  config = require('../config');
  config.url = `http://localhost:${config.port}`;
} else {
  config.devtron = false;
  config.url = `file://${__dirname}/dist/index.html`;
}

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 800,
    width: 1200,
    webSecurity: false,
    experimentalFeatures: true
  });

  mainWindow.loadURL(config.url);

  if (process.env.NODE_ENV === 'development') {
    BrowserWindow.addDevToolsExtension(path.join(__dirname, '../node_modules/devtron'));

    let installExtension = require('electron-devtools-installer');

    installExtension.default(installExtension.VUEJS_DEVTOOLS)
      .then((name) => mainWindow.webContents.openDevTools())
      .catch((err) => console.log('An error occurred: ', err));
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  
  console.log('mainWindow opened');
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

const loadFile = exports.loadFile = (filePath, callback) => {
  gimmeSong(filePath, callback);
};

const openFile = exports.openFile = (callback) => {
  const files = dialog.showOpenDialog({
    title: 'Open File',
    properties: [ 'openFile' ],
    filters: [
      {name: 'Audio Files', extensions: ['mp3']},
    ]
  });

  if (!files) { return; }

  const filePath = files[0];
  gimmeSongObject(filePath, callback);
};


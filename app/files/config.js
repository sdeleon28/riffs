import fs from 'fs';
import path from 'path';
const { app } = require('electron').remote;


const getConfFile = () => {
  const home = app.getPath('home');
  const riffsHome = `${home}/.riffs`;
  try {
    fs.accessSync(riffsHome, fs.F_OK);
  } catch (e) {
    fs.mkdirSync(riffsHome);
  }
  return path.join(riffsHome, 'config.json');
};

export const saveDirectory = directory => {
  fs.writeFileSync(getConfFile(), JSON.stringify({ ideasDirectory: directory }));
};

export const getDirectory = () => {
  const fileContent = fs.readFileSync(getConfFile());
  return JSON.parse(fileContent).ideasDirectory;
};

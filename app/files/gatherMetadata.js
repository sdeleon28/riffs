import fs from 'fs';
import _ from 'lodash';
import ini from 'ini';


const gatherMetadata = dir => {
  const ideaDirs = fs.readdirSync(dir);
  return ideaDirs.map(ideaDirName => {
    const ideaDir = `${dir}/${ideaDirName}`;
    const stat = fs.statSync(ideaDir);
    if (stat && stat.isDirectory()) {
      const files = fs.readdirSync(ideaDir);
      let meta = {
        name: ideaDirName,
        keys: [],
        tags: [],
      };
      if (_.includes(files, 'meta.ini')) {
        meta = parseMeta(`${ideaDir}/meta.ini`);
      }
      return {
        ...meta,
        ...categorizeFiles(files.map(x => `${ideaDir}/${x}`)),
      };
    } else {
      return null;
    }
  }).filter(x => x != null);
}

const categorizeFiles = files => ({
  audio: files.filter(x => x.endsWith('.mp3')),
  score: files.find(x => x.endsWith('/score.jpg')) || null,
});

const parseMeta = filename => {
  const iniObj = parseIni(filename);
  return {
    ...iniObj,
    keys: iniObj.keys ? iniObj.keys.split(' ') : [],
    tags: iniObj.tags ? iniObj.tags.split(' ') : [],
  };
};

const parseIni = filename => ini.decode(fs.readFileSync(filename, 'utf8'));

export default gatherMetadata;

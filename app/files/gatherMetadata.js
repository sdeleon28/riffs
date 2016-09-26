import fs from 'fs';
import _ from 'lodash';
import ini from 'ini';
import path from 'path';


const gatherMetadata = dir => {
  const ideaDirs = fs.readdirSync(dir);
  return ideaDirs.map(ideaDirName => {
    const ideaDir = `${dir}/${ideaDirName}`;
    const stat = fs.statSync(ideaDir);
    if (stat && stat.isDirectory()) {
      const files = fs.readdirSync(ideaDir);
      let meta = {
        title: ideaDirName,
        keys: [],
        tags: [],
        author: 'Unknown',
      };
      if (_.includes(files, 'meta.ini')) {
        meta = {
          ...meta,
          ...parseMeta(`${ideaDir}/meta.ini`),
        };
      }
      return {
        ...categorizeFiles(files.map(x => `${ideaDir}/${x}`)),
        dirName: ideaDirName,
        title: meta.title,
        metadata: meta,
      };
    } else {
      return null;
    }
  })
    .filter(x => x != null)
    .reduce((acc, elem) => ({
      ...acc,
      [elem.dirName]: elem,
    }), {});
}

const categorizeFiles = files => ({
  media: files.filter(x => x.endsWith('.mp3')).map(x => ({
    title: path.basename(x),
    file: x,
  })),
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

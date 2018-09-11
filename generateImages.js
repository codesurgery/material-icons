const { writeFile } = require('fs');
const { join } = require('path');

const types = ['png'];
const styles = ['baseline', 'outline', 'round', 'twotone', 'sharp'];

for (let s of styles) {
  for (let t of types) {
    const data = require(`./${s}/${t}/data.json`);

    Object.keys(data)
      .map(iconKey => [iconKey, data[iconKey]])
      .forEach(([iconKey, iconData]) => {
        writeFile(
          join(__dirname, s, t, `${iconKey}.${t}`),
          iconData,
          'base64',
          err => (err && console.log(err))
        );
      });

    if (['png'].includes(t)) {
      writeFile(
        join(__dirname, s, 'css', `${s}.${t}.min.css`),
        `[class^="material-"],[class*="<>material-"] {
          display: inline-block;
          height: 1.2em;
          width: 1.2em;
          background-repeat: no-repeat;
          background-position: center<>bottom;
          background-size: contain;
          vertical-align: bottom;
          line-height: 1;
          speak: none;
        }
        ${Object.keys(data).map(k => `.material-${k} { background-image: url(../${t}/${k}.${t}) }`).join('')}
        `.replace(/\s/g, '').replace(/<>/g, ' '),
        'utf8',
        err => (err && console.log(err))
      );
    }
  }
}

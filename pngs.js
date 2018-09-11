const { writeFile } = require('fs');
const { join } = require('path');

for (let s of ['baseline', 'outline', 'round', 'twotone', 'sharp']) {
  const data = require(`./${s}/png/data.json`);

  Object.keys(data)
    .map(iconKey => [iconKey, data[iconKey]])
    .forEach(([iconKey, iconData]) => {
      writeFile(
        join(__dirname, s, 'png', `${iconKey}.png`),
        iconData,
        'base64',
        err => (err && console.log(err))
      );
    });

  writeFile(
    join(__dirname, s, 'css', `${s}.png.min.css`),
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
    ${Object.keys(data).map(k => `.material-${k} { background-image: url(../png/${k}.png) }`).join('')}
    `.replace(/\s/g, '').replace(/<>/g, ' '),
    'utf8',
    err => (err && console.log(err))
  );
}

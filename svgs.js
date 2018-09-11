const { writeFile } = require('fs');
const { join } = require('path');
const { exec } = require('child_process');

let delay = 0;
function getAndSave (url, path) {
  return new Promise((resolve, reject) => {
    delay += 100 + ~~(100 * Math.random());
    setTimeout(
      () => {
        exec(`wget ${url} -O ${join(__dirname, path)}`, (err) => {
          if (err) {
            console.log('Failed to fetch:', url);
          } else {
            console.log('Fetched:', url);
          }
          resolve();
        });
      },
      delay
    );
  });
}

for (let s of ['baseline', 'outline', 'round', 'twotone', 'sharp']) {
  const data = require(`./${s}/png/data.json`);
  const iconKeys = Object.keys(data);

  Promise.all(
    iconKeys.map(iconKey =>
      getAndSave(
        `https://material.io/tools/icons/static/icons/${s}-${iconKey}-24px.svg`,
        `${s}/svg/${iconKey}.svg`
      )
    )
  ).then(() => {
    writeFile(
      join(__dirname, s, 'css', `${s}.svg.min.css`),
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
      ${Object.keys(data).map(k => `.material-${k} { background-image: url(../svg/${k}.svg) }`).join('')}
      `.replace(/\s/g, '').replace(/<>/g, ' '),
      'utf8',
      err => (err && console.log(err))
    );
  });
}

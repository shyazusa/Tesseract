'use strict';
window.addEventListener('load', function() {
  document.getElementById('submit').addEventListener('click', function() {
    const image = document.getElementById('url').value;
    document.getElementById('result').innerHTML = '<div id="img"><img src="' + image + '"/></div><div id="tesseract"></div>';
    if (image.match(/^https:\/\//)) {
      document.getElementById('tesseract').innerHTML = '読み込み中です…….';
      Tesseract.recognize(image, {lang: 'jpn'}).then(function(result) {
        document.getElementById('tesseract').innerHTML = result.html;
      });
    } else {
      document.getElementById('tesseract').innerHTML = 'URLがhttps://ではないようです．<br />\nhttps://から始まるURLをお願いします．';
    }
  });
});

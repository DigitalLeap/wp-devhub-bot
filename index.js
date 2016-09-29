var express = require('express');
var app = express();

app.listen(80, function () {
    response.writeHead(302, {
      'Location': 'https://leapsandbounds.io'
    });
    response.end();
});

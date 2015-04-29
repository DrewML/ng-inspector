var path = require('path');
var express = require('express');
var app = express();

app.set('views', __dirname);
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '../')));

app.get('/app/:scenario/:angularVersion', function (req, res) {
  res.render('base-template', {
  	angularVersion: req.params.angularVersion,
  	scenario: req.params.scenario,
  	scenarioPath: '../' + req.params.scenario + '.html'
  });
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Serving scenarios on port %s', port);
});

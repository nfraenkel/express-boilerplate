// Generated by CoffeeScript 1.3.3

module.exports = function(app) {
  var get, set, _ref;
  app.get('/', function(req, res) {
    return res.render('index', {
      action: 'Do Something!'
    });
  });
  app.get('/action/:action', function(req, res) {
    return res.render('index', {
      action: req.params.action
    });
  });
  app.get('/hello', function(req, res) {
    return res.send('Hello Node');
  });
  app.get('/hello/:name', function(req, res) {
    return res.send("Hello " + req.params.name);
  });
  _ref = require('./persist'), set = _ref.set, get = _ref.get;
  app.get('/set/:key/:val', function(req, res) {
    set(req.params.key, req.params.val);
    return res.send('OKAY');
  });
  return app.get('/get/:key', function(req, res) {
    return get(req.params.key, function(err, val) {
      if (err != null) {
        return res.send(500, err);
      } else {
        return res.send(val);
      }
    });
  });
};
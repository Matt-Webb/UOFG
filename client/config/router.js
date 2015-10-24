Router.configure({
    layoutTemplate: 'layout'
});

// HOME

Router.route('/', function () {
    this.render('home');
});

Router.route('/schedule', function () {
  this.render('schedule');
});

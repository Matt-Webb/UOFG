Router.configure({
    layoutTemplate: 'layout'
});

// HOME

Router.route('/', function () {
    this.render('home');
    $('body').addClass('color-green');
    this.next();
});

Router.route('/schedule', function () {
  this.render('schedule');
  $('body').addClass('color-green');
  this.next();
});

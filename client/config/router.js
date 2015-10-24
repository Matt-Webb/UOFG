Router.configure({
    layoutTemplate: 'layout'
});

// HOME

Router.route('/', function () {
    this.render('home');
});

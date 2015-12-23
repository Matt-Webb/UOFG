Router.configure({
    layoutTemplate: 'layout',

    loadingTemplate: 'loading',
    waitOn: function (){
      //Accounts.loginServicesConfigured();
    }
});

// Home routes ---->

Router.route('/', {
    name: 'homeIndex',
    waitOn : function () {
      return Meteor.subscribe("schedule-list");
    },
    data: function () {
      return ClassSchedule.find();
    }
});
Router.route('/about', {
  name: 'homeAbout'
});
Router.route('/contact', {
  name: 'homeContact'
});

// Schedule routes ---->

Router.route('/schedule', {
  name: 'scheduleList',
  waitOn: function () {
    return Meteor.subscribe('schedule-list');
  },
  data: function () {
    return ClassSchedule.find();
  }
});

Router.route('/schedule/:_id', {
  name: 'scheduleShow',
  data: function () {
    return ClassSchedule.findOne({_id : this.params._id});
  }
});

// Instructor routes ---->

Router.route('/instructors', {
    name: 'instructorList',
    waitOn: function () {
      return Meteor.subscribe('instructor-list');
    },
    data: function () {
      return ClassInstructor.find();
    }
});

Router.route('instructors/:_id', {
  name: 'instructorShow',
   waitOn: function () {
     return Meteor.subscribe('instructor-show', this.params._id);
  },
  data: function () {
    return ClassInstructor.findOne({_id : this.params._id });
  }
});

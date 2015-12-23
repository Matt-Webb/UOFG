Meteor.publish('instructor-list', function(){
  return ClassInstructor.find();
});

Meteor.publish('instructor-show', function (id) {
  return ClassInstructor.find({_id : id });
});

Meteor.publish('schedule-list', function() {
  return ClassSchedule.find();
});

Template.scheduleList.helpers({
  schedule: function () {
    return ClassSchedule.find({'name' : 'Kirkstall Abbey'});
  }
});

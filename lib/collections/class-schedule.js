
ClassSchedule = new Mongo.Collection("class-schedule");

var Schemas = {};

Schemas.Class = new SimpleSchema({
    title: {
      type: String
    },
    startDateTime: {
      type: Date
    },
    finishDateTime: {
      type: Date
    },
    venueTitle: {
      type: String
    }
});

ClassSchedule.attachSchema(Schemas.Class);

// define mongo collections:
ClassSchedule = new Mongo.Collection("class-schedule");
ClassInstructor = new Mongo.Collection("class-instructor");
ClassUser = new Mongo.Collection("class-user");
ClassAddress = new Mongo.Collection("class-address");
ClassLocation = new Mongo.Collection("class-location");


// // define ORM schemas, attached to a single object:
// var Schemas = {};
//
// Schemas.Address = new SimpleSchema({
//   venue: {
//     type: String,
//     optional: true
//   },
//   street: {
//     type: String,
//     optional: true,
//     max: 100
//   },
//   city: {
//     type: String,
//     max: 50,
//     optional: true
//   },
//   county: {
//     type: String,
//     max: 100,
//     optional: true
//   },
//   longditude: {
//     type: Number,
//     decimal: true,
//     optional: true
//   },
//   latitude: {
//     type: Number,
//     decimal: true,
//     optional: true
//   },
//   postcode: {
//     type: String,
//     optional: true
//   }
// });
//
// Schemas.ClassLocation = new SimpleSchema({
//     name: {
//       type: String,
//       optional: true
//     },
//     address: {
//       type: Schemas.Address
//     },
//     image: { // url - provide default!
//       type: String,
//       optional: true
//     },
//     indoor: {
//       type: Boolean
//     },
//     outdoor: {
//       type: Boolean
//     },
//     active: {
//       type: Boolean,
//       optional: true
//     }
// });
//
// Schemas.Instructor = new SimpleSchema({
//   name: {
//     type: String
//   },
//   role: {
//     type: String,
//     optional: true
//   },
//   locations: { // based array for multiple instances!
//     type: [Schemas.ClassLocation],
//     optional: true
//   },
//   bio: {
//     type: String,
//     optional: true
//   },
//   specialities: {
//     type: [String],
//     optional: true
//   },
//   image: { // url - provide default avatar
//     type: String,
//     optional: true
//   },
//   social: {
//     type: Object,
//     optional: true
//   }
// });
//
// Schemas.User = new SimpleSchema({
//   name: {
//     type: String,
//     optional: true
//   },
//   image: {
//     type: String,
//     optional: true
//   }
// });
//
// Schemas.Class = new SimpleSchema({
//     title: {
//       type: String
//     },
//     description: {
//       type: String
//     },
//     startDateTime: {
//       type: Date
//     },
//     finishDateTime: {
//       type: Date
//     },
//     createdDate: {
//       type: Date
//       //default: Date.now()
//     },
//     location: {
//       type: String
//     },
//     instuctor: {
//       type: [Schemas.Instuctor],
//       optional: true
//     },
//     canRegistered: {
//       type: Boolean,
//       // optional: true
//     },
//     Registrants: {
//       type: [Meteor.user],
//       optional: true
//     }
// });
//
// // add schemas to Meteor Collections:
// ClassSchedule.attachSchema(Schemas.Class);
// ClassInstructor.attachSchema(Schemas.Instructor);
// ClassUser.attachSchema(Schemas.User);
// ClassLocation.attachSchema(Schemas.ClassLocation);
// ClassAddress.attachSchema(Schemas.Address);




//
// ClassInstructor.allow({
//   update : function(userid, instructor){
//     return isAdmin();
//   },
//   insert : function(userid, instructor){
//     return isAdmin();
//   },
//   remove : function(userid, instructor){
//     return isAdmin();
//   }
// });

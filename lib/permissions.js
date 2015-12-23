isAdmin = function(){
  var loggedInUser = Meteor.user();
  var result = false;
  if(loggedInUser){
    console.log('checking user...');
    if (Roles.userIsInRole(loggedInUser, ['Admin'])){
      result = true;
    }
  }
  return result;
};

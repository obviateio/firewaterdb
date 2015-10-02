checkIsAdmin = function(userId) {
  console.log('checkIsAdmin: '+userId);
  return Roles.userIsInRole(userId, ['admin'], 'admin');
};

getUserName = function(){
  if(Meteor.user().username){
    return Meteor.user().username;
  }else{
    return Meteor.user().emails[0].address;
  }
};

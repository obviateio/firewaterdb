Meteor.publish('drinks', function() {
  return Drinks.find();
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId, read: false});
});

Meteor.publish(null, function (){
  return Meteor.roles.find({})
})

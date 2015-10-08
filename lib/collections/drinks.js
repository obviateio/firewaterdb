Drinks = new Mongo.Collection('drinks');

if(Meteor.isServer){
  Meteor.publish('singleDrink', function(id) {
    check(id, String);
    return Drinks.find(id);
  });
};

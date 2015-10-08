UnitsList = new Mongo.Collection('unitsList');

if (Meteor.isClient) {
  Meteor.subscribe("unitsList");
}

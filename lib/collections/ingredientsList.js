IngredientsList = new Mongo.Collection('ingredientsList');

if (Meteor.isClient) {
  // For now we'll carry around the full array on all Packages
  // In the future we'll want to only return search results when add/edit
  Meteor.subscribe("ingredientsList");
}


UnitsList = new Mongo.Collection('unitsList');

if (Meteor.isClient) {
  Meteor.subscribe("unitsList");
}

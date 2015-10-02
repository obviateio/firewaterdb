Meteor.publish('drinks', function() {
  return Drinks.find();
});

// var drinkServerProps = ['igredientCount','createdUser','createdUserID','createdWhen','updatedUserID','updatedWhen'];
// Drinks.permit('insert').ifLoggedIn().exceptProps(drinkServerProps).apply();
Drinks.permit('insert').ifLoggedIn().apply();

Meteor.publish('ingredientsList', function() {
  return IngredientsList.find();
});

Meteor.publish('unitsList', function() {
  return UnitsList.find();
});

Meteor.publish('notifications', function() {
  return Notifications.find({
    userId: this.userId,
    read: false
  });
});

Meteor.publish(null, function() {
  return Meteor.roles.find({});
});

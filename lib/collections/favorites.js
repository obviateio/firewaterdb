Favorites = new Mongo.Collection('favorites');

if (Meteor.isClient) {
  Meteor.subscribe("favorites");
}

// Publishing only the favorites that belong to the current user
if(Meteor.isServer) {
  Meteor.publish("favorites", function () {
    return Favorites.find({userid: this.userId});
  });
}

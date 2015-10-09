// We'll want to publish the first 10 records and then stop.
// ex: http://stackoverflow.com/questions/32801498/

Template.home.helpers({
  recipPop: function() {
    // This should actually sort based on ratings
    return Drinks.find({}, {
      limit: 10,
      sort: {
        ratingAverage: -1
      }
    });
  },
  recipNewest: function() {
    // This should actually sort based on age
    return Drinks.find({}, {
      limit: 10,
      sort: {
        createdWhen: -1
      }
    });
  },
});

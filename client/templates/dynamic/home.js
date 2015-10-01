// We'll want to publish the first 10 records and then stop.
// ex: http://stackoverflow.com/questions/32801498/

Template.home.helpers({
    recipPop: function () {
      // This should actually sort based on ratings
      return Drinks.find({},{limit:10});
    },
    recipNewest: function () {
      // This should actually sort based on age
      return Drinks.find({});
    },
  });

Template.listIngred.helpers({
  translateUnit: function(id){
    var unit = UnitsList.findOne({_id:id});
    if(unit){
      return unit.name;
    }else{
      // Ultimately this should never happen.
      return "???";
    }
  }
})

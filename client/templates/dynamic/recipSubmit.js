//
// https://github.com/aldeed/meteor-autoform/blob/devel/templates/bootstrap3/components/afArrayField/afArrayField.html
//

Template.afArrayField_custom_ingredients.helpers({
    unitOptions: function() {
      var units = UnitsList.find({}).fetch();
      var theList = [];
      for(var u of units){
        theList.push({label:u.name,value:u._id});
      }
      return theList;
    }
});


Template.afArrayField_custom_ingredients.events({
  "autocompleteselect input": function(event, template, doc) {
    console.log("selected ", doc._id);
    $(this).siblings("input[name='id']").val(doc._id);
  }
});

AutoForm.hooks({
  newDrinkForm: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
      console.log(JSON.stringify(insertDoc));
    }
  }
});

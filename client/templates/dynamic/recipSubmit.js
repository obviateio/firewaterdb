//
// https://github.com/aldeed/meteor-autoform/blob/devel/templates/bootstrap3/components/afArrayField/afArrayField.html
//

Template.afArrayField_custom_ingredients.events({
  "autocompleteselect input": function(event, template, doc) {
    console.log("selected ", doc._id);
    $(this).siblings("input[name='id']").val(doc._id);
  }
});

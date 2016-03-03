//
// https://github.com/aldeed/meteor-autoform/blob/devel/templates/bootstrap3/components/afArrayField/afArrayField.html
//

Template.afArrayField_custom_ingredients.events({
  "autocompleteselect input": function(event, template, doc) {
    //console.log("selected ", doc._id);
    $("input[name='"+this.name+"'").parent().siblings("input:hidden").val(doc._id);
  }
});

var Schemas = {};
SimpleSchema.debug = true;

Schemas.Drinks = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 100,
    index: true
  },
  description: {
    type: String,
    label: "Short Description",
    max: 250,
    optional: true
  },
  createdUser: {
    type: String,
    label: "Created By",
    autoValue: function() {
      if (this.isInsert) {
        return getUserName();
      } else if (this.isUpsert) {
        return {
          $setOnInsert: getUserName()
        };
      } else {
        this.unset();
      }
    }
  },
  createdUserID: {
    type: String,
    index: true,
    autoValue: function() {
      if (this.isInsert) {
        return this.userId;
      } else if (this.isUpsert) {
        return {
          $setOnInsert: this.userId
        };
      } else {
        this.unset();
      }
    }
  },
  createdWhen: {
    type: Date,
    label: "Created At",
    index: true,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date()
        };
      } else {
        this.unset();
      }
    }
  },
  updatedUser: {
    type: String,
    denyInsert: true,
    index: true,
    label: "Updated By",
    optional: true,
    autoValue: function() {
      if (this.isUpdate) {
        return getUserName();
      } else {
        this.unset();
      }
    }
  },
  updatedUserID: {
    type: String,
    denyInsert: true,
    optional: true,
    autoValue: function() {
      if (this.isUpdate) {
        return this.userId;
      } else {
        this.unset();
      }
    }
  },
  updatedWhen: {
    type: Date,
    index: true,
    denyInsert: true,
    label: "Updated At",
    optional: true,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      } else {
        this.unset();
      }
    }
  },
  igredientCount: {
    type: Number,
    index: true,
    label: "Number of ingredients",
    min: 1,
    autoform: {
      type: 'hidden',
    },
    autoValue: function() {
      var res = this.siblingField("ingredients");
      //          console.log('igredientCount length: ' +JSON.stringify(res));
      //          console.log('igredientCount length: ' +JSON.stringify(res.value.$));
      // TODO: Fix this->
      return 1;
    }
  },
  instructions: {
    type: String,
    label: "Instructions",
    optional: true,
    max: 2000
  },
  ingredients: {
    type: [Object],
    minCount: 1,
    maxCount: 25
  },
  "ingredients.$.quantity": {
    type: Number,
    decimal: true,
    label: "Quantity",
    autoform: {
      "step": ".1",
      "formgroup-class": "col-md-4",
      "form-control": "form-control"
    }
  },
  "ingredients.$.unit": {
    type: String,
    label: "Unit",
    min: 0,
    autoform: {
      "formgroup-class": "col-md-4",
      "form-control": "form-control",
      options: function() {
        var units = UnitsList.find({}).fetch();
        var theList = [];
        for (var u of units) {
          theList.push({
            label: u.name,
            value: u._id
          });
        }
        return theList;
      }
    }
  },
  "ingredients.$.ingredient": {
    type: String,
    label: "Ingredient",
    autoform: {
      "formgroup-class": "col-md-4",
      "form-control": "form-control",
      afFieldInput: {
        type: 'autocomplete-input',
        placeholder: 'something',
        settings: function() {
          return {
            position: "bottom",
            limit: 5,
            rules: [{
              collection: IngredientsList,
              field: "name",
              matchAll: true,
              template: Meteor.isClient && Template.dataPiece
            }]
          };
        }
      }
    }
  },
  "ingredients.$.ingredientID": {
    type: String,
    label: "Ingredient ID",
    optional: true,
    autoform: {
      type: 'hidden'
    }
  },
});

Drinks.attachSchema(Schemas.Drinks);

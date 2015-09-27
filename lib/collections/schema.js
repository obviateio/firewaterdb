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
            // find username
            return false;
          } else if (this.isUpsert) {
            return {$setOnInsert: false /*find username*/};
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
            return this.userId
          } else if (this.isUpsert) {
            return {$setOnInsert: this.userId};
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
            return new Date;
          } else if (this.isUpsert) {
            return {$setOnInsert: new Date};
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
        autoValue:function(){ return false /*find username*/ }
    },
    updatedUserID: {
        type: String,
        denyInsert: true,
        optional: true,
        autoValue:function(){ return this.userId }
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
          }
        }
    },
    igredientCount: {
        type: Number,
        index: true,
        label: "Number of ingredients",
        min: 1
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
        label: "Quantity"
    },
    "ingredients.$.unit": {
        type: String,
        label: "Unit"
    },
    "ingredients.$.ingredient": {
        type: String,
        label: "Ingredient",
        autoform: {
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
              }
            }
          }
        }
    },
    "ingredients.$.ingredientID": {
        type: String
    },
});

Drinks.attachSchema(Schemas.Drinks);

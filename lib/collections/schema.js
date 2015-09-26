var Schemas = {};
SimpleSchema.debug = true;

Schemas.Drinks = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 100
    },
    description: {
        type: String,
        label: "Short Description",
        max: 250,
        optional: true
    },
    createdUser: {
        type: String,
        label: "Created By"
    },
    createdUserID: {
        type: String
    },
    createdWhen: {
        type: Date,
        label: "Created At"
    },
    updatedUser: {
        type: String,
        label: "Updated By",
        optional: true
    },
    updatedUserID: {
        type: String,
        optional: true
    },
    updatedWhen: {
        type: Date,
        label: "Updated At",
        optional: true
    },
    igredientCount: {
        type: Number,
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
        label: "Quantity"
    },
    "ingredients.$.unit": {
        type: String,
        label: "Unit"
    },
    "ingredients.$.ingredient": {
        type: Number,
        label: "Ingredient"
    },
    "ingredients.$.ingredientID": {
        type: String
    },
});

Drinks.attachSchema(Schemas.Drinks);

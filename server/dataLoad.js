// Load some ingredients, first time start only
if (IngredientsList.find().count() === 0) {

  var ingred = ['Vodka','Rum', 'Whiskey', 'Scotch', 'Bourbon', 'Tequila', 'Cognac', 'Everclear', 'Absinthe', 'Soju', 'Brandy', 'Moonshine', 'Schnapps', 'Brandy', 'Orange Juice', 'Sprite', '7-Up', 'Cranberry Juice', 'Simple Sugar'];

  // Heh, ES6 FTW: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
  for(var i of ingred){
    console.log('Adding ingredient:'+ i);
    IngredientsList.insert({
      name: i,
    });
  }
}

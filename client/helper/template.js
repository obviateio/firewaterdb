Template.registerHelper('translateUnit', function(id) {
  var unit = UnitsList.findOne({
    _id: id
  });
  if (unit) {
    return unit.name;
  } else {
    // Ultimately this should never happen.
    return "???";
  }
});

Template.registerHelper('orNA', function(text) {
  if (text) {
    return text;
  } else {
    return "n/a";
  }
});

Template.registerHelper("fromNow", function(val){
  return moment(val).fromNow();
});

// Doing all this in triple-curly is a 'bad' idea, but its much easier.
Template.registerHelper("starDisplay", function(theScore) {
  // 'raiting' is apparently protected, don't use it as a var

  if (!theScore) {
    theScore = 0;
  }

  var full = '<i class="fa fa-star" title="' + theScore + ' stars"></i>';
  var half = '<i class="fa fa-star-half-o" title="' + theScore + ' stars"></i>';
  var none = '<i class="fa fa-star-o" title="' + theScore + ' stars"></i>';
  var theHTML = '';

  //Programming humor
  for (var c = 1; c <= 5; c++) {
    if (theScore <= c - 1) {
      theHTML += none;
    } else if (theScore >= c) {
      theHTML += full;
    } else if (theScore > c - 1 && theScore < c) {
      theHTML += half;
    }
  }
  return Spacebars.SafeString(theHTML);
});

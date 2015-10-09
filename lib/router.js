Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notfound',
  waitOn: function() {
    return [Meteor.subscribe('notifications')];
  }
});

//TODO: This publishes ALL drinks, we need change that to only the top 10's
Router.route('/', {
  name: 'home',
  waitOn: function() {
    return [Meteor.subscribe('drinks'), ];
  },
  data: function() {
    return Drinks.find();
  },
  template: 'home'
});

Router.onBeforeAction('dataNotFound', {only: 'recipView'});

Router.route('/drink/:_id', {
  name: 'recipView',
  waitOn: function() {
    return [
      Meteor.subscribe('singleDrink', this.params._id)
      //Meteor.subscribe('comments', this.params._id)
    ];
  },
  data: function() { return Drinks.findOne(this.params._id); }
});

Router.route('/submit', {
  name: 'recipSubmit'
});
Router.route('/popular', {
  name: 'recipPopular'
});
Router.route('/newest', {
  name: 'recipNewest'
});
Router.route('/about', {
  name: 'about'
});
Router.route('/copyright', {
  name: 'copyright'
});
Router.route('/mybar', {
  name: 'myBar'
});
Router.route('/myrecipies', {
  name: 'myRecipies'
});
Router.route('/mycomments', {
  name: 'myComments'
});

var requireLogin = function() {
  if (!Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
};

Router.onBeforeAction(requireLogin, {
  only: ['recipSubmit', 'myBar', 'myRecipies', 'myComments']
});

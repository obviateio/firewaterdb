Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [Meteor.subscribe('notifications')]
  }
});

Router.route('/', {
  name: 'home',
  waitOn: function() {
    return [
      Meteor.subscribe('drinks'),
    ];
  },
  data: function() { return Drinks.find(); },
  template: 'home'
});

Router.route('/submit', {name: 'postSubmit'});

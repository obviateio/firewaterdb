var users = [
     {name:"Normal User",email:"normal@example.com",roles:[]},
     {name:"View-Secrets User",email:"view@example.com",roles:['view-secrets']},
     {name:"Manage-Users User",email:"manage@example.com",roles:['manage-users']},
     {name:"Admin User",email:"admin@example.com",roles:['admin']}
   ];

if(Meteor.users.findOne({email: 'admin@example.com'})){
  //If our default user set doesn't exist, create it.
 _.each(users, function (user) {
   var id;

   id = Accounts.createUser({
     email: user.email,
     password: "apple1",
     profile: { name: user.name }
   });

   if (user.roles.length > 0) {
     Roles.addUsersToRoles(id, user.roles);
   }

 });
}

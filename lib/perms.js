checkIsAdmin = function(userId) {
  console.log('checkIsAdmin: '+userId);
  return Roles.userIsInRole(userId, ['admin'], 'admin');
}

Meteor.startup(function () {
	if(Meteor.users.find().count() < 1) {
		var id = Accounts.createUser({
			email:'admin@admin.com',
			password:'admin@admin',
			profile:{name:'admin'}
		});
		
		// Give the 'admin' role
		Roles.addUsersToRoles(id, 'admin');
	
	}

});
Template.NavBar.events({
	'click #logout': function () {
		Meteor.logout();
	}
});
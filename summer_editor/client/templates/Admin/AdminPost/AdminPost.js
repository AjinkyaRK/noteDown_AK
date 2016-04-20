Template.AdminPost.helpers({
	posts:function () {
		return Posts.find();
	}
});

Template.AdminPost.events({
	'click #deletePost': function () {
		Meteor.call('deletePost', this._id);
	},
	'click #editPost': function () {
		Router.go('/admin/posts/'+this._id); 
	}
});
Template.ShowNotes.helpers({
	posts: function() {
		return Posts.find();
	}
});

Template.ShowNotes.events({
	'click #readMore' : function () {
		Router.go('/post/'+this._id);
	}
});
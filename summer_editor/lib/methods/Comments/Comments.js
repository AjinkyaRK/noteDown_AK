Meteor.methods({
	'addComment': function (message, postId) {
		//get current user
		var user = Meteor.user();

		//login check
		if(!user){
			throw new Meteor.Error('You must be logged in to submit comment!');
		}

		if(!message){
			throw new Meteor.Error('Comment message can not be empty!');
		}

		if(!postId){
			throw new Meteor.Error('Post Id  undefined!');
		}

		//UserId & PostId is our foreign key!
		Comments.insert({
			Author : user.profile.name,
			Message : message,
			UserId: user._id,
			PostId: postId,
			CreatedAt: Date.now()
		});
	},
	'deleteComment' : function (commentId) {
		if (!commentId) {
			throw new Meteor.Error('Comment Id can not be empty!');
		}

		Comments.remove(commentId);
	}
});
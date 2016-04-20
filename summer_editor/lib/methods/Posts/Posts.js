Meteor.methods({
	addPost: function (title, message, postBody) {
		//if user has logged in or not 
		//if (Meteor.user())
			if(Meteor.userId()){
				//loggedIn=true
				var id=Posts.insert({
				Title: title,
				Message: message,
				Body: postBody,
				CreatedAt: Date.now()
				});

				return id;

			}else {
				//loggedIn=false
				throw new Meteor.Error('Not Authorised!');
			}
		  
		
	},

	editPost: function (postID, title, message, postBody) {

				if(Roles.userIsInRole(Meteor.user(),'admin')){
				//Admin login=true
				  
					Posts.update(postID,{
						$set:{
						Title: title,
						Message: message,
						Body: postBody	
						}
					});

				return id;

			}else {
				//loggedIn=false
				throw new Meteor.Error('Not Authorised!');
			}
		

	},

	deletePost: function (postID) {
			if(Roles.userIsInRole(Meteor.user(),'admin')){
				Posts.remove(postID);
			}
	}
});
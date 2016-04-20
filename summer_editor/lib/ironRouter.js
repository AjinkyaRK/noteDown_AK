
//Iron Router config, layout... 
Router.configure({
	layoutTemplate: 'AppLayout'
});


   
//Home Page
Router.route('/', function () {
  this.render('Home');
});
   
//Addpost form
Router.route('/addnote', function () {
		if(Meteor.userId()){
		//loggedIn=true
		this.render('AddPost');
	}else {
		//loggedIn=false
		Router.go('/');
	}
  
});
   
//Show Notes
Router.route('/shownotes', function (){
	this.render('ShowNotes');
});

//User Control Panel 
Router.route('/ucp', function (){
	if(Meteor.userId()){
		//loggedIn=true
		this.render('UserControlPanel');
	}else {
		//loggedIn=false
		Router.go('/');
	}
});

//Single Post View
Router.route('/post/:_id', function () {
	this.render('SinglePost', {
		data: function () { return Posts.findOne({_id: this.params._id}); }
	});
});


//Admin Panel & router
//Admin Panel
Router.route('/admin', function (){

	if(Roles.userIsInRole(Meteor.user(),'admin')){
		//admin true
		this.render('AdminPanel');
	}else {
		//admin false
		Router.go('/');
	}
	
});

//Admin Post
Router.route('/admin/posts', function (){

	if(Roles.userIsInRole(Meteor.user(),'admin')){
		//admin true
		this.render('AdminPost');
	}else {
		//admin false
		Router.go('/');
	}
	
});

//Admin Edit Post
Router.route('/admin/posts/:_id', function () {

	if(Roles.userIsInRole(Meteor.user(),'admin')){
		//admin true
		this.render('EditPosts', {
		data: function () { return Posts.findOne({_id: this.params._id}); }
	});
	}else {
		//admin false
		Router.go('/');
	}
	
});

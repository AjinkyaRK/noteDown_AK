Template.UserControlPanel.events({
	'submit #changePassword': function () {
		event.preventDefault();

		var oldPw = event.target.oldPwField.value;
		var newPw = event.target.newPwField.value;

		Accounts.changePassword(oldPw, newPw, function (err){
			if (!err) {
				alert('Password has been changed!');
			} 
		});
	}
});

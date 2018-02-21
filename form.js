$(function(){
	$("form[name='regForm']").validate({
		rules: {
			fname:"required",
			email1:{
				required: true,
				email: true
			},
			cemail:{
				required: true,
				equalTo: "#email1"
			},
			gender:"required",
			pnumber:{
				required: true,
				minlength: 10,
				number: true
			}

		},
		messages :{
			fname: "Please enter your first name",
			email1:{
				required: "Please enter your email",
				email: "Please enter a valid email"
			},
			cemail:{
				required: "Please enter your email",
				equalTo: "email should match above email"
			},
			gender: "Please select gender",
			pnumber: {
				required: "Please enter phone number",
				minlength: "Phone number should be of length 10",
				number: "phone number should be numeric"
			}

		}
	}); 

});

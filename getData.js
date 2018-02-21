$(document).ready(function () {
	function getInfo(){
	$.ajax({
		url: "https://reqres.in/api/users/10",
		async: true,
		datatype: 'json',
		beforeSend: function(){
		document.getElementById('msg').innerHTML="Loading....."
		},
		type: "GET",
		cache: false,
		success: function(data){
			var userData = data.data;
			$('#msg').append("<br> user id:" + userData.id + "<br>");
			$('#msg').append("first name:" + userData.first_name + "<br>" );
			$('#msg').append("last name:" + userData.last_name + "<br>");
			$('#img1').attr('src', userData.avatar);

		},
		error: function(er){
			console.log(er);

		}
	});
}
	getInfo();

});

	

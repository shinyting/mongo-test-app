$(function () {
	var path = (window.location.pathname);

	function saveUser () {
		var params = {};
		params.name = $('#name').val();
		params.telephone = $('#telnumber').val();
		params.email = $('#exampleInputEmail').val();
		params.password = $('#exampleInputPassword').val();
		$.post('/save', params, function (res) {
			console.log(res);
		});
	}

	$('#save-user').on('click', saveUser);
});

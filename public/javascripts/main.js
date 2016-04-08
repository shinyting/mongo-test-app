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
			if (res.msg == "success") {
				window.location.href = "/data";
			}
		});
	}

	$('#save-user').on('click', saveUser);
});

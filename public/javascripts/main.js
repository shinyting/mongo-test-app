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

	function updateData () {
		var params = {};
		var dataId = $('#name').attr('data-id')
		params.name = $('#name').val();
		params.telephone = $('#telnumber').val();
		params.email = $('#exampleInputEmail').val();
		$.post('/data/update', {'id': dataId, 'params': params}, function (res) {
			console.log(res);
			// if (res.msg == "success") {
			// 	window.location.href = "/data";
			// }
		});
	}

	$('#save-user').on('click', saveUser);
	$('#update-data').on('click', updateData);
});

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
			if (res.msg == "success") {
				window.location.href = "/data";
			}
		});
	}

	function removeData () {
		var dataId =$('#detail-name').attr('data-id');
		$.post('/data/remove', {'id': dataId}, function (res) {
			if (res.msg == 'success') {
				window.location.href = "/data";
			}
		});
	}

	function saveRegister () {
		var params = {};
		var rname = $('#nickname').val();
		var rphone = $('#tel').val();
		var rpsw = $('#password').val();
		var rcpsw = $('#confirm-password').val();
		if (rpsw !== rcpsw) {
			alert('两次密码不一致');
			return;
		}
		if (!rname || !rphone || !rpsw || !rcpsw) {
			alert('请将信息填写完整');
			return;
		}
		params.name = rname;
		params.phone = rphone;
		params.password = rpsw;
		$.post('/saveregister', params, function (res) {
			if (res.msg == 'success') {
				window.location.href = '/login';
			}
		});
	}

	function saveLogin () {
		var params = {};
		var name = $('#login-name').val();
		var password = $('#password').val();
		if (!name || !password) {
			alert('请将信息填写完整');
		}
		params.name = name;
		params.password = password;
		$.post('/savelogin', params, function (res) {
			console.log(res);
			if (res.msg == 'success') {
				window.location.href = '/';
			}
		})
	}

	function logout () {
		$.get('/logout', function (res) {
			if (res.msg == 'success') {
				window.location.reload();
			}
		});
	}

	$('#save-user').on('click', saveUser);
	$('#update-data').on('click', updateData);
	$('#removedata').on('click', removeData);

	//注册
	$('#register').on('click', saveRegister);
	//登录
	$('#login').on('click', saveLogin);

	$('#logout').on('click', logout);
});

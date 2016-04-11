# mongo-test-app
### 主要为了学习mongoose

安装mongodb，官网下载，然后安装，在安装目录里创建一个存放数据的文件夹   
把安装路径及命令添加到环境变量，计算机属性>高级系统设置>环境变量>把F:\mongodb\bin添加到环境变量后面，这样在任何目录下都可以使用mongo命令  

打开终端，执行mongod --dbpath 存放数据的文件路径  

###express中间件

###mongoose
首先使用命令行打开mongodb，然后在nodejs项目里执行node ./db.js连上数据库，

###静态资源引入的时候路径
路径前要加/,否则在切换到不同路由下的路径时，会出现静态资源路径错乱  
比如：script(type="text/javascript", src="/javascripts/main.js")  
如果javascripts前没有/, 则在路径为/data/data-detail的页面时，该js的加载路径会变成/data/data-detail/javascripts/main.js  
此时就会无法加载这个js文件，所以路径要写对  

###操作mongodb时，增删改查的各个方法中都可以写回调方法  
比如：  collection.remove({'_id': ObjectId(req.body.id)}, function (err, result) {
			if (err) {
				console.log('Error:' + err);
				return;
			}
			else {
				res.send({'msg': 'success'});
			}
		});

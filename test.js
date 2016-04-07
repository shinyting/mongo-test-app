require('./db.js');

var User = require('./models/user')

var user = new User();

user.name = 'zhangtinglll';
user.passwd = '123456';

console.dir(user)

user.save(function(err, u){
  console.dir(err)
  console.dir(u)
});


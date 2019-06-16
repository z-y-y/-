var baseUrl = '/api';
//打包后就放到服务器上了就不存在跨域了所以
// var baseUrl = '';

//登录
var login = baseUrl + '/login'
//查询管理员
var findManage = baseUrl + '/findManage'
//添加管理员
var addManage = baseUrl + '/addManage'
//修改管理员
var updateManage = baseUrl + '/updateManage'
//删除管理员
var delManage = baseUrl + '/delManage'
//查询用户
var findUser = baseUrl + '/findUser'
//添加用户
var addUser = baseUrl + '/addUser'
//修改用户
var updateUser = baseUrl + '/updateUser'
//删除用户
var delUser = baseUrl + '/delUser'
//查询通知
var findNews = baseUrl + '/findNews'
//添加通知
var addNews = baseUrl + '/addNews'
//修改通知
var updateNews = baseUrl + '/updateNews'
//删除通知
var delNews = baseUrl + '/delNews'
//查询设备
var findDevice = baseUrl + '/findDevice'
//添加设备
var addDevice = baseUrl + '/addDevice'
//修改设备
var updateDevice = baseUrl + '/updateDevice'
//删除设备
var delDevice = baseUrl + '/delDevice'
//退出登录
var exit = baseUrl + '/exit'
export default {
	login,
	findManage,
	addManage,
	delManage,
	updateManage,
	findUser,
	addUser,
	updateUser,
	delUser,
	findNews,
	addNews,
	updateNews,
	delNews,
	findDevice,
	addDevice,
	updateDevice,
	delDevice,
	exit
}	
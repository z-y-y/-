//未登录或者链接中断处理
function errorCallback(obj, d) {
	obj.$message({
		message: d.data.info,
		type: "warning"
	});
	obj.$router.replace('/login')
	return;
}
export default {
	errorCallback
}
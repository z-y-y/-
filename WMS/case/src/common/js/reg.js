//验证是否为空
function checkEmpty(obj) {
	var isok = true;
	for (var i in obj) {
		if (obj[i] == '') {
			isok = false;
			break;
		}
	}
	return isok;
}
//验证手机号
function checkTel(tel) {
	var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	return reg.test(tel)
}
//验证邮箱
function checkEmail(email) {
	var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	return reg.test(email)

}
//验证身份证号
function checkShenfenzheng(idx) {
	var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	return reg.test(idx)

}
//验证是否为汉字
function checkHanzi(des) {
	var reg = /^[\u4e00-\u9fa5]{0,}$/;
	return reg.test(des)

}
//密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
function checkPwd(pass) {
	var reg = /^[a-zA-Z]\w{5,17}$/;
	return reg.test(pass)
}
export default {
	checkEmpty,
	checkTel,
	checkEmail,
	checkShenfenzheng,
	checkHanzi,
	checkPwd
}
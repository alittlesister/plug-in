import dayjs from 'dayjs'
import dayjsPluginUTC from 'dayjs-plugin-utc'
dayjs.extend(dayjsPluginUTC)

export default {
	//是否为测试环境
	isDebug: true,
	getVal: () => {
		console.log('default')
	},
	//设置cookie
	setCookie: (key, value) => {
		//当前时间戳
		const curTamp = dayjs().valueOf()
		//转成 Fri Oct 30 2020 07:27:27 GMT+0800
		const exTime = dayjs(curTamp + 24 * 60 * 60 * 1000).utc().$d.$d

		let encode_value = escape(value)
		document.cookie = `${key}=${encode_value};expires=${exTime};path=/`
	},
	//获取cookie
	getCookie: cookie_name => {
		let allcookies = document.cookie
		let cookie_pos = allcookies.indexOf(cookie_name) //索引的长度
		// 如果找到了索引，就代表cookie存在，
		// 反之，就说明不存在。
		if (cookie_pos != -1) {
			// 把cookie_pos放在值的开始，只要给值加1即可。
			cookie_pos += cookie_name.length + 1
			let cookie_end = allcookies.indexOf(';', cookie_pos)

			if (cookie_end == -1) {
				cookie_end = allcookies.length
			}
			let value = unescape(allcookies.substring(cookie_pos, cookie_end))

			// let res_value = decodeURI(value);

			return value
		}
		return ''
	},
	//设置sessionStorage
	setSessionStorage: (key, value) => {
		sessionStorage.setItem(key, escape(value))
	},
	//获取sessionStorage
	getSessionStorage: key => {
		return unescape(sessionStorage.getItem(key))
	},
	//判断字符串是否为空
	isNullOrEmpty: str => {
		if (
			str == null ||
			str == undefined ||
			typeof str == undefined ||
			str == 'null' ||
			str == 'undefined' ||
			str == ''
		) {
			return true
		} else {
			return false
		}
	},
	//是否是数组
	isArray: obj => {
		return typeof obj == 'object' && obj.constructor == Array
	},
	//生成唯一标识
	generateUUID: () => {
		let d = dayjs().valueOf()
		let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
			let r = (d + Math.random() * 16) % 16 | 0
			d = Math.floor(d / 16)
			return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
		})
		return uuid
	},
	//验证手机号码
	VerifyMobile: m => {
		let valid_rule = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/ // 手机号码校验规则

		// if (isNullOrEmpty(m)) {
		//     return false
		// }
		if (!valid_rule.test(m.trim())) {
			return false
		}
		return true
	},

	//检查电话号码
	CheckReg: str => {
		if (str != '') {
			let phone = str
			let p1 = /^\+?(\(\d+\))*(\d*-?\d+)+$/
			let me = false
			if (p1.test(phone)) me = true
			if (!me) {
				str = ''
				return 'ValidTelephone'
			}
		}
		return true
	},
	//验证邮箱
	checkEmailReg: Email => {
		let Emailreg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
		if (!Emailreg.test(Email)) {
			return false
		}
		return true
	},

	//验证是否为数字
	isNumber: value => {
		let patrn = /^(-)?\d+(\.\d+)?$/
		if (patrn.exec(value) == null || value == '') {
			return false
		} else {
			return true
		}
	},
	//检查邮政编码
	IsPostCode: postCode => {
		let valid = /^\d{6}$/
		if (!valid.test(postCode)) {
			return 'ValidPostCode'
		} else return true
	},

	////验证金额
	isDigit: s => {
		let patrn = /^(?:\d+|\d+\.\d{0,2})$/
		if (!patrn.exec(s)) {
			return false
		} else {
			return true
		}
	},
	//验证开始不能为数字
	IsStartNumber: Name => {
		let rename = /^[a-zA-Z\u4e00-\u9fa5][a-zA-Z0-9\u4e00-\u9fa5]*$/
		if (!rename.test(Name)) {
			return false
		} else {
			return true
		}
	},
	//正整数
	checkInt: e => {
		let re = new RegExp('^[0-9]*[1-9][0-9]*$')
		if (!re.test(e)) {
			return false
		}
		return true
	},

	//是否为身份证号

	IsIDCard: idCard => {
		//15位和18位身份证号码的正则表达式
		let regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/

		//如果通过该验证，说明身份证格式正确，但准确性还需计算
		if (regIdCard.test(idCard)) {
			if (idCard.length == 18) {
				let idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2) //将前17位加权因子保存在数组里
				let idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2) //这是除以11后，可能产生的11位余数、验证码，也保存成数组
				let idCardWiSum = 0 //用来保存前17位各自乖以加权因子后的总和
				for (let i = 0; i < 17; i++) {
					idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i]
				}

				let idCardMod = idCardWiSum % 11 //计算出校验码所在数组的位置
				let idCardLast = idCard.substring(17) //得到最后一位身份证号码

				//如果等于2，则说明校验码是10，身份证号码最后一位应该是X
				if (idCardMod == 2) {
					if (idCardLast == 'X' || idCardLast == 'x') {
						return true
					} else {
						return false
					}
				} else {
					//用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
					if (idCardLast == idCardY[idCardMod]) {
						return true
					} else {
						return false
					}
				}
			}
		} else {
			return false
		}
	},
	//验证护照号码
	checkPassport: code => {
		let hz = /^((1[45]\d{7})|(G\d{8})|(P\d{7})|(S\d{7,8}))?$/
		if (!code || !hz.test(code)) {
			return false
		}
		return true
	},
	//验证中文
	IsChinese: str => {
		let lst = /^[\u2E80-\u9fa5a]+$/
		return lst.test(str)
	},
	//验证中文、英文
	isName: Name => {
		let re = /^[\u4e00-\u9fa5a-zA-Z]*$/g
		return re.test(Name)
	},
	toFixed: (data, deci) => {
		// data 数据， deci 几位
		if (typeof data === 'number') {
			const splitArr = String(data).split('.') // 字符串截取
			const integerPart = splitArr[0] // 整数部分
			const deciPart = splitArr[1] // 小数部分
			// 小数位数小于要保留的位数时，直接返回
			if (!deciPart || (deciPart && deciPart.length < deci + 1)) return data
			const frontDec = deciPart.substr(0, deci) // 保留几位
			const isAdd = +deciPart.substr(deci, 1) >= 5 ? 1 / Math.pow(10, deci) : 0
			return parseFloat(frontDec / Math.pow(10, deci)) + isAdd + parseFloat(integerPart)
		}
		return data
	},
	//加
	floatAdd: (arg1, arg2) => {
		let r1, r2, m
		try {
			r1 = arg1.toString().split('.')[1].length
		} catch (e) {
			r1 = 0
		}
		try {
			r2 = arg2.toString().split('.')[1].length
		} catch (e) {
			r2 = 0
		}
		m = Math.pow(10, Math.max(r1, r2))
		return (arg1 * m + arg2 * m) / m
	},
	//减
	floatSub: (arg1, arg2) => {
		let r1, r2, m, n
		try {
			r1 = arg1.toString().split('.')[1].length
		} catch (e) {
			r1 = 0
		}
		try {
			r2 = arg2.toString().split('.')[1].length
		} catch (e) {
			r2 = 0
		}
		m = Math.pow(10, Math.max(r1, r2))
		//动态控制精度长度
		n = r1 >= r2 ? r1 : r2
		return ((arg1 * m - arg2 * m) / m).toFixed(n)
	},
	//乘
	floatMul: (arg1, arg2) => {
		let m = 0,
			s1 = arg1.toString(),
			s2 = arg2.toString()
		try {
			m += s1.split('.')[1].length
		} catch (e) {}
		try {
			m += s2.split('.')[1].length
		} catch (e) {}
		return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m)
	},
	//除
	floatDiv: (arg1, arg2) => {
		let t1 = 0,
			t2 = 0,
			r1,
			r2
		try {
			t1 = arg1.toString().split('.')[1].length
		} catch (e) {}
		try {
			t2 = arg2.toString().split('.')[1].length
		} catch (e) {}

		r1 = Number(arg1.toString().replace('.', ''))
		r2 = Number(arg2.toString().replace('.', ''))
		return (r1 / r2) * Math.pow(10, t2 - t1)
	},
	IsPC: () => {
		var userAgentInfo = navigator.userAgent
		var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
		var flag = true
		for (var v = 0; v < Agents.length; v++) {
			if (userAgentInfo.indexOf(Agents[v]) > 0) {
				flag = false
				break
			}
		}
		return flag
	},
}

window.onload = function() {
	//	主内容
	var datas = [{
		'src': "../images/item01.jpg",
		'title': '云圃',
		'subhead': '•消费互联网',
		'intro': '云圃致力于透过小而美的居家生活用品传递精致淡雅的生活理念，帮助目标用户筛选优化个人品质空间。',
		'site': '浙江省•杭州市',
		'bar': '致力于透过小而美的居家生活用品传递精致淡雅的生活理念'
	}, {
		'src': "../images/item02.jpg",
		'title': '宠点点',
		'subhead': '•消费互联网',
		'intro': '我们和消费者，品牌商还有服务商合作，构成一个闭环。利用移动订阅模式为宠物定制每个月的粮食。',
		'site': '浙江省•杭州市',
		'bar': '其创新的定期订阅模式，让人眼前一亮，对于工作忙碌的消费者而言，定期的为宠物安排饮食，提高生活品质。'
	}, {
		'src': "../images/item03.jpg",
		'title': '轻轻说话-语音任务管理专家',
		'subhead': '•消费互联网',
		'intro': '轻轻说话，是一款SaaS模式的企业移动办公软件，融合了PDCA循环管理体系，帮助中小企业提高任务执行。',
		'site': '上海市•上海市',
		'bar': ''
	}, {
		'src': "../images/item04.jpg",
		'title': '贝贝单词',
		'subhead': '•消费互联网',
		'intro': '小学生英语学科的提分工具，用游戏提高孩子学习兴趣的手机APP',
		'site': '北京市•北京市',
		'bar': '英语学科的提分工具'
	}, {
		'src': "../images/item05.jpg",
		'title': '来脉度良子，过健康生活',
		'subhead': '•社区',
		'intro': '脉度良子是由脉度理疗创始人郭旭与理疗按摩行业巨头良子共同出资的股份制公司，是行业内唯一既能到店又能上门的理疗服务平台。',
		'site': '北京市•北京市',
		'bar': '过健康生活，就选脉度良子'
	}]

	var oDiv = document.createElement('div');
	var oMain = document.getElementsByClassName('main')[0];
	var str = '';
	for(var i = 0; i < datas.length; i++) {
		str += "<a class='box' href=''><img src='" + datas[i].src + "'/><h4>" + datas[i].title + "<span class='smalls'>" + datas[i].subhead + "</span></h4><p class='intro'>" + datas[i].intro + "</p><p class='tips'><i class='glyphicon glyphicon-map-marker'></i>&nbsp;" + datas[i].site + "</p><div class='bar'>" + datas[i].bar + "</div></a>";
	}
	oDiv.innerHTML = str;
	oMain.appendChild(oDiv);

	//	轮播
	var prev = document.getElementsByClassName('prev_star')[0]
	var next = document.getElementsByClassName('next_star')[0]
	var wrap = document.getElementsByClassName('slider_wrap')[0]
	var li = wrap.getElementsByTagName('li')
	var num = 0
	next.onclick = function() {
		num++
		if(num == 1) {
			run(0, 1, 2, 3)
		} else if(num == 2) {
			run(1, 2, 3, 0)
		} else if(num == 3) {
			run(2, 3, 0, 1)
		} else if(num == 4) {
			run(3, 0, 1, 2)
		} else if(num == 5) {
			num = 1
			run(0, 1, 2, 3)
		}

	}
	prev.onclick = function() {
		num--
		if(num == -1) {
			num = 3
			run(2, 3, 0, 1)
		} else if(num == 2) {
			run(1, 2, 3, 0)
		} else if(num == 1) {
			run(0, 1, 2, 3)
		} else if(num == 0) {
			run(3, 0, 1, 2)
		}
	}

	function run(a, b, c, d) {
		move(li[a], {
			"left": 1032
		})
		li[a].style.display = 'none'
		move(li[b], {
			"width": 290,
			"height": 445,
			"left": 0,
			"top": 22
		})
		li[b].style.display = 'block'
		li[b].style.background = 'url(../images/starcard_left.png) 0 0 no-repeat,url(../images/starcard_right.png) right top no-repeat,white'
		move(li[c], {
			"width": 320,
			"height": 489,
			"left": 334,
			"top": 0
		})
		li[c].style.display = 'block'
		li[c].style.background = 'url(../images/starcard_left_active.png) 0 0 no-repeat,url(../images/starcard_right_active.png) right top no-repeat,white'
		move(li[d], {
			"width": 290,
			"height": 445,
			"left": 698,
			"top": 22
		})
		li[d].style.background = 'url(../images/starcard_left.png) 0 0 no-repeat,url(../images/starcard_right.png) right top no-repeat,white'
		li[d].style.display = 'block'
	}

	//	登录
	var login = document.getElementsByClassName('login')[0]
	var mask = document.getElementsByClassName('login_mask')[0]
	var main = document.getElementsByClassName('login_main')[0]
	var tel = document.getElementsByTagName('input')[0]
	var passwords = document.getElementsByTagName('input')[1]
	var remember = document.getElementsByTagName('input')[2]
	var tips = document.getElementsByTagName('small')[0]
	var go = document.getElementsByTagName('button')[0]
	var re = /^1[3|4|5|8][0-9]\d{4,8}$/

	login.onclick = function() {
		mask.style.display = 'block'
		document.documentElement.style.overflow = 'hidden'
	}
	tel.onblur = function() {
		if(re.test(tel.value) != true) {
			tips.innerText = '请输入正确的手机号'
		} else {
			tips.innerText = '输入正确'
			if(localStorage.getItem('usertel') == tel.value) {
				passwords.value = localStorage.getItem('password')
			}

		}
	}
	remember.onclick = function() {
		if(remember.checked) {
			localStorage.setItem('usertel', tel.value);
			localStorage.setItem('password', passwords.value);
		}
	}
	main.onclick = function(ev) {
		var e = ev || window.event;
		//事件冒泡
		e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
	}
	mask.onclick = function() {
		mask.style.display = "none"
		document.documentElement.style.overflow = 'visible'
	}

	//注册
	var register = document.getElementsByClassName('register')[0]
	var masks = document.getElementsByClassName('register_mask')[0]
	var mains = document.getElementsByClassName('register_main')[0]
	var telT = mains.getElementsByTagName('input')[0]
	var passwordsT = mains.getElementsByTagName('input')[1]
	var code = mains.getElementsByTagName('input')[2]
	var tipsT = mains.getElementsByTagName('small')[0]
	var getcode = mains.getElementsByTagName('button')[0]
	var gos = mains.getElementsByTagName('button')[1]
	var reT = /^1[3|4|5|8][0-9]\d{4,8}$/
	var length = 60;
	var times = null;

	register.onclick = function() {
		masks.style.display = 'block'
		document.documentElement.style.overflow = 'hidden'
	}
	telT.onblur = function() {
		if(reT.test(telT.value) != true) {
			tipsT.innerText = '请输入正确的手机号'
		} else {
			if(localStorage.getItem('usertel') == telT.value) {
				tipsT.innerText = '该手机已注册'
			} else {
				tipsT.innerText = '输入正确'
			}
		}
	}

	getcode.onclick = function() {
		if(tipsT.innerText == '输入正确') {
			getcode.setAttribute("disabled", "disabled")
			times = setInterval(function() {
				if(length == 1) {
					clearInterval(times);
					getcode.removeAttribute("disabled");
					getcode.innerText = "获取验证码"
					length = 60;
				} else {
					length--;
					getcode.innerText = length + "s";
				}
			}, 1000)
		}else{
			tipsT.style.color='red'
		}

	}

	mains.onclick = function(ev) {
		var e = ev || window.event;
		//事件冒泡
		e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
	}
	masks.onclick = function() {
		masks.style.display = "none"
		document.documentElement.style.overflow = 'visible'
	}

}
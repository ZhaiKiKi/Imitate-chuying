window.onload=function(){
	var tags=document.getElementsByClassName('tags')[0]
	var oLis=tags.getElementsByTagName('li')
	var Txt=document.getElementsByClassName('content')[0]
	var imgH=[2890,3339,1068]
	for(var i=0;i<oLis.length;i++){
		oLis[i].index=i
		oLis[i].onclick=function(){
			for(var j=0;j<oLis.length;j++){
				oLis[j].style.borderBottom='0'
			}
			this.style.borderBottom='3px solid white'
			Txt.style.height=imgH[this.index]+'px'
			Txt.style.backgroundImage='url(../images/guide'+(this.index+1)+'.jpg)'
		}
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

$(function(){
	//导航切换
	$('.navbar-nav').on('click','li',function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	//记住密码
	$('.agree em').on('click',function(){
		$(this).toggleClass('active');
	})
	
	$('.nav-login-btn').on('click',function(){
		$('.login').slideToggle();
	})
	$('.quick-register').on('click',function(){
		$('.login').hide();
		$('.register').slideDown();
	})
	$('.change-btn').on('click',function(){
		$(this).parent().parent().hide();
		$('.other-style').slideDown();
	})
	
	$('.goto-login').on('click',function(){
		$(this).parent().parent().hide();
		$('.login').slideDown();
	})
	
	//获取验证码
	var num=60;
	var timer=null;
	$('.get-code').on('click',function(){
		$(this).text(num+'s后重试');
		clearInterval(timer);
		timer=setInterval(function(){
			num--;
			$('.get-code').text(num+'s后重试');
			
			if(num==0){
				clearInterval(timer);
				$('.get-code').text('获取验证码');
				num=60;
			}
		},1000)
	})
	
	//导航个人资料和退出登录
	var hideBox='true';
	$('.topNav .user-img').hover(function(){
		if($(this).find('user-img').hide()){
			$('.user-info-box').show();
		}
	},function(){
		setTimeout(function(){
			if(hideBox=='true'){
				$('.user-info-box').hide();
			}
		},200)
	})
	$('.user-info-box').hover(function(){
		hideBox='false';
	},function(){
		$('.user-info-box').hide();
		hideBox='true';
	})
})

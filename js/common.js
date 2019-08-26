$(function(){
	//main slide
	$('.main_slide').slick({
		autoplay: true,
		dots: true,
		speed: 2000,
		pauseOnHover: false,
		pauseOnFocus: false,
		touchThreshold: 15,
		prevArrow: $('.prev'),
		nextArrow: $('.next')
	});

	//main slide pager top
	if($('#container').hasClass('main')){
		var slideTextTop = $('.main_slide .slick-current .text').offset().top;
		$('.main_slide .slick-dots').css({'top':slideTextTop-66});

		$('.main_slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			var nextSlideN = nextSlide+1,
			slideTextTop = $('.main_slide .slide_0'+nextSlideN+' .text').offset().top;
			$('.main_slide .slick-dots').css({'top':slideTextTop-66});
		});

		$(window).resize(function(){
			var slideTextTop = $('.main_slide .slick-current .text').offset().top;
			$('.main_slide .slick-dots').css({'top':slideTextTop-66});
		});
	}

	//today slide
	$('.today_slide').slick({
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					dots: true,
					arrows: false,
					centerMode: true,
					centerPadding: '36px',
					slidesToShow: 1
				}
			}
		]
	});

	//focus slide
	$('.focus_slide').slick({
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	//today slide
	$('.top_slide').slick({
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					dots: true,
					arrows: false,
					centerMode: true,
					centerPadding: '36px',
					slidesToShow: 1
				}
			}
		]
	});

	//normal slide
	$('.normal_slide').slick({
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	//customer slide
	$('.customer_list').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	//history slide
	$('.history_slide').slick({
		dots: false,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.certificate_list').slick({
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					dots: true,
					centerMode: true,
					centerPadding: '44px',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.table_slide').slick({
		adaptiveHeight: true
	});

	$('.img_list').slick({
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 720,
				settings: {
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	//main scroll down
	var mainVisualH = $('.main_visual').height();
	$('.scroll_down').click(function(){
		$('html, body').animate({'scrollTop':mainVisualH},500);
		return false;
	});

	//mobile sub nav IScroll
	if($('.sub_nav').length > 0){
		var myScroll = new IScroll('.sub_nav', { scrollX: true, scrollY: false, mouseWheel: true });
	}

	//faq
	$('.faq_list li>a').click(function(){
		$(this).parent('li').toggleClass('on');
		$(this).next('div').slideToggle();
		return false;
	});

	var href = window.location.href;
	//gnb on
	$('.gnb>li>a').each(function(){
		var link = $(this).attr('href'),
		oneDepth = link.split('/')[1];
		if(href.indexOf(oneDepth) != -1){
			$(this).parent('li').addClass('on');
		}
	});

	//about menu
	$(window).load(function(){
		var target = href.split('#')[1];
		if(target != undefined){
			var targetTop = $('#'+target).offset().top;
			$('body, html').animate({'scrollTop':targetTop},500);
		}
	});
	$('.gnb .company ul a').click(function(){
		var href = $(this).attr('href'),
		target = href.split('#')[1],
		targetTop = $('#'+target).offset().top;
		$('.about .sub_nav li').removeClass('on');
		$(this).parent('li').addClass('on');
		$('body, html').animate({'scrollTop':targetTop},500);
		$('.btn_menu').trigger('click');
	});
	if($('#container').hasClass('about')){
		$('.about .sub_nav a').click(function(){
			var target = $(this).attr('href'),
			targetTop = $(target).offset().top;
			$('.about .sub_nav li').removeClass('on');
			$(this).parent('li').addClass('on');
			$('body, html').animate({'scrollTop':targetTop},500);
		});
	}

	//btn back
	if(!$('#container').hasClass('main') && $('body').hasClass('mob')){
		$('header .btn_back').show();
	}else if($('#container').hasClass('main') || $('body').hasClass('web')){
		$('header .btn_back').hide();
	}

	responsive();
});

function responsive(){
	var res = '',
	body = $('body'),
	header = $('header'),
	btnMenu = $('.btn_menu'),
	oneDepth = $('.gnb>li>a');

	if(btnMenu.is(':visible') == true) res = 'mob';
	else res = 'web';
	body.attr('class',res);
	def(body);

	$(window).resize(function(){
		if(btnMenu.is(':visible') == true) res2 = 'mob';
		else res2 = 'web';
		body.attr('class',res2);
		oneDepth.removeClass('on');
		if(res != res2){
			res = res2;
			def(body);
		}
	});

	function def(body){
		if(body.attr('class') == 'web'){
			$('.gnb').show();
			$('.right_menu').show();
			$('.gnb ul').show();
			open = false;
			header.on({
				mouseenter: function() {
					$(this).addClass('on');
				},
				mouseleave: function() {
					$(this).removeClass('on');
				}
			});
			btnMenu.off('click');
			oneDepth.off('click');
			$('.main .customer_list .slick-slide').off('click');
			//sub mobile header
			if(!$('#container').hasClass('main')){
				$('header h1').removeClass('one_depth');
			}
		}else if(body.attr('class') == 'mob'){
			header.off('mouseenter mouseleave');
			$('.gnb').hide();
			$('.right_menu').hide();
			$('.gnb ul').hide();
			var open = false;
			btnMenu.on('click',function(){
				if(open == false){
					$('.gnb').slideDown();
					$('.right_menu').slideDown();
					header.addClass('on');
					open = true;
				}else if(open == true){
					$('.right_menu').slideUp();
					$('.gnb').slideUp(function(){
						header.removeClass('on');
					});
					open = false;
				}
				return false;
			});
			oneDepth.on('click',function(){
				$(this).toggleClass('on');
				$(this).next('ul').stop().slideToggle();
				return false;
			});
			$('.main .customer_list .slick-slide').on('click',function(){
				$(this).toggleClass('on');
			});

			//sub mobile header
			if(!$('#container').hasClass('main')){
				var menu = $('.gnb>li.on>a').text();
				$('header h1').addClass('one_depth');
				$('header h1 span').html(menu);
			}
		}
	}
}

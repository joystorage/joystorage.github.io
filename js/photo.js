$(function(){
	 if (!navigator.userAgent.match(/mobile/i)) {//如果是桌面端
		$("#photo_div").html('');
		var pages = '<br/><br/><img class="scrollLoading"  data-url="/photos/timg.jpg" '+
				'src="http://onx1obrfu.bkt.clouddn.com/joystorage/photos/毕业3 .jpg"/>'+
				'<br/><br/>';
		$("#photo_div").append(pages);
		pages = '<section class="archives album" id="myphoto"></section>';
		$("#photo_div").append(pages);

		$("#myphoto").html('');

		$.getJSON("/json/photos.json",function(data) {
		var rootpath=data.root;
		var pages = '';
		$.each(data.contents, function(i, item) {
			var title = item.title;

			pages = '<ul class="img-box-ul">';
			pages += '<h1>'+title+'</h1><br/><br/><p></p>';

			var secpath = rootpath + item.pre;
			$.each(item.data,function(j,item2){
		    	var con = secpath+item2.url;
		    	pages += '<figure class="thumb" itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject">'+
		    	'<a class="img-wrap" href="'+con+'" itemprop="contentUrl" data-size="200x200" '+
		    	'data-type="image" data-target="'+con+'" target="_blank">'+
		    	'<img alter="IMG_1818" class="reward-img" data-type="image" data-src="'+data.root+'timg.jpg" '+
		    	'src="'+data.root+'timg.jpg" itemprop="thumbnail" data-lzled="true"></a>'+
		    	'<figcaption style="display:none" itemprop="caption description">与你跋山涉水</figcaption>'+
		    	'</figure>'
		    	//pages += '<li class="photo_li">'+
		    	//		'<div class="img-box"><a href="'+con+'">'+
		    	//		'<img class="img-img1"  data-url="/photos/timg.jpg" src="'+con+'" /></div></li></a>';
			});

			pages += '</ul><br/>';
			$("#myphoto").append(pages);
		});

		var pin_height = $(".photo_li").width(); //   获取div的宽度
		$(".photo_li").css('height', pin_height);  //  设置div 
		$(".img-box").css('height', pin_height);  //  设置div  高度
		$(".img-img1").css('width', pin_height);  //  设置div  高度
		$(".img-img1").css('height', pin_height);  //  设置div 
		});
 	}else{
 		$("#photo_div").html('');
		var pages = '<br/><br/><img class="scrollLoading"  data-url="/photos/timg.jpg" '+
				'src="http://onx1obrfu.bkt.clouddn.com/joystorage/photos/毕业3 .jpg"/>'+
				'<br/><br/>';
		$("#photo_div").append(pages);
		pages = '<section class="archives album" id="myphoto"></section>';
		$("#photo_div").append(pages);

		$("#myphoto").html('');

		$.getJSON("/json/photos.json",function(data) {
		var rootpath=data.root;
		var pages = '';
		$.each(data.contents, function(i, item) {
			var title = item.title;

			pages = '<ul class="photo_ul">';
			pages += '<h1>'+title+'</h1><br/><br/><p></p>';

			var secpath = rootpath + item.pre;
			$.each(item.data,function(j,item2){
		    	var con = secpath+item2.url;
		    	pages += '<li class="photo_li_mob">'+
		    			'<div class="img-box"><a href="'+con+'">'+
		    			'<img class="img-img2 scrollLoading"  data-url="/photos/timg.jpg" src="'+con+'" /></div></li></a>';
			});

			pages += '</ul><br/>';
			$("#myphoto").append(pages);
		});

		var pin_height = $(".photo_li_mob").width(); //   获取div的宽度
		$(".photo_li_mob").css('height', pin_height);  //  设置div 
		$(".img-box").css('height', pin_height);  //  设置div  高度
		$(".img-img2").css('width', pin_height);  //  设置div  高度
		$(".img-img2").css('height', pin_height);  //  设置div 

		//实现图片慢慢浮现出来的效果
        $("img").load(function () {
            //图片默认隐藏  
            $(this).hide();
            //使用fadeIn特效  
            $(this).fadeIn("5000");
        });
        // 异步加载图片，实现逐屏加载图片
        $(".scrollLoading").scrollLoading(); 

		});
 	}
	

});

(function($) {
	// alert($.fn.scrollLoading);
	$.fn.scrollLoading = function(options) {
		var defaults = {
			attr: "data-url"
		};
		var params = $.extend({}, defaults, options || {});
		params.cache = [];
		$(this).each(function() {
			var node = this.nodeName.toLowerCase(),
				url = $(this).attr(params["attr"]);
			if(!url) {
				return;
			}
			var data = {
				obj: $(this),
				tag: node,
				url: url
			};
			params.cache.push(data);
		});

		var loading = function() {
			var st = $(window).scrollTop(),
				sth = st + $(window).height();
			$.each(params.cache, function(i, data) {
				var o = data.obj,
					tag = data.tag,
					url = data.url;
				if(o) {
					post = o.position().top;
					posb = post + o.height();
					if((post > st && post < sth) || (posb > st && posb < sth)) {
						if(tag === "img") {
							o.attr("src", url);
						} else {
							o.load(url);
						}
						data.obj = null;
					}
				}
			});
			return false;
		};

		loading();
		$(window).bind("scroll", loading);
	};
})(jQuery);
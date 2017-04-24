$(function(){
	 if (!navigator.userAgent.match(/mobile/i)||(navigator.userAgent.match(/mobile/i)&&(screen.width >= 500))) {//如果是桌面端
		$("#photo_div").html('');
		var pages = '<br/><br/><img class="scrollLoading"  data-url="/photos/timg.jpg" '+
				'src="http://onx1obrfu.bkt.clouddn.com/joystorage/photos/毕业3.jpg"/>'+
				'<br/><h5>提示：点击图片查看原图</h5><br/>';
		$("#photo_div").append(pages);
		pages = '<section class="archives album" id="myphoto"></section>';
		$("#photo_div").append(pages);

		$("#myphoto").html('');

		$.getJSON("/json/photos.json",function(data) {
		var rootpath=data.root;
		var midpath=data.mid;
		var pages = '';
		$.each(data.contents, function(i, item) {
			var title = item.title;

			pages = '<ul class="img-box-ul">';
			pages += '<h1>'+title+'</h1><br/><br/><p></p>';

			var secpath = rootpath + item.pre;
			var secmidpath = midpath + item.pre;
			$.each(item.data,function(j,item2){
		    	var con = secpath+item2.url;
		    	var midcon = secmidpath + item2.url;
		    	
				pages += '<li class="photo_li">'+
		    			'<a href="javascript:void(0);return false" class="photo-a" '+
		    			'data-toggle="modal" data-target="#myModal" src-data="'+con+'">'+
		    			'<div class="img-box" style="background:url('+midcon+');background-repeat:no-repeat;">'+
		    			'</div></a></li>';
			});

			pages += '</ul><br/>';
			$("#myphoto").append(pages);

		});

		$(".photo-a").click(function(e){
				e.preventDefault();
				$("#model-img").attr("src",$(this).attr("src-data"));
		});

		var pin_height = $(".photo_li").width(); //   获取div的宽度
		$(".photo_li").css('height', pin_height);  //  设置div 
		$(".img-box").css('height', pin_height);  //  设置div  高度
		$(".img-box").css('height', '100%');  //  设置div  高度
		$(".img-box").css('background-size', 'cover');  //  设置div  高度

		});

 	}else{
 		$("#photo_div").html('');
		var pages = '<br/><br/><img class="scrollLoading"  data-url="/photos/timg.jpg" '+
				'src="http://onx1obrfu.bkt.clouddn.com/joystorage/photos/毕业3.jpg"/>'+
				'<br/><h5>提示：点击图片查看原图</h5><br/>';
		$("#photo_div").append(pages);
		pages = '<section class="archives album" id="myphoto"></section>';
		$("#photo_div").append(pages);

		$("#myphoto").html('');

		$.getJSON("/json/photos.json",function(data) {

		var rootpath=data.root;
		var minpath=data.min;

		var pages = '';
		$.each(data.contents, function(i, item) {
			var title = item.title;

			pages = '<ul class="photo_ul">';
			pages += '<h1>'+title+'</h1><br/><br/><p></p>';

			var secpath = rootpath + item.pre;
			var secminpath = minpath + item.pre;

			$.each(item.data,function(j,item2){

		    	var con = secpath+item2.url;
		    	var mincon = secminpath + item2.url;

		    	/*pages += '<li class="photo_li_mob">'+
		    			'<div class="img-box"><a href="javascript:void(0);return false" class="photo-a" data-toggle="modal" data-target="#myModal" src-data="'+con+'">'+
		    			'<img class="img-img2 scrollLoading" onclick="javascript:void(0);return false" src="'+mincon+'" /></div></li></a>';*/
			pages += '<li class="photo_li_mob">'+
		    			'<a href="javascript:void(0);return false" class="photo-a" '+
		    			'data-toggle="modal" data-target="#myModal" src-data="'+con+'">'+
		    			'<div class="img-box" style="background:url('+mincon+');background-repeat:no-repeat;">'+
		    			'</div></a></li>';
			});

			pages += '</ul><br/>';
			$("#myphoto").append(pages);
		});

		$(".photo-a").click(function(e){
				e.preventDefault();
				$("#model-img").attr("src",$(this).attr("src-data"));
		});

		var pin_height = $(".photo_li_mob").width(); //   获取div的宽度
		$(".photo_li_mob").css('height', pin_height);  //  设置div 
		$(".img-box").css('height', pin_height);  //  设置div  高度
		$(".img-box").css('height', '100%');  //  设置div  高度
		$(".img-box").css('background-size', 'cover');  //  设置div  高度
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
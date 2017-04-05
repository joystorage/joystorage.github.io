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

			pages = '<ul class="photo_ul">';
			pages += '<h1>'+title+'</h1><br/><br/><p></p>';

			var secpath = rootpath + item.pre;
			$.each(item.data,function(j,item2){
		    	var con = secpath+item2.url;
		    	pages += '<li class="photo_li">'+
		    			'<div class="img-box"><a href="'+con+'">'+
		    			'<img class="img-img1"  data-url="/photos/timg.jpg" src="'+con+'" /></div></li></a>';
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
		    			'<img class="img-img2"  data-url="/photos/timg.jpg" src="'+con+'" /></div></li></a>';
			});

			pages += '</ul><br/>';
			$("#myphoto").append(pages);
		});

		var pin_height = $(".photo_li").width(); //   获取div的宽度
		$(".photo_li").css('height', pin_height);  //  设置div 
		$(".img-box").css('height', pin_height);  //  设置div  高度
		$(".img-img2").css('width', pin_height);  //  设置div  高度
		$(".img-img2").css('height', pin_height);  //  设置div 
		});
 	}
	

});
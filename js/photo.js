$(function(){

    var pages='<ul class="photo_ul">'+
    		'<h1>黑龙江·哈尔滨</h1><br/><br/><p></p>'+
			'<li class="photo_li"><div class="img-box"><a class="img-bg" rel="example_group" href="http://onx1obrfu.bkt.clouddn.com/joystorage/photos/哈尔滨1.jpg"></a><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg" src="http://onx1obrfu.bkt.clouddn.com/joystorage/photos/哈尔滨1.jpg" /></div></li>'+
        	'<li class="photo_li"><div class="img-box"><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg" src="http://onx1obrfu.bkt.clouddn.com/joystorage/photos/哈尔滨2.jpg" /></div></li>'+
            '<li class="photo_li"><div class="img-box"><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg" src="http://onx1obrfu.bkt.clouddn.com/joystorage/photos/哈尔滨3.jpg" /></div></li>'+
            '<li class="photo_li"><div class="img-box"><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg" src="http://onx1obrfu.bkt.clouddn.com/joystorage/photos/哈尔滨4.jpg" /></div></li>'+
            '</ul><br/>';
    $("#myphoto").html(pages);

     var pages='<ul class="photo_ul">'+
    		'<h1>湖北·宜昌</h1><br/><br/><p></p>'+
			'<li class="photo_li"><div class="img-box"><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg"/></div></li>'+
        	'<li class="photo_li"><div class="img-box"><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg"/></div></li>'+
            '<li class="photo_li"><div class="img-box"><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg"/></div></li>'+
            '<li class="photo_li"><div class="img-box"><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg"/></div></li>'+
            '</ul><br/>';
    $("#myphoto").append(pages);

     var pages='<ul class="photo_ul">'+
    		'<h1>北京</h1><br/><br/><p></p>'+
			'<li class="photo_li"><div class="img-box"><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg"/></div></li>'+
        	'<li class="photo_li"><div class="img-box"><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg"/></div></li>'+
            '<li class="photo_li"><div class="img-box"><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg"/></div></li>'+
            '<li class="photo_li"><div class="img-box"><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg"/></div></li>'+
            '</ul><br/>';
    $("#myphoto").append(pages);

     var pages='<ul class="photo_ul">'+
    		'<h1>广东·深圳</h1><br/><br/><p></p>'+
			'<li class="photo_li"><div class="img-box"><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg"/></div></li>'+
        	'<li class="photo_li"><div class="img-box"><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg"/></div></li>'+
            '<li class="photo_li"><div class="img-box"><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg"/></div></li>'+
            '<li class="photo_li"><div class="img-box"><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg" src=" /></div></li>'+
            '</ul><br/><br/><br/>';
    $("#myphoto").append(pages);

     var pages='<ul class="photo_ul">'+
    		'<h1>吉林·长春</h1><br/><br/><p></p>'+
			'<li class="photo_li"><div class="img-box"><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg"/></div></li>'+
        	'<li class="photo_li"><div class="img-box"><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg"/></div></li>'+
        	'<li class="photo_li"><div class="img-box"><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg"/></div></li>'+
            '</ul><br/><br/><br/>';
    $("#myphoto").append(pages);

        var pages='<ul class="photo_ul">'+
    		'<h1>厦门</h1><br/><br/><p></p>'+
			'<li class="photo_li"><div class="img-box"><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg"/></div></li>'+
        	'<li class="photo_li"><div class="img-box"><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg"/></div></li>'+
        	'<li class="photo_li"><div class="img-box"><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg"/></div></li>'+
        	'<li class="photo_li"><div class="img-box"><img class="img-img1 scrollLoading"  data-url="/photos/timg.jpg"/></div></li>'+
            '</ul><br/><br/><br/>';
    $("#myphoto").append(pages);

    var pin_height = $(".photo_li").width(); //   获取div的宽度
    $(".photo_li").css('height', pin_height);  //  设置div 
    $(".img-box").css('height', pin_height);  //  设置div  高度
    $(".img-img1").css('width', pin_height);  //  设置div  高度
    $(".img-img1").css('height', pin_height);  //  设置div 

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
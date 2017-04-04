$(function(){

    var pages='<ul class="photo_ul">'+
    		'<h1>黑龙江·哈尔滨</h1><br/><br/><p></p>'+
			'<li class="photo_li"><div class="img-box"><img class="img-img1" src="/photos/哈尔滨1.jpg" /></div></li>'+
        	'<li class="photo_li"><div class="img-box"><img class="img-img1" src="/photos/哈尔滨2.jpg" /></div></li>'+
            '<li class="photo_li"><div class="img-box"><img class="img-img1" src="/photos/哈尔滨3.jpg" /></div></li>'+
            '<li class="photo_li"><div class="img-box"><img class="img-img1" src="/photos/哈尔滨4.jpg" /></div></li>'+
            '</ul><br/>';
    $("#myphoto").html(pages);

     var pages='<ul class="photo_ul">'+
    		'<h1>湖北·宜昌</h1><br/><br/><p></p>'+
			'<li class="photo_li"><div class="img-box"><img class="img-img1" src="/photos/1.jpg" /></div></li>'+
        	'<li class="photo_li"><div class="img-box"><img class="img-img1" src="/photos/2.jpg" /></div></li>'+
            '<li class="photo_li"><div class="img-box"><img class="img-img1" src="/photos/3.jpg" /></div></li>'+
            '<li class="photo_li"><div class="img-box"><img class="img-img1" src="/photos/4.jpg" /></div></li>'+
            '</ul><br/>';
    $("#myphoto").append(pages);

     var pages='<ul class="photo_ul">'+
    		'<h1>北京</h1><br/><br/><p></p>'+
			'<li class="photo_li"><div class="img-box"><img class="img-img1" src="/photos/北京1.jpg" /></div></li>'+
        	'<li class="photo_li"><div class="img-box"><img class="img-img1" src="/photos/北京2.jpg" /></div></li>'+
            '<li class="photo_li"><div class="img-box"><img class="img-img1" src="/photos/北京3.jpg" /></div></li>'+
            '<li class="photo_li"><div class="img-box"><img class="img-img1" src="/photos/北京4.jpg" /></div></li>'+
            '</ul><br/>';
    $("#myphoto").append(pages);

     var pages='<ul class="photo_ul">'+
    		'<h1>广东·深圳</h1><br/><br/><p></p>'+
			'<li class="photo_li"><div class="img-box"><img class="img-img1" src="/photos/深圳1.jpg" /></div></li>'+
        	'<li class="photo_li"><div class="img-box"><img class="img-img1" src="/photos/深圳2.jpg" /></div></li>'+
            '<li class="photo_li"><div class="img-box"><img class="img-img1" src="/photos/深圳3.jpg" /></div></li>'+
            '<li class="photo_li"><div class="img-box"><img class="img-img1" src="/photos/深圳4.jpg" /></div></li>'+
            '</ul><br/><br/><br/>';
    $("#myphoto").append(pages);

     var pages='<ul class="photo_ul">'+
    		'<h1>吉林·长春</h1><br/><br/><p></p>'+
			'<li class="photo_li"><div class="img-box"><img class="img-img1" src="/photos/长春1.jpg" /></div></li>'+
        	'<li class="photo_li"><div class="img-box"><img class="img-img1" src="/photos/长春2.jpg" /></div></li>'+
        	'<li class="photo_li"><div class="img-box"><img class="img-img1" src="/photos/长春3.jpg" /></div></li>'+
            '</ul><br/><br/><br/>';
    $("#myphoto").append(pages);

    var pin_height = $(".photo_li").width(); //   获取div的宽度
    $(".photo_li").css('height', pin_height);  //  设置div 
    $(".img-box").css('height', pin_height);  //  设置div  高度
    $(".img-img1").css('width', pin_height);  //  设置div  高度
    $(".img-img1").css('height', pin_height);  //  设置div 
});
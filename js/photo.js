$(function(){

    var pages='<ul class="photo_ul">'+
    		'<h1>黑龙江·哈尔滨</h1><br/><br/><p></p>'+
			'<li class="photo_li"><div class="img-box"><a class="img-bg" rel="example_group" href="/photos/哈尔滨1.jpg"><img class="img-img1" src="/photos/哈尔滨1.jpg" /></a></div></li>'+
        	'<li class="photo_li"><div class="img-box"><a class="img-bg" rel="example_group" href="/photos/哈尔滨2.jpg"><img class="img-img1" src="/photos/哈尔滨2.jpg" /></a></div></li>'+
            '<li class="photo_li"><div class="img-box"><a class="img-bg" rel="example_group" href="/photos/哈尔滨3.jpg"><img class="img-img1" src="/photos/哈尔滨3.jpg" /></a></div></li>'+
            '<li class="photo_li"><div class="img-box"><a class="img-bg" rel="example_group" href="/photos/哈尔滨4.jpg"><img class="img-img1" src="/photos/哈尔滨4.jpg" /></a></div></li>'+
            '</ul><br/><br/><br/>';
    $("#myphoto").html(pages);

     var pages='<ul class="photo_ul">'+
    		'<h1>湖北·宜昌</h1><br/><br/><p></p>'+
			'<li class="photo_li"><div class="img-box"><a class="img-bg" rel="example_group" href="/photos/1.jpg"><img class="img-img1" src="/photos/1.jpg" /></a></div></li>'+
        	'<li class="photo_li"><div class="img-box"><a class="img-bg" rel="example_group" href="/photos/2.jpg"><img class="img-img1" src="/photos/2.jpg" /></a></div></li>'+
            '<li class="photo_li"><div class="img-box"><a class="img-bg" rel="example_group" href="/photos/3.jpg"><img class="img-img1" src="/photos/3.jpg" /></a></div></li>'+
            '<li class="photo_li"><div class="img-box"><a class="img-bg" rel="example_group" href="/photos/4.jpg"><img class="img-img1" src="/photos/4.jpg" /></a></div></li>'+
            '</ul><br/><br/><br/>';
    $("#myphoto").append(pages);

     var pages='<ul class="photo_ul">'+
    		'<h1>北京</h1><br/><br/><p></p>'+
			'<li class="photo_li"><div class="img-box"><a class="img-bg" rel="example_group" href="/photos/北京1.jpg"><img class="img-img1" src="/photos/北京1.jpg" /></a></div></li>'+
        	'<li class="photo_li"><div class="img-box"><a class="img-bg" rel="example_group" href="/photos/北京2.jpg"><img class="img-img1" src="/photos/北京2.jpg" /></a></div></li>'+
            '<li class="photo_li"><div class="img-box"><a class="img-bg" rel="example_group" href="/photos/北京3.jpg"><img class="img-img1" src="/photos/北京3.jpg" /></a></div></li>'+
            '<li class="photo_li"><div class="img-box"><a class="img-bg" rel="example_group" href="/photos/北京4.jpg"><img class="img-img1" src="/photos/北京4.jpg" /></a></div></li>'+
            '</ul><br/><br/><br/>';
    $("#myphoto").append(pages);

     var pages='<ul class="photo_ul">'+
    		'<h1>广东·深圳</h1><br/><br/><p></p>'+
			'<li class="photo_li"><div class="img-box"><a class="img-bg" rel="example_group" href="/photos/深圳1.jpg"><img class="img-img1" src="/photos/深圳1.jpg" /></a></div></li>'+
        	'<li class="photo_li"><div class="img-box"><a class="img-bg" rel="example_group" href="/photos/深圳2.jpg"><img class="img-img1" src="/photos/深圳2.jpg" /></a></div></li>'+
            '<li class="photo_li"><div class="img-box"><a class="img-bg" rel="example_group" href="/photos/深圳3.jpg"><img class="img-img1" src="/photos/深圳3.jpg" /></a></div></li>'+
            '<li class="photo_li"><div class="img-box"><a class="img-bg" rel="example_group" href="/photos/深圳4.jpg"><img class="img-img1" src="/photos/深圳4.jpg" /></a></div></li>'+
            '</ul><br/><br/><br/>';
    $("#myphoto").append(pages);

     var pages='<ul class="photo_ul">'+
    		'<h1>吉林·长春</h1><br/><br/><p></p>'+
			'<li class="photo_li"><div class="img-box"><a class="img-bg" rel="example_group" href="/photos/长春1.jpg"><img class="img-img1" src="/photos/长春1.jpg" /></a></div></li>'+
        	'<li class="photo_li"><div class="img-box"><a class="img-bg" rel="example_group" href="/photos/长春2.jpg"><img class="img-img1" src="/photos/长春2.jpg" /></a></div></li>'+
            '</ul><br/><br/><br/>';
    $("#myphoto").append(pages);

    var pin_height = $(".photo_li").width(); //   获取div的宽度
    $(".photo_li").css('height', pin_height);  //  设置div 
    $(".img-box").css('height', pin_height);  //  设置div  高度
    $(".img-img1").css('width', pin_height);  //  设置div  高度
    $(".img-img1").css('height', pin_height);  //  设置div 
});
$(function(){

    var pages='<h1>宜昌·三峡</h1><br/><br/><p></p>'+
			'<div class="img-box"><a class="img-bg" rel="example_group" href="https://github.com/joystorage/joystorage.github.io.git/photos/1.jpg"></a><img class="img-img1" src="/photos/1.jpg" /></div>'+
        	'<div class="img-box"><a class="img-bg" rel="example_group" href="https://github.com/joystorage/joystorage.github.io.git/photos/2.JPG"></a><img class="img-img1" src="/photos/2.jpg" /></div>'+
            '<div class="img-box"><a class="img-bg" rel="example_group" href="https://github.com/joystorage/joystorage.github.io.git/photos/3.jpg"></a><img class="img-img1" src="/photos/3.jpg" /></div>'+
            '<div class="img-box"><a class="img-bg" rel="example_group" href="https://github.com/joystorage/joystorage.github.io.git/photos/4.jpg"></a><img class="img-img1" src="/photos/4.jpg" /></div>'+
            '<div class="img-box"><a class="img-bg" rel="example_group" href="https://github.com/joystorage/joystorage.github.io.git/photos/4.jpg"></a><img class="img-img1" src="/photos/4.jpg" /></div>'+
            '<div class="img-box"><a class="img-bg" rel="example_group" href="https://github.com/joystorage/joystorage.github.io.git/photos/4.jpg"></a><img class="img-img1" src="/photos/4.jpg" /></div>'+
            '<div class="img-box"><a class="img-bg" rel="example_group" href="https://github.com/joystorage/joystorage.github.io.git/photos/4.jpg"></a><img class="img-img1" src="/photos/4.jpg" /></div>'+
            '<br/><br/><br/><hr sytle="width:20px;color:gray"/>';
    $("#myimg_1").html(pages);
    


	var pin_height = $(".img-box").width(); //   获取div的宽度
    $(".img-box").css('height', pin_height);  //  设置div  高度
    $(".img-img1").css('width', pin_height);  //  设置div  高度
    $(".img-img1").css('height', pin_height);  //  设置div  高度

});
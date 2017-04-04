$(function(){

    var pages='<ul style="list-style:none">'+
    		'<h1>宜昌·三峡</h1><br/><br/><p></p>'+
			'<li style="display:inline-block;list-style:none"><div class="img-box"><a class="img-bg" rel="example_group" href="https://github.com/joystorage/joystorage.github.io/blob/master/photos/1.jpg"></a><img class="img-img1" src="/photos/1.jpg" /></div></li>'+
        	'<li style="display:inline-block;list-style:none"><div class="img-box"><a class="img-bg" rel="example_group" href="https://github.com/joystorage/joystorage.github.io.git/photos/2.JPG"></a><img class="img-img1" src="/photos/2.jpg" /></div></li>'+
            '<li style="display:inline-block;list-style:none"><div class="img-box"><a class="img-bg" rel="example_group" href="https://github.com/joystorage/joystorage.github.io.git/photos/3.jpg"></a><img class="img-img1" src="/photos/3.jpg" /></div></li>'+
            '<li style="display:inline-block;list-style:none"><div class="img-box"><a class="img-bg" rel="example_group" href="https://github.com/joystorage/joystorage.github.io.git/photos/4.jpg"></a><img class="img-img1" src="/photos/4.jpg" /></div></li>'+
            '<li style="display:inline-block;list-style:none"><div class="img-box"><a class="img-bg" rel="example_group" href="https://github.com/joystorage/joystorage.github.io.git/photos/4.jpg"></a><img class="img-img1" src="/photos/4.jpg" /></div></li>'+
            '<li style="display:inline-block;list-style:none"><div class="img-box"><a class="img-bg" rel="example_group" href="https://github.com/joystorage/joystorage.github.io.git/photos/4.jpg"></a><img class="img-img1" src="/photos/4.jpg" /></div></li>'+
            '<li style="display:inline-block;list-style:none"><div class="img-box"><a class="img-bg" rel="example_group" href="https://github.com/joystorage/joystorage.github.io.git/photos/4.jpg"></a><img class="img-img1" src="/photos/4.jpg" /></div></li>'+
            '<li style="display:inline-block;list-style:none"><div class="img-box"><a class="img-bg" rel="example_group" href="https://github.com/joystorage/joystorage.github.io.git/photos/4.jpg"></a><img class="img-img1" src="/photos/4.jpg" /></div></li>'+
            '</ul>';
    $("#myphoto").html(pages);

    var pin_height = $(".img-box").width(); //   获取div的宽度
    $(".img-box").css('height', pin_height);  //  设置div  高度
    $(".img-img1").css('width', pin_height);  //  设置div  高度
    $(".img-img1").css('height', pin_height);  //  设置div 
});
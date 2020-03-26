
/********************************************
    Theme Name : Elite Corp
    Theme Coder : Ahmed Ashraf Mohammed
*********************************************/
$(function() {
    //window screen loading
    $(window).on('load', function(){
        $(".loading .overlay").fadeOut(2000);
        $(".loading .overlay .sk-chase").fadeOut(2000,function(){$("body").css("overflow","auto");})
    });


    /**Slider Photos Adjusting */
    var windowHeight = $(window).height(),
        upperBarHeight = $('.upper-bar').innerHeight(),
        navHeight =$('.navbar').innerHeight();

     /* Adjusting Slider Height*/   
    $('.slider, .carousel-item').height(windowHeight - (upperBarHeight + navHeight));


    /**Featured works shuffeling */
    $('.feat-works ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') === 'all'){
            $('.shuffle-images .col-md-6').css('opacity',1)
        }else{
            $('.shuffle-images .col-md-6').css('opacity','.08');
            $($(this).data('class')).parent().css('opacity',1);
        }
    });
});



/********************************************
    Theme Name : Elite Corp
    Theme Coder : Ahmed Ashraf Mohammed
*********************************************/
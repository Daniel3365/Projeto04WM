$(function(){

    $('.menu-mobile').click(function(){
        $('.menu-mobile').find('ul').slideToggle();
    }); 

    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offsetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop':offsetTop});

        return false;
    });

});
$(document).ready(function() {    

    $('.ancla').click(function(){
        var link = $(this);
        var anchor  = link.attr('href');
        $('html, body').stop().animate({
            scrollTop: jQuery(anchor).offset().top
        }, 2000);
        return false;
    });
});

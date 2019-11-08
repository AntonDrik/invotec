$(document).ready(function () {

    const slider = $(".slider");

    $(".action a:eq(" + 0  + ")"  ).addClass("active");

    slider.slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        slidesToShow: 1
    });

     $('a[data-slide]').click(function(e) {
       e.preventDefault();
       var slideno = $(this).data('slide');
       $('.slider').slick('slickGoTo', slideno - 1);
     });

    slider.on("afterChange", function (){
       var dataId = $('.slick-current').attr("data-slick-index");
       $(".action a").removeClass("active");
       $(".action a:eq(" + dataId  + ")"  ).addClass("active");
     });

});

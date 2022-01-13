console.log("VerissimoDev")

setTimeout(function(){
    $('.aha-banner').slick({
        dots: true,
        infinite: true,
        arrow: true
    });
    $(".aha-three-shelf").slick({
        arrow: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
    });
},500)
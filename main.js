console.log("VerissimoDev")

setTimeout(function(){
    $('.aha-banner').slick({
        dots: true,
        infinite: true,
        arrow: true
    });
    $(".aha-first-regua").slick({
        arrow: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
              }
            },
        ]
    });
    $(".aha-three-shelf").slick({
        arrow: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
              }
            },
        ]
    });
    $(".aha-depositions-cards").slick({
        arrow: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
              }
            },
        ]
    });

    // MENU MOBILE

    const btnMobile = $(".aha-btn-mobile");

    function toggleMenu() {
        const nav = $(".aha-header-links")
        nav.toggleClass("active")
    }

    $("button.aha-mobile-close").on("click", function(){
        $(".aha-header-links.active").removeClass("active")
    })
    
    btnMobile.on("click", toggleMenu)

},500)

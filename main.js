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

    // PRODUTOS

    var productTitle = ''
    var productValue = ''
    var productImage = ''

    $(".aha-product-buyButton[data-id='1']").on("click", function(){
      console.log("clicou")
      productTitle = $("span.aha-name[data-title='Anel banhado a ouro']").attr("data-title")
      productValue = $("span.aha-price-offer[data-value='188']").attr("data-value")
      productImage = $(".aha-product-image img[src='./midia/product-image-1.png']").attr("src")

      templateRender()
    })
    $(".aha-product-buyButton[data-id='2']").on("click", function(){
      console.log("clicou")
      productTitle = $("span.aha-name[data-title='Brinco banhado a ouro']").attr("data-title")
      productValue = $("span.aha-price-offer[data-value='160']").attr("data-value")
      productImage = $(".aha-product-image img[src='./midia/product-image-2.png']").attr("src")

      templateRender()
    })
    $(".aha-product-buyButton[data-id='3']").on("click", function(){
      console.log("clicou")
      productTitle = $("span.aha-name[data-title='Brinco Swarovski']").attr("data-title")
      productValue = $("span.aha-price-offer[data-value='100']").attr("data-value")
      productImage = $(".aha-product-image img[src='./midia/product-image-3.png']").attr("src")

      templateRender()
    })
    $(".aha-product-buyButton[data-id='4']").on("click", function(){
      console.log("clicou")
      productTitle = $("span.aha-name[data-title='Corrente com Pingente']").attr("data-title")
      productValue = $("span.aha-price-offer[data-value='150']").attr("data-value")
      productImage = $(".aha-product-image img[src='./midia/product-image-4.png']").attr("src")

      templateRender()
    })
    $(".aha-product-buyButton[data-id='5']").on("click", function(){
      console.log("clicou")
      productTitle = $("span.aha-name[data-title='Brinco Diamantado']").attr("data-title")
      productValue = $("span.aha-price-offer[data-value='200']").attr("data-value")
      productImage = $(".aha-product-image img[src='./midia/product-image-5.png']").attr("src")

      templateRender()
    })

    function templateRender(){
      var template = `
                      <div class="aha-minicart-product">
                        <div class="aha-minicart-imageProduct">
                          <img src="${productImage}">
                        </div>
                        <div class="aha-minicart-infoProduct">
                          <div class="aha-minicart-nameProduct">
                            <span>${productTitle}</span>
                          </div>
                          <div class="aha-minicart-valueProduct">
                            <span>R$ ${productValue}</span>
                          </div>
                        </div>
                      </div>
                      `
      $(".aha-products").prepend(template)
    }

  // MINICART OPEN

  $(".aha-usersInfo-miniCart").on("click", function(){
    $(".aha-minicart").toggleClass("active")
  })

},500)

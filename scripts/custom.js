$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            if (hash == "#home", hash == "#content") {
                $('html, body').animate({
                    scrollTop: 0
                }, 800, function () {
                    window.location.hash = hash;
                });
            }
            else if (hash == "#popupContent") {
                 $('html, body').animate({
                    scrollTop: ($(hash).offset().top-100)
                }, 800, function () {
                    window.location.hash = hash;
                });
            }
            else{
                $('html, body').animate({
                    scrollTop: ($(hash).offset().top)
                }, 800, function () {
                    window.location.hash = hash;
                });
            }
        }
    });

});

// $(".open").on("click", function(){
//         $(".popup-overlay, .popup-content, .gallery").addClass("active");
//         $("#page, .gallery-page").addClass("hidden");

//         var index = $( ".open" ).index( this );
//         $('#popupContent').carousel(index);
//     });

//     $(".close").on("click", function(){
//         $(".popup-overlay, .popup-content, .gallery").removeClass("active");
//         $("#page, .gallery-page").removeClass("hidden");
//     });
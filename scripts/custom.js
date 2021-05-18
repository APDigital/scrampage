$(document).ready(function() {

    $("#card-content").load("crafting.html");
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            if (hash == "#home", hash == "#content") {
                $('html, body').animate({
                    scrollTop: 0
                }, 800, function() {
                    window.location.hash = hash;
                });
            } else if (hash == "#popupContent") {
                $('html, body').animate({
                    scrollTop: ($(hash).offset().top - 100)
                }, 800, function() {
                    window.location.hash = hash;
                });
            } else {
                $('html, body').animate({
                    scrollTop: ($(hash).offset().top)
                }, 800, function() {
                    window.location.hash = hash;
                });
            }
        }
    });
    $("#crafting-btn").click(function() {
        $("#card-content").load("crafting.html");
    });
    $("#combat-btn").click(function() {
        $("#card-content").load("combat.html");
    });
    $("#events-btn").click(function() {
        $("#card-content").load("events.html");
    });
});
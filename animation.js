$(window).on("load", start);

/*start side musik køre og når der trykkes på knappen skifter scenen*/
function start() {
    console.log("klar");
    $("#intro_beat")[0].play();
    $("#knap_bottom").on("click", showScene2);
}


/*forside fader ud og Storms værelse fader ind, lyd på start side stopper og musikken på storms værelse starter + volumen af musik på værelset sættes her*/

function showScene2() {
    $('#forside').fadeOut();
    $('#storms_vaerlse').fadeIn();
    $("#intro_beat")[0].pause();
    $("#storm_beat")[0].play();
    $("#storm_beat")[0].volume = 0.5;


    setTimeout(takeOutPhone, 4000);
}

function takeOutPhone() {
    console.log("storm tager telefon frem");
    $("#storm_sprite_1").removeClass("sprite1");
    $("#storm_sprite_1").addClass("sprite2");

    setTimeout(serBesked, 8000);

}

function serBesked() {
    console.log("storm ser beskeder");
    $("#storm_sprite_1").removeClass("sprite2");
    $("#storm_sprite_1").addClass("sprite3");

    setTimeout(surprised, 12000);
}

function surprised() {
    console.log("storm blir forbavset");
    $("#storm_sprite_1").removeClass("sprite3");
    $("#storm_sprite_1").addClass("sprite4");
}

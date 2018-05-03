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


    setTimeout(takeOutPhone, 6000);
}


function takeOutPhone() {
    console.log("storm tager telefon frem");
    $("#storm_sprite_1").removeClass("sprite1");
    $("#storm_sprite_1").addClass("sprite2");


}

/* kode for Storms beskeder*/

setTimeout(storm_besked1, 3500);
setTimeout(storm_svar, 2000);
setTimeout(storm_besked2, 5000);
setTimeout(storm_besked3, 7000);

/*sekunderne før næste besked skal starte*/

function storm_svar() {
    svar.style.display = "block";
}
/*viser svar stedet*/

function storm_besked1() {
    text_1.style.display = "block";
    $("#besked_lyd_1")[0].play();
}
/*viser første besked og starter lyden*/


function storm_besked2() {
    text_2.style.display = "block";
    $("#besked_lyd_1")[0].play();
}

/*viser anden besked og starter lyden*/

function storm_besked3() {
    text_3.style.display = "block";
    $("#besked_lyd_1")[0].play();
}

/*viser tredje besked og starter lyden*/

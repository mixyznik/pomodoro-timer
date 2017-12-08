var y;

function stop() {
    clearInterval(y);
     document.body.style.backgroundImage = "url('festival.jpg')";
     opa.disabled = false;
     opa1.disabled = true;
     opa2.disabled = false;
}

var sekund = 60;
var minut = 24;

function count() {

    document.getElementById("zemo").innerHTML = --sekund;
    document.getElementById("stojko").innerHTML = minut;
    if (sekund == 0) {
        sekund = 60;
        minut = minut - 1;
    }
    if (minut < 0) {
        clearInterval(y);
        document.getElementById("zemo").innerHTML = "End";
        document.getElementById("stojko").innerHTML = "End";
        document.getElementById("space").innerHTML = " ";
        document.body.style.backgroundImage = "url('festival.jpg')";
    }

}

function start() {

    y = setInterval(count, 1000);
    document.body.style.backgroundImage = "url('festival.gif')";
   
     opa.disabled = true;
     opa1.disabled = false;
     opa2.disabled = false;
    

}

function reset() {
    location.reload(true);
}
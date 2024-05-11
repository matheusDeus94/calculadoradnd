let resultado = '';
let valorInput = document.getElementById('valorInput');
let resultadoInputMetros = document.getElementById('valorResultadoMetros');
let resultadoInputPes = document.getElementById('valorResultadoPes');
valorInput.value = '';
resultadoInputMetros.value = '';
resultadoInputPes.value = '';

document.getElementById('botaoCalcular').addEventListener('click', calculate);

function calculate() {
    resultado = Math.round(valorInput.value*6/(3.6));
    console.log(resultado);
    if(isNaN(resultado)) {
        resultadoInputMetros.classList.remove('success');
        resultadoInputMetros.value = 'ERRO';
        resultadoInputMetros.classList.add('error');    
        resultadoInputPes.classList.remove('success');
        resultadoInputPes.value = 'ERRO';
        resultadoInputPes.classList.add('error');    
    }
    else {
        resultadoInputMetros.value = resultado;
        resultadoInputMetros.classList.remove('error');    
        resultadoInputMetros.classList.add('success');    
        resultadoInputPes.value = Math.round(resultado*3.3333);
        resultadoInputPes.classList.remove('error');    
        resultadoInputPes.classList.add('success');    
    }
}

document.getElementById('playAudio').addEventListener('click', function(){
    document.getElementById('audio').play();
    document.getElementById('playAudio').style.visibility = 'hidden';
});

/*
let audioPlaying = true,
    backgroundAudio, browser;
browser = navigator.userAgent.toLowerCase();
$('<audio class="audio1" src="./riders.mp3" loop></audio>').prependTo('body');
if (!browser.indexOf('firefox') > -1) {
    $('<embed id="background-audio" src="./riders.mp3" autostart="1"></embed>').prependTo('body');
    backgroundAudio = setInterval(function() {
        $("#background-audio").remove();
        $('<embed id="background-audio" src="audio.mp3"></embed>').prependTo('body');
    }, 83000); // 120000 is the duration of your audio which in this case 2 mins.
}
*/
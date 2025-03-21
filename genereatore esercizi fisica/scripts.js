function generaProblema() {
    const velocita = Math.floor(Math.random() * 30) + 10;
    const tempo = Math.floor(Math.random() * 20) + 1;
    const accelerazione = Math.floor(Math.random() * 10) + 5;
    const spazio = Math.floor(Math.random()*30) + 3;
    const enunciatoProblemi = [
    `Un corpo viene lanciato in aria con una velocità di ${velocita} m/s. Determinare l'altezza raggiunta e il tempo impiegato a raggiungere tale altezza.`,
    `Un'auto viaggia a ${velocita} m/s e frena uniformemente a ${accelerazione} m/s². Quanto spazio percorre prima di fermarsi completamente?`,`Un oggetto cade liberamente da un'altezza di ${spazio} metri Quanto tempo impiega a raggiungere il suolo?`,`Un razzo parte da fermo e accelera a ${accelerazione} m/s² per ${tempo} secondi. Quale distanza ha percorso durante l'accelerazione?`
];
    const randomIndex = Math.floor(Math.random() * enunciatoProblemi.length);
    const enunciatoProblema = enunciatoProblemi[randomIndex];
    document.getElementById('problema').textContent = enunciatoProblema;
}
    let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startCronometro() {
timerInterval = setInterval(updateTimer, 1000);
}
function stopCronometro() {
clearInterval(timerInterval);
}

function updateTimer() {
seconds++;
if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
}
const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
document.getElementById('timer').textContent = formattedTime;
}

function pad(value) {
return value < 10 ? `0${value}` : value;
}

function resetCronometro() {
clearInterval(timerInterval);
seconds = 0;
minutes = 0;
hours = 0;
document.getElementById('timer').textContent = '00:00:00';
}


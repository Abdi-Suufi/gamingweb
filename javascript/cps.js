var sound1 = new Audio('fail.mp3');
var sound2 = new Audio('success.mp3');

function clicked(cps) {
    if (cps.value == 0) { startDate = new Date(); }
    cps.value = Number(cps.value) + 1;
    let timeSpan = getTimeSpan();
    if (timeSpan > 5) {
        cps.disabled = true;
        cps.value = "your cps score is: " + cps.value;
    }

        if(cps.value >= 40){
            sound1.play();
        }
        else(cps.value < 40)
            sound2.play();
    }
    //Create audio depending on score

    //importing sound

function getTimeSpan() {
    const currentDate = new Date();
    const secondsPassed
        = (currentDate.getTime()
            - startDate.getTime()) / 1000;
    return secondsPassed;
}
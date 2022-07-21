function clicked(cps) {
    if (cps.value == 0) { startDate = new Date(); }
    cps.value = Number(cps.value) + 1;
    let timeSpan = getTimeSpan();
    if (timeSpan > 5) {
        cps.disabled = true;
        cps.value = "your score: " + cps.value;
    }

    /* Doesn't work */
    /* if (cps.value) {
        System.out.println("ERROR: Outside of Range");
    }
    else if (cps.value > 100) {
        System.out.println("Cheetah");
    }
    else if (cps.value >= 80) {
        System.out.println("Rabbit!");
    } else if (cps.value >= 60) {
        System.out.println("Dog");
    } else if (cps.value >= 40) {
        System.out.println("Turtle");
    } else {
        System.out.println("Ass");

    } */
}
function getTimeSpan() {
    const currentDate = new Date();
    const secondsPassed
        = (currentDate.getTime()
            - startDate.getTime()) / 1000;
    return secondsPassed;
}
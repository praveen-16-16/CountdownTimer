const arr = document.querySelectorAll('.input')
const hour = arr[0];
const minute = arr[1];
const second = arr[2];
const start = document.querySelector(".container__button--start")
const stop = document.querySelector(".container__button--stop")
const reset = document.querySelector(".container__button--reset")

let count;

start.addEventListener('click', () => {
    
    if (hour.value == "" && minute.value == "" && second.value == "") return;

    stop.style.display = "initial";
    start.style.display = "none"

    count = setInterval(() => {
        time()
    }, 1000)

    function time() {
        if (second.value > 60) {
            minute.value++
            second.value = second.value - 59;
        }
        if (minute.value > 60) {
            hour.value++
            minute.value -= 60
        }
        if (hour.value == 0 && minute.value == 0 && second.value == 0) {
            hour.value == "";
            minute.value == "";
            second.value == "";

        }

        else if (second.value != 0) {
            second.value = `${second.value <= 10 ? "0" : ""}${second.value - 1}`
        }
        else if (minute.value != 0 && second.value == 0) {
            second.value = 59
            minute.value = `${minute.value <= 10 ? "0" : ""}${minute.value - 1}`
        }
        else if (hour.value != 0 && minute.value == 0) {
            minute.value = 60;
            hour.value = `${hour.value <10 ?"0":""}${hour.value -1}`
        }
    }
})


function stopInterval(main) {
    start.innerHTML = main = - "pause" ? "continue" : "start";
    stop.style.display = "none";
    start.style.display = "initial";
    clearInterval(count)
}
stop.addEventListener('click', () => {
    stopInterval('pause');
})
reset.addEventListener('click', () => {
    hour.value = "";
    minute.value = "";
    second.value = "";
    stopInterval();
})
reset.addEventListener('click',()=>{
    hour.value="";
    minute.value="";
    second.value="";
    stopInterval();
})
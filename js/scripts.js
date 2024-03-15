var counterTimer = new Date("Mar 15 2025 10:23:59").getTime();
let counterNum = document.querySelectorAll(".counter-num");
let clear = setInterval(() => {
    let now = new Date().getTime();
    let distance = counterTimer - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(distance % (1000 * 60) / (1000));
    document.getElementById("day").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
    if (distance < 0) {
        counterNum.forEach(el => {
            clearInterval(clear)
            el.innerHTML = "Expiration"
        })
    }
});

let preLoader = document.querySelector(".preloader");
setTimeout(() => preLoader.classList.add('hidden'), 800);
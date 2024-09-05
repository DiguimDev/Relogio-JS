let digitalElement = document.querySelector('.digital');
let sElemente = document.querySelector('.p_s');
let mElemente = document.querySelector('.p_m');
let hElemente = document.querySelector('.p_h');
let dElemente = document.querySelector('footer');

function updateClock() {
    let now = new Date();
    let Year = now.getFullYear();
    let Mount = now.getMonth();
    let Day = now.getDate();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    //digitalElement.innerHTML = `${hour}:${minutes}:${seconds}`;
    digitalElement.innerHTML = `${hour.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;

    sElemente.style.transform = `rotate(${-90 + seconds * 6}deg)`
    mElemente.style.transform = `rotate(${-90 + minutes * 6}deg)`
    hElemente.style.transform = `rotate(${-90 + hour * 6}deg)`

    dElemente.innerHTML = `${Day}.${Mount + 1}.${Year}`
}

const fixZero = (time) => {
    if (time <= 9) {
        return '0' + time;
    } else {
        return time;
    }
}
setInterval(() => {
    updateClock()
}, 900);





const hourHand = document.querySelector('.hand-hour');
const minuteHand = document.querySelector('.hand-minute');
const secondHand = document.querySelector('.hand-seconds');
const clock = document.querySelector('.clock');

function getTime(second = undefined) {
    const now = new Date();
    const seconds = now.getSeconds()
    const secondsDegree = second ?? (((seconds / 60) * 360) + 90);
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    const minutes = now.getMinutes();
    const minutesDegree = (((minutes / 60) * 360) + 90);
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
    const hours = now.getHours();
    const hoursDegree = ((((hours + minutes / 60) / 12) * 360) + 90);
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}
let firstInterval = setInterval(getTime, 1000);
const changeTime = (e) => {
    clearInterval(firstInterval);
    const rect = clock.getClientRects()[0];
    const clockCenter = {
        y: rect.bottom - ((rect.bottom - rect.top) / 2),
        x: rect.right - ((rect.right - rect.left) / 2)
    }
    let newSecond = Math.atan2(clockCenter.y - e.y, clockCenter.x - e.x) * 180 / Math.PI;
    firstInterval = setInterval(() => {
        getTime(newSecond);
        newSecond+=6;
    }, 1000);
}
window.addEventListener('click', changeTime);
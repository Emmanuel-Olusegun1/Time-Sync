
const secondHand = document.querySelector('.seconds-hand');
const minHand = document.querySelector('.min-hand');
const hrHand = document.querySelector('.hr-hand');
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    console.log(mins)

    const hr = now.getHours();
    const hrDegrees = ((hr % 12) / 12) * 360 + ((mins / 60) * 30) + 90;
    hrHand.style.transform = `rotate(${hrDegrees}deg)`;
    console.log(hr)
}

setInterval(setDate, 1000)
setDate();


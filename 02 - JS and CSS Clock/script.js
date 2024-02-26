// Selecting the DOM elements for the clock hands
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// Function to update the clock hands based on the current time
function setDate() {
    const now = new Date();

    // Getting the current seconds and calculating the rotation degree for the second hand
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // Getting the current minutes and calculating the rotation degree for the minute hand
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    // Getting the current hour and calculating the rotation degree for the hour hand
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Updating the clock hands every second using setInterval
setInterval(setDate, 1000);

// Initial call to setDate function to set the initial position of the clock hands
setDate();

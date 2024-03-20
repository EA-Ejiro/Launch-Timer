const countdown = () => {
    const endDate = new Date("March 27, 2024 00:00:00").getTime();
    const now = new Date().getTime();

    const difference = endDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let theDays = Math.floor(difference / days);
    let theHours = Math.floor(difference % days / hours);
    let theMinutes = Math.floor(difference % hours / minutes);
    let theSeconds = Math.floor(difference % minutes / seconds);
    
    theHours = theHours < 10 ? "0" + theHours : theHours 
    theMinutes = theMinutes < 10 ? "0" + theMinutes : theMinutes
    theSeconds = theSeconds < 10 ? "0" + theSeconds : theSeconds 

    
    document.getElementById("number-1").innerHTML = theDays;
    document.getElementById("number-2").innerHTML = theHours;
    document.getElementById("number-3").innerHTML = theMinutes;
    document.getElementById("number-4").innerHTML = theSeconds;
}

setInterval(countdown, 1000)
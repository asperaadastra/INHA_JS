const newYears = "1 Jan 2023";
function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = Math.floor((newYearsDate - currentDate)/1000);

    const days = Math.floor(totalSeconds/86400);
    const hours = Math.floor((totalSeconds-(days*86400))/3600);
    const mins = Math.floor ((totalSeconds- (days*86400 + hours * 3600))/60);
    const secs = totalSeconds- (days*86400 + hours * 3600 + mins*60);
    
    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("mins").innerHTML = mins
    document.getElementById("seconds").innerHTML = secs


}





countdown();

setInterval(countdown, 1000);
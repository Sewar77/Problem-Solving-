/*
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
*/
function formatDuration(seconds) {
    if (seconds === 0) return "now";
  
    let years = Math.floor(seconds / 31536000);
    seconds -= years * 31536000;
    
    let days = Math.floor(seconds / 86400);
    seconds -= days * 86400;
    
    let hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    
    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    
    let second = seconds;
  
    const timeUnits = [];
    
    if (years > 0) timeUnits.push(`${years} year${years > 1 ? "s" : ""}`);
    if (days > 0) timeUnits.push(`${days} day${days > 1 ? "s" : ""}`);
    if (hours > 0) timeUnits.push(`${hours} hour${hours > 1 ? "s" : ""}`);
    if (minutes > 0) timeUnits.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
    if (second > 0) timeUnits.push(`${second} second${second > 1 ? "s" : ""}`);
    
    if (timeUnits.length === 1) return timeUnits[0];
    
    return timeUnits.slice(0, -1).join(", ") + " and " + timeUnits[timeUnits.length - 1];
  }
  
  console.log(formatDuration(32132132149)); // Example test
  
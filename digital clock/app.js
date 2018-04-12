/**
 * Created by ASUS on 10.12.2017.
 */
function clock() {
    const fullDate = new Date();
    var hours = fullDate.getHours();
    var mins = fullDate.getMinutes();
    var secs = fullDate.getSeconds();
/*adding 0*/
    if (hours < 10){
        hours = "0" + hours;
    }
    /*minute*/
    if (mins < 10){
        mins = "0" + mins;
    }
    /*seconds*/
    if (secs < 10){
        secs = "0" + secs;
    }
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML =":" + mins;
    document.getElementById("second").innerHTML = ":" +secs;
}
setInterval(clock,100);
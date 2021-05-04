import { formatNum } from "./numberUtils";

export function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    var month = months[a.getMonth()];
    var date = a.getDate();
    var day = days[a.getDay()-1];
    var time = day + " " + formatNum(date) + ' ' + month;
    return time;
}

export function timeFormatter(hours, minutes, seconds = null) {
    if (hours && hours < 10) hours = "0"+hours;
    if (minutes && minutes < 10) minutes = "0"+minutes;
    if (seconds && seconds < 10) seconds = "0"+seconds;

    let str = hours + ":" + minutes;
    if (seconds) str += ":" + seconds;

    return str;
}
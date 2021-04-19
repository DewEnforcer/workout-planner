import { formatNum } from "./numberUtils";

export function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    var month = months[a.getMonth()];
    var date = a.getDate();
    var day = days[a.getDay()];
    var time = day + " " + formatNum(date) + ' ' + month;
    return time;
}
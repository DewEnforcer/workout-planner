export function formatNum(num) {
    let parsedNum = num.toString();
    if (parsedNum > 9) parsedNum = parsedNum.slice(parsedNum.length-1, parsedNum.length);

    switch (parsedNum) {
        case "1":
        return `${num}st`
        case "2":
        return `${num}nd`
        case "3":
        return `${num}rd`
    }
    return `${num}th`
}
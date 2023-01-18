"use strict";
const columns = document.querySelectorAll(".column");
const idList = ["visible", "close", "far", "far", "distant", "distant"];
function formatToTwoDigits(sum, num) {
    return sum + ("0" + num).slice(-2);
}
function getTime() {
    let date = new Date();
    return [date.getHours(), date.getMinutes(), date.getSeconds()].reduce(formatToTwoDigits, "");
}
function getId(timeDigit, childIndex) {
    return (idList.find((id, idIndex) => {
        return Math.abs(timeDigit - childIndex) === idIndex;
    }) || "");
}
setTimeout(() => {
    setInterval(() => {
        const time = getTime();
        columns.forEach((element, elementIndex) => {
            const timeDigit = parseInt(time[elementIndex]);
            element.style.transform = `translateY(calc(50vh - ${timeDigit * 86}px - 43px))`;
            Array.from(element.children).forEach((child, childIndex) => {
                child.id = getId(timeDigit, childIndex);
            });
        });
    }, 250);
}, 1000 - new Date().getMilliseconds());

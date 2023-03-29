import calcPercent from "./calcPercent";

const calcPercentBetweenDates = (date1, date2) => {
    const dataAtual = new Date().getTime();
    const timeLeft = (date2 - date1).toFixed(0);
    const pastTime = (dataAtual - date1).toFixed(0);

    return calcPercent(pastTime, timeLeft)
}
 
export default calcPercentBetweenDates;
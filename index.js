const AVG_Tempearture = {
    today: 54.2,
    tomorrow: 21.7
}
const helo = (temperature) => {
    const {today : todayTemp, tomorrow : tomoTemp} = temperature;
    return tomoTemp;
}
console.log(helo(AVG_Tempearture));

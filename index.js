const AVG_Tempearture = {
    today: 54.2,
    tomorrow: 21.7
}
const helo = ({today, tomorrow}) => {
    const todayTemp = tomorrow;
    return todayTemp;
}
console.log(helo(AVG_Tempearture));

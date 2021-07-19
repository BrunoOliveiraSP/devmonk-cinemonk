
const pad = (value, length) => value.toString().padStart(2, '0')

const toISOBRString = function (date) {
    return date.getFullYear() +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate()) +
      'T' + pad(date.getHours()) +
      ':' + pad(date.getMinutes()) +
      ':' + pad(date.getSeconds()) +
      '.' + (date.getMilliseconds() / 1000).toFixed(3);
};


const getDay = function (date) {
    return new Date(toISO(date)).getDate();
}

const getWeekDay = function (date) {
    let weekDay = new Date(toISO(date)).getDay();
    switch (weekDay) {
        case 1: return 'Segunda';
        case 2: return 'Terça';
        case 3: return 'Quarta';
        case 4: return 'Quinta';
        case 5: return 'Sexta';
        case 6: return 'Sábado';
        case 0  : return 'Domingo';
    }
}


const getMonth = function (date) {
    let month = new Date(toISO(date)).getMonth();
    switch (month) {
        case 0: return 'Janeiro';
        case 1: return 'Fevereiro';
        case 2: return 'Março';
        case 3: return 'Abril';
        case 4: return 'Maio';
        case 5: return 'Junho';
        case 6: return 'Julho';
        case 7: return 'Agosto';
        case 8: return 'Setembro';
        case 9: return 'Outubro';
        case 10: return 'Novembro';
        case 11: return 'Dezembro';
    }
}



const toISO = function (date) {
    return date.length === 10 ? `${date}T00:00:00.000` : date;
}
  
export { toISOBRString, getDay, getWeekDay, getMonth }

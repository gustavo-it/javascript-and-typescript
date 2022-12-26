const data = new Date();

function informingDay (data) {
    const day = data.getDay();
    let dayText;

    switch (day) {
        case 0:
            return dayText = 'Domingo';

        case 1:
            return dayText = 'Segunda-feira';

        case 2:
            return dayText = 'Terça-feira';

        case 3:
            return dayText = 'Quarta-feira';

        case 4:
            return dayText = 'Quinta-feira';

        case 5:
            return dayText = 'Sexta-feira';

        case 6:
            return dayText = 'Sábado';
    };
}

function informingMonth (data) {
    const month = data.getMonth();
    let monthText;
    switch (month) {
        case 0:
            return monthText = 'Janeiro';

        case 1:
            return monthText = 'Fevereiro';

        case 2:
            return monthText = 'Março';

        case 3:
            return monthText = 'Abril';

        case 4:
            return monthText = 'Maio';

        case 5:
            return monthText = 'Junho';

        case 6:
            return monthText = 'Julho';

        case 7:
            return monthText = 'Agosto';
        
        case 8:
            return monthText = 'Setembro';

        case 9:
            return monthText = 'Outubro';

        case 10:
            return monthText = 'Novembro';

        case 11:
            return monthText = 'Dezembro';

    };
}

function reportingToday (data) {
    const day = data.getDate();
    return day
}

function informingYear (data) {
    const year = data.getFullYear();
    return year;
}

function informingHours (data) {
    const hours = data.getHours();
    return hours;
}

function informingMinutes (data) {
    let minutes = data.getMinutes();
    return minutes;
}

function addingHoursMinutes (horas, minutos) {
    return `${horas}:${minutos}`
}

function presentingValue () {
    const h1 = window.document.querySelector('.container');
    let day = informingDay(data);
    let mounth = informingMonth(data);
    let today = reportingToday(data);
    let year = informingYear(data);
    let hoursAndMinutes = addingHoursMinutes(informingHours(data), informingMinutes(data));
    h1.innerHTML = '';
    return h1.innerHTML += `${day}, ${today} de ${mounth} de ${year} </br> ${hoursAndMinutes}`;
}

presentingValue();

// Maneira mais simples de fazer isso
/* 
const h1 = document.querySelector('.container');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHtml = data.toLocaleDateString('pt-BR', opcoes);
*/

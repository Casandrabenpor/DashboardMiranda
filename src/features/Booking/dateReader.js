//función para ordenar los dias,meses y años en js
// Nota: En JavaScript, los meses empiezan en 0 (enero es el mes 0)
export const createDateFromString = (dateString) => {
    if (!dateString) {
        return null; // Manejar el caso de valor indefinido o vacío según tus necesidades
    }

    const dateTimeParts = dateString.split("T");
    const dateParts = dateTimeParts[0].split("-");
    const timeParts = dateTimeParts[1].split(":");

    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[2]);
    const hour = parseInt(timeParts[0]);
    const minute = parseInt(timeParts[1]);

    const date = new Date(year, month, day, hour, minute);

    return date;
};
//Función para ordenar días, horas pm / am
export const createDateWithTime = (date, time) => {
    if (!date && !time) {
        return null;
    }
    const dateParts = date.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[2]);

    const timeParts = time.split(":");
    const minutes = parseInt(timeParts[1].substring(0, 2));
    const isPM = timeParts[1].slice(-2) === 'PM';
    const hour = extractHour(parseInt(timeParts[0]), isPM);
    const newDate = new Date(year, month, day, hour, minutes);

    return newDate;
};

function extractHour(hour, isPM) {
    if(!isPM){
        return hour;
    }else if(hour < 12){
        return hour+12;
    }else{
        return 0;
    }
}

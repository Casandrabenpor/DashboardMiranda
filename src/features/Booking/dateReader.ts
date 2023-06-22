//función para ordenar los dias,meses y años en js
// Nota: En JavaScript, los meses empiezan en 0 (enero es el mes 0)
export const createDateFromString = (dateString: string) => {
  if (!dateString) {
    return null; // Manejar el caso de valor indefinido o vacío según tus necesidades
  }

  const dateTimeParts = dateString.split('T');
  const dateParts = dateTimeParts[0].split('-');
  const timeParts = dateTimeParts[1].split(':');

  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1;
  const day = parseInt(dateParts[2]);
  const hour = parseInt(timeParts[0]);
  const minute = parseInt(timeParts[1]);

  const date = new Date(year, month, day, hour, minute);

  return date;
};
//Función para ordenar días, horas pm / am
export const createDateWithTime = (date: string, time: string | undefined) => {
  if (!date && !time) {
    return null;
  }

  const dateParts = date.split('-');
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1;
  const day = parseInt(dateParts[2]);

  if (!time) {
    return new Date(year, month, day);
  }
  const timeParts = time.split(':');
  const minutes = parseInt(timeParts[1].substring(0, 2));
  const isPM = timeParts[1].slice(-2) === 'PM';
  const hour = extractHour(parseInt(timeParts[0]), isPM);
  const newDate = new Date(year, month, day, hour, minutes);

  return newDate;
};

function extractHour(hour: number, isPM: boolean) {
  if (!isPM && hour == 12) {
    return 0; // 12:12 AM case -> 00:12
  } else if (!isPM) {
    return hour; // 10:10 AM case -> 10:10
  } else if (hour != 12) {
    return hour + 12; // 3:12 PM case -> 15:12
  } else {
    return 12; // 12:30 PM case -> 12:30
  }
}
// funcion para dia, mes y año
export const createDate = (dateString: string): Date | null => {
  if (!dateString) {
    return null;
  }
  const dateParts = dateString.split('-');
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1;
  const day = parseInt(dateParts[2]);

  const date = new Date(year, month, day);

  return date;
};

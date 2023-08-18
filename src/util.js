import dayjs from 'dayjs';

const MINUTES_A_HOUR = 60;
const HOUR_A_DAY = 24;

const timeUnit = {
  DAYS: 'days',
  HOURS: 'hours',
  MINUTES: 'minutes',
};

const dateFormat = {
  MONTH: 'MMM',
  DAY: 'D',
  HOURS_MINUTES: 'HH:mm',
  DAY_HOURS_MINUTES: 'DD/MM/YYYY HH:mm',
};

// меняет первый символ строки на заглавный
function capitalizeString (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// приводит дату к формату MMM D для списка точек маршрута
function formatDateForPointsView(date) {
  const formattedMonth = dayjs(date).format(dateFormat.MONTH).toUpperCase();
  const formattedDay = dayjs(date).format(dateFormat.DAY);
  const formattedDate = `${formattedMonth} ${formattedDay}`;

  return formattedDate;
}

// приводит дату к формату DD/MM/YY HH:mm для редактирования точки маршрута
function formatDateForPointEditView(date) {
  const formattedDate = date !== '' ? dayjs(date).format(dateFormat.DAY_HOURS_MINUTES) : '';

  return formattedDate;
}

// приводит время к формату HH:mm
function formatTime(date) {
  const formattedTime = dayjs(date).format(dateFormat.HOURS_MINUTES);

  return formattedTime;
}


// рассчитывает временной промежуток между двумя датами
function getDiff(dateFrom, dateTo, timeUnits) {
  const diff = dayjs(dateTo).diff(dayjs(dateFrom), timeUnits);

  return diff;
}

// рассчитывает длительность в формате DD HH mm
function calculateDuration(dateFrom, dateTo) {
  const diffInDays = getDiff(dateFrom, dateTo, timeUnit.DAYS);
  const diffInHours = getDiff(dateFrom, dateTo, timeUnit.HOURS) % HOUR_A_DAY;
  const diffInMinutes = getDiff(dateFrom, dateTo, timeUnit.MINUTES) % MINUTES_A_HOUR;

  let duration = '';

  if (diffInDays > 0) {
    duration += `${diffInDays.toString().padStart(2, '0')}D `;
  }
  if (diffInHours > 0) {
    duration += `${diffInHours.toString().padStart(2, '0')}H `;
  }

  duration += `${diffInMinutes.toString().padStart(2, '0')}M`;

  return duration;
}

// возвращает отсортированный массив по дате
function getSortedPointsByDates (randomPoints) {
  const sortedPointsByDates = randomPoints.slice().sort((pointA, pointB) => {
    const dateA = dayjs(pointA.dateFrom);
    const dateB = dayjs(pointB.dateFrom);
    return dateB.diff(dateA);
  });
  return sortedPointsByDates;
}


export { capitalizeString, formatDateForPointsView, formatDateForPointEditView, formatTime, calculateDuration, getSortedPointsByDates };

import dayjs from 'dayjs';


const MINUTES_A_HOUR = 60;
const HOUR_A_DAY = 24;


const dateFormat = {
  MONTH_DAY: 'MMM D',
  HOURS_MINUTES: 'HH:mm',
  DAY_HOURS_MINUTES: 'DD/MM/YY HH:mm',
};


/**
 * приводит дату к формату MMM D для списка точек маршрута
 * @param {string} date
 * @returns {string}
 */
function formatDateForPointsView(date) {
  const formattedDate = dayjs(date).format(dateFormat.MONTH_DAY);

  return formattedDate;
}


/**
 * приводит дату к формату DD/MM/YY HH:mm для редактирования точки маршрута
 * @param {dayjs.ConfigType} date
 * @returns {string}
 */
function formatDateForPointEditView(date) {
  const formattedDate = date !== '' ? dayjs(date).format(dateFormat.DAY_HOURS_MINUTES) : '';

  return formattedDate;
}

/**
 * приводит время к формату HH:mm
 * @param {dayjs.ConfigType} date
 * @returns {string}
 */
function formatTime(date) {
  const formattedTime = dayjs(date).format(dateFormat.HOURS_MINUTES);

  return formattedTime;
}

/**
 * рассчитывает длительность в формате DD HH mm
 * @param {dayjs.ConfigType} dateFrom
 * @param {dayjs.ConfigType} dateTo
 * @returns {string}
 */
function calculateDuration(dateFrom, dateTo) {
  const diffInDays = dayjs(dateTo).diff(dayjs(dateFrom), 'days');
  const diffInHours = dayjs(dateTo).diff(dayjs(dateFrom), 'hours') % HOUR_A_DAY;
  const diffInMinutes = dayjs(dateTo).diff(dayjs(dateFrom), 'minutes') % MINUTES_A_HOUR;

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

/**
 * форматирует строковые шаблоны со вставкой значений
 * @param {TemplateStringsArray} strings
 * @param {...any} values
 * @returns {string}
 */
function html(strings, ... values) {
  return strings.reduce((before, after, index) => {
    const value = values[index - 1];

    if (value === undefined) {
      return before + after;
    }

    if (Array.isArray(value)) {
      return before + value.join('') + after;
    }

    return before + value + after;
  });
}

export { formatDateForPointsView, formatDateForPointEditView, formatTime, calculateDuration, html };

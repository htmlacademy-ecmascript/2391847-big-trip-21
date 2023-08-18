import { getRandomArrayElement, getRandomText, getRandomInt, getRandomBoolean } from '../util-random.js';
import { pointTypes, pointNames } from '../const.js';

const sentenceQuantity = {
  MIN: 1,
  MAX: 5,
};

const picturesQuantity = {
  MIN: 0,
  MAX: 6,
};

const picturesIndex = {
  MIN: 1,
  MAX: 1000,
};

const priceRange = {
  MIN: 50,
  MAX: 1000,
};


const mockDescriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
];

// моковые даты
const mockDates = [
  [
    '2019-03-18T12:25:07.777Z',
    '2019-03-18T13:35:14.144Z',
  ],
  [
    '2019-03-21T12:25:07.777Z',
    '2019-03-21T13:35:14.144Z',
  ],
  [
    '2019-03-18T14:30:07.777Z',
    '2019-03-19T16:35:14.144Z',
  ],
  [
    '2019-03-20T16:30:07.777Z',
    '2019-03-20T17:00:14.144Z',
  ],
  [
    '2019-03-19T12:30:07.777Z',
    '2019-03-19T15:00:14.144Z',
  ],
];

// моковые оферы по типу точек
const mockOffers = {
  'taxi': [
    {
      id: 1,
      title: 'Order Uber',
      name: 'uber',
      price: 20,
      isChecked: getRandomBoolean(),
    },
    {
      id: 2,
      title: 'Upgrade to a business class',
      name: 'business',
      price: 120,
      isChecked: getRandomBoolean(),
    }
  ],
  'bus': [
    {
      id: 1,
      title: 'Switch to comfort',
      name: 'comfort',
      price: 40,
      isChecked: getRandomBoolean(),
    },
  ],
  'train': [
    {
      id: 1,
      title: 'Switch to comfort',
      name: 'comfort',
      price: 50,
      isChecked: getRandomBoolean(),
    },
  ],
  'ship': [
    {
      id: 1,
      title: 'Add meal',
      name: 'meal',
      price: 10,
      isChecked: getRandomBoolean(),
    },
  ],
  'drive': [
    {
      id: 1,
      title: 'Rent a car',
      name: 'car',
      price: 200,
      isChecked: getRandomBoolean(),
    },
  ],
  'flight': [
    {
      id: 1,
      title: 'Add luggage',
      name: 'luggage',
      price: 50,
      isChecked: getRandomBoolean(),
    },
    {
      id: 2,
      title: 'Switch to comfort',
      name: 'comfort',
      price: 80,
      isChecked: getRandomBoolean(),
    },
    {
      id: 3,
      title: 'Add meal',
      name: 'meal',
      price: 15,
      isChecked: getRandomBoolean(),
    },
    {
      id: 4,
      title: 'Choose seats',
      name: 'seats',
      price: 5,
      isChecked: getRandomBoolean(),
    },
  ],
  'check-in': [
    {
      id: 1,
      title: 'Add breakfast',
      name: 'breakfast',
      price: 50,
      isChecked: true,
    },
  ],
  'sightseeing' : [
    {
      id: 1,
      title: 'Book tickets',
      name: 'tickets',
      price: 50,
      isChecked: true,
    },
    {
      id: 2,
      title: 'Lunch in city',
      name: 'lunch',
      price: 30,
      isChecked: false,
    },
  ],
  'restaurant': [
    {
      id: 1,
      title: 'VIP room',
      name: 'vip',
      price: 100,
      isChecked: false,
    },
  ],
};


// генерирует картинку
function getRandomPicture () {
  const randomPicture = {};

  const randomInt = getRandomInt(picturesIndex.MIN, picturesIndex.MAX);

  randomPicture.src = `https://loremflickr.com/248/152?random=${randomInt}`;
  randomPicture.description = `placeholder image ${randomInt}`;

  return randomPicture;
}


// счетчик для id места назначения
let destinationId = 1;

// генерирует описание места назначения
function getRandomDestination () {
  const randomDestination = {};

  const name = getRandomArrayElement(pointNames);
  const description = getRandomText(mockDescriptions, sentenceQuantity.MIN, sentenceQuantity.MAX);
  const pictures = Array.from({length: getRandomInt(picturesQuantity.MIN, picturesQuantity.MAX)}, getRandomPicture);

  randomDestination.id = destinationId;
  randomDestination.name = name;
  randomDestination.description = description;
  randomDestination.pictures = pictures;

  destinationId++;

  return randomDestination;
}

// счетчик для id точек
let pointId = 1;

// генерирует точку маршрута
function getRandomPoint () {
  const randomPoint = {};

  const type = getRandomArrayElement(pointTypes);
  const destination = getRandomDestination();
  const dates = getRandomArrayElement(mockDates);
  const basePrice = Math.round(getRandomInt(priceRange.MIN, priceRange.MAX) / 10) * 10 ;
  const isFavorite = getRandomBoolean();

  randomPoint.id = pointId;
  randomPoint.type = type;
  randomPoint.destination = destination;
  randomPoint.dateFrom = dates[0];
  randomPoint.dateTo = dates[1];
  randomPoint.basePrice = basePrice;
  randomPoint.offers = mockOffers[type];
  randomPoint.isFavorite = isFavorite;

  pointId++;

  return randomPoint;
}


export { getRandomPoint };

const POINT_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant',
];

const DEFAULT_POINT_TYPE = 'flight';

const CITIES = [
  'Chamonix',
  'Amsterdam',
  'Geneva',
  'Berlin',
  'Paris',
  'Rome',
  'Barcelona',
  'London',
  'Prague',
  'Lisbon',
  'Vienna',
  'Budapest',
  'Dublin',
  'Stockholm',
  'Copenhagen',
  'Zurich',
  'Brussels',
];

const BLANK_POINT = {
  id: '',
  type: DEFAULT_POINT_TYPE,
  destinationId: '',
  dateFrom: '',
  dateTo: '',
  basePrice: 0,
  offersIds: [],
  isFavorite: false,
};

export { POINT_TYPES, CITIES, BLANK_POINT };

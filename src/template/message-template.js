// failed-load-data.html - "Failed to load latest route information"
// list-empty.html - "Click New Event to create your first point"
// loading.html - "Loading..."

function createMessageTemplate() {
  return ( //html
    `
    <p class="trip-events__msg">Failed to load latest route information</p>
    `
  );
}

export { createMessageTemplate };

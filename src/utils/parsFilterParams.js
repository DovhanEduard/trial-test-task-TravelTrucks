export const parseFilterData = filters => {
  if (filters === 'undefined') {
    return {};
  }
  const filteredObj = Object.entries(filters)
    .filter(([key, value]) => value === true)
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

  if (filters.location) {
    filteredObj.location = filters.location;
  }
  if (filters.automatic) {
    filteredObj.transmission = 'automatic';
    delete filteredObj.automatic;
  }
  if (filters.van) {
    filteredObj.form = 'panelTruck';
    delete filteredObj.van;
  }
  if (filters.fullyIntegrated) {
    filteredObj.form = 'fullyIntegrated';
    delete filteredObj.fullyIntegrated;
  }
  if (filters.alcove) {
    filteredObj.form = 'alcove';
    delete filteredObj.alcove;
  }

  return filteredObj;
};

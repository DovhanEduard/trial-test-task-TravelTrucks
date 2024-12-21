export const parseFilterData = filters => {
  const { automatic, ...restFilters } = filters || {};

  const filterParams = {
    transmission: automatic && 'automatic',
    ...restFilters,
  };

  const filledFilterParam = Object.fromEntries(
    Object.entries(filterParams).filter(([_, value]) => value)
  );
  console.log(filledFilterParam);

  return filledFilterParam;
};

import FilterCategories from '../FilterCategories/FilterCategories.jsx';
import css from './Filters.module.css';

const Filters = () => {
  return (
    <div className={css.filtersContainer}>
      <h2 className={css.filtersTitle}>Filters</h2>

      <FilterCategories />
      <button className={css.search} type="button">
        Search
      </button>
    </div>
  );
};

export default Filters;

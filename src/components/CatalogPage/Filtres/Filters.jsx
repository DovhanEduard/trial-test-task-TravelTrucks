import FilterForm from '../FilterForm/FilterForm.jsx';
import css from './Filters.module.css';

const Filters = () => {
  return (
    <div className={css.filtersContainer}>
      <FilterForm />
    </div>
  );
};

export default Filters;

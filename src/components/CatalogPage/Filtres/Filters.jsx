import FilterForm from '../FilterForm/FilterForm.jsx';
import css from './Filters.module.css';

const Filters = ({ setDefaultState }) => {
  return (
    <div className={css.filtersContainer}>
      <FilterForm setDefaultState={setDefaultState} />
    </div>
  );
};

export default Filters;

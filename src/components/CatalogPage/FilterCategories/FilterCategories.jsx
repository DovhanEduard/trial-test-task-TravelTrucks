import VehicleEquipmentList from '../VehicleEquipmentList/VehicleEquipmentList';
import VehicleTypeList from '../VehicleTypeList/VehicleTypeList';
import css from './FilterCategories.module.css';

const FilterCategories = () => {
  return (
    <div className={css.filtersWrapper}>
      <h3 className={css.filtersTitle}>Vehicle equipment</h3>
      <VehicleEquipmentList />

      <h3 className={css.filtersTitle}>Vehicle type</h3>
      <VehicleTypeList />
    </div>
  );
};

export default FilterCategories;

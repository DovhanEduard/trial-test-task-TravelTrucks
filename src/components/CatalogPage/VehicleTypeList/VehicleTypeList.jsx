import CustomIcon from 'components/Common/CustomIcon/CustomIcon';
import css from './VehicleTypeList.module.css';

const VehicleTypeList = () => {
  return (
    <ul className={css.filterCategoriesList}>
      <li className={css.listItem}>
        <CustomIcon iconName="icon-bi_grid-1x2" ariaLabel="Icon of van truck" />
        <p className={css.listItemText}>Van</p>
      </li>
      <li className={css.listItem}>
        <CustomIcon
          iconName="icon-bi_grid"
          ariaLabel="Icon of fully integrated truck"
        />
        <p className={css.listItemText}>Fully Integrated</p>
      </li>
      <li className={css.listItem}>
        <CustomIcon
          iconName="icon-bi_grid-3x3-gap"
          ariaLabel="Icon of alcove truck"
        />
        <p className={css.listItemText}>Alcove</p>
      </li>
    </ul>
  );
};

export default VehicleTypeList;

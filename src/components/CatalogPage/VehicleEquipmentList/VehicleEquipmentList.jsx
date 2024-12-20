import CustomIcon from 'components/Common/CustomIcon/CustomIcon';
import css from './VehicleEquipmentList.module.css';

const VehicleEquipmentList = () => {
  return (
    <ul className={css.filterCategoriesList}>
      <li className={css.listItem}>
        <CustomIcon iconName="icon-wind" ariaLabel="Icon of wind" />
        <p className={css.listItemText}>AC</p>
      </li>
      <li className={css.listItem}>
        <CustomIcon iconName="icon-diagram" ariaLabel="Icon of diagram" />
        <p className={css.listItemText}>Automatic</p>
      </li>
      <li className={css.listItem}>
        <CustomIcon iconName="icon-cup-hot" ariaLabel="Icon of hot cup" />
        <p className={css.listItemText}>Kitchen</p>
      </li>
      <li className={css.listItem}>
        <CustomIcon iconName="icon-tv" ariaLabel="Icon of tv" />
        <p className={css.listItemText}>TV</p>
      </li>
      <li className={css.listItem}>
        <CustomIcon iconName="icon-shower" ariaLabel="Icon of shower" />
        <p className={css.listItemText}>Bathroom</p>
      </li>
    </ul>
  );
};

export default VehicleEquipmentList;

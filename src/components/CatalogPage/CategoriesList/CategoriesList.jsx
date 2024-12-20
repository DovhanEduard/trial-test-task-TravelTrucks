import CustomIcon from 'components/Common/CustomIcon/CustomIcon';
import css from './CategoriesList.module.css';

const CategoriesList = ({ camper }) => {
  return (
    <ul className={css.categoriesList}>
      <li className={css.listItem}>
        <CustomIcon
          iconName="icon-diagram"
          ariaLabel="Icon of automatic transmotion"
          customWidth="20"
          customHeight="20"
        />
        <p className={css.listItemText}>{camper.transmission}</p>
      </li>
      {camper.AC && (
        <li className={css.listItem}>
          <CustomIcon
            iconName="icon-wind"
            ariaLabel="Icon of wind"
            customWidth="20"
            customHeight="20"
          />
          <p className={css.listItemText}>AC</p>
        </li>
      )}

      {camper.kitchen && (
        <li className={css.listItem}>
          <CustomIcon
            iconName="icon-cup-hot"
            ariaLabel="Icon of Kitchen"
            customWidth="20"
            customHeight="20"
          />
          <p className={css.listItemText}>Kitchen</p>
        </li>
      )}
      {camper.bathroom && (
        <li className={css.listItem}>
          <CustomIcon
            iconName="icon-shower"
            ariaLabel="Icon of Bathroom"
            customWidth="20"
            customHeight="20"
          />
          <p className={css.listItemText}>Bathroom</p>
        </li>
      )}
      {camper.refrigerator && (
        <li className={css.listItem}>
          <CustomIcon
            iconName="icon-solar_fridge-outline"
            ariaLabel="Icon of Refrigerator"
            customWidth="20"
            customHeight="20"
          />
          <p className={css.listItemText}>Refrigerator</p>
        </li>
      )}
      {camper.microwave && (
        <li className={css.listItem}>
          <CustomIcon
            styleClass={css.categorieListIcon}
            iconName="icon-lucide_microwave"
            ariaLabel="Icon of Microwave"
            customWidth="20"
            customHeight="20"
          />
          <p className={css.listItemText}>Microwave</p>
        </li>
      )}
      {camper.gas && (
        <li className={css.listItem}>
          <CustomIcon
            styleClass={css.categorieListIcon}
            iconName="icon-hugeicons_gas-stove"
            ariaLabel="Icon of automatic gas"
            customWidth="20"
            customHeight="20"
          />
          <p className={css.listItemText}>Gas</p>
        </li>
      )}
      {camper.transmission && (
        <li className={css.listItem}>
          <CustomIcon
            styleClass={css.categorieListIcon}
            iconName="icon-ion_water-outline"
            ariaLabel="Icon of Water"
            customWidth="20"
            customHeight="20"
          />
          <p className={css.listItemText}>Water</p>
        </li>
      )}
    </ul>
  );
};

export default CategoriesList;
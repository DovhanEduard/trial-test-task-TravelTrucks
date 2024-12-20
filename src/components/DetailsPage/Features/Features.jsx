import CategoriesList from 'components/CatalogPage/CategoriesList/CategoriesList';
import css from './Features.module.css';
import { useSelector } from 'react-redux';
import { selectCamper } from '../../../redux/campers/selectors';
import VehicleDetails from '../VehicleDetails/VehicleDetails';

const Features = () => {
  const camper = useSelector(selectCamper);
  return (
    <div className={css.features}>
      {camper !== null && (
        <div className={css.categorieListWrapper}>
          <CategoriesList camper={camper} />
        </div>
      )}
      {camper !== null && <VehicleDetails camper={camper} />}
    </div>
  );
};

export default Features;

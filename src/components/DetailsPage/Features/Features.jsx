import CategoriesList from 'components/CatalogPage/CategoriesList/CategoriesList';
import css from './Features.module.css';
import { useSelector } from 'react-redux';
import { selectCamper } from '../../../redux/campers/selectors';
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import BookForm from '../BookForm/BookForm';

const Features = () => {
  const camper = useSelector(selectCamper);
  return (
    <div className={css.features}>
      <div className={css.wrapper}>
        {camper !== null && (
          <div className={css.categorieListWrapper}>
            <CategoriesList camper={camper} />
          </div>
        )}

        {camper !== null && <VehicleDetails camper={camper} />}
      </div>
      <BookForm />
    </div>
  );
};

export default Features;

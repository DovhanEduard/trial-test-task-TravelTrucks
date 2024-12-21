import css from './MainInfo.module.css';
import { useSelector } from 'react-redux';
import { selectCamper } from '../../../redux/campers/selectors';
import CustomIcon from 'components/Common/CustomIcon/CustomIcon';

const MainInfo = () => {
  const camper = useSelector(selectCamper);

  return (
    <div className={css.mainInfo}>
      {camper !== null && (
        <>
          <h2 className={css.camperName}>{camper.name}</h2>

          <div className={css.textWrapper}>
            <CustomIcon
              styleClass={css.starIcon}
              customWidth="16"
              customHeight="16"
              iconName="star"
              ariaLabel="Star icon"
            />
            <p className={css.ditailsText}>
              {camper.rating}({camper.reviews.length} reviews)
            </p>
            <p className={css.location}>{camper.location}</p>
          </div>
          <p className={css.price}>€{camper.price}</p>
        </>
      )}
    </div>
  );
};

export default MainInfo;

import { useSelector } from 'react-redux';
import css from './CamperDescription.module.css';
import { selectCamper } from '../../../redux/campers/selectors';

const CamperDescription = () => {
  const camper = useSelector(selectCamper);

  return (
    <div className={css.camperDescription}>
      {camper !== null && (
        <p className={css.descriptionText}>{camper.description}</p>
      )}
    </div>
  );
};

export default CamperDescription;

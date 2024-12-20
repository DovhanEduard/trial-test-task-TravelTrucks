import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter';
import css from './VehicleDetails.module.css';

const VehicleDetails = ({ camper }) => {
  return (
    <div>
      <h2 className={css.vehicleDetailsTitle}>Vehicle details</h2>
      <div className={css.detailsTextWrapper}>
        <div className={css.vehicleDetailsTextWrapper}>
          <p className={css.vehicleDetailsText}>Form</p>
          <p className={css.vehicleDetailsText}>
            {capitalizeFirstLetter(camper.form)}
          </p>
        </div>
        <div className={css.vehicleDetailsTextWrapper}>
          <p className={css.vehicleDetailsText}>Length</p>
          <p className={css.vehicleDetailsText}>{camper.length}</p>
        </div>
        <div className={css.vehicleDetailsTextWrapper}>
          <p className={css.vehicleDetailsText}>Width</p>
          <p className={css.vehicleDetailsText}>{camper.width}</p>
        </div>
        <div className={css.vehicleDetailsTextWrapper}>
          <p className={css.vehicleDetailsText}>Height</p>
          <p className={css.vehicleDetailsText}>{camper.height}</p>
        </div>
        <div className={css.vehicleDetailsTextWrapper}>
          <p className={css.vehicleDetailsText}>Tank</p>
          <p className={css.vehicleDetailsText}>{camper.tank}</p>
        </div>
        <div className={css.vehicleDetailsTextWrapper}>
          <p className={css.vehicleDetailsText}>Consumption</p>
          <p className={css.vehicleDetailsText}>{camper.consumption}</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;

import css from './Location.module.css';

const Location = () => {
  return (
    <div className={css.locationWrapper}>
      <h2 className={css.locationText}>Location</h2>
      <input className={css.locationInput} type="text" placeholder="City" />
    </div>
  );
};

export default Location;

import clsx from 'clsx';
import css from './DetailsNav.module.css';
import { NavLink } from 'react-router';

const DetailsNav = () => {
  return (
    <div className={css.DetailsNav}>
      <NavLink className={css.navDetails} to={`features`}>
        Features
      </NavLink>
      <NavLink className={clsx(css.navDetails)} to={`reviews`}>
        Reviews
      </NavLink>
    </div>
  );
};

export default DetailsNav;

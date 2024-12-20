import { Link } from 'react-router';
import css from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  return (
    <div className={css.nav}>
      <Link className={clsx(css.navHome, css.navLink)} to={`/`}>
        Home
      </Link>
      <Link className={css.navLink} to={`/catalog`}>
        Catalog
      </Link>
    </div>
  );
};

export default Navigation;

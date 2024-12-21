import clsx from 'clsx';
import Navigation from '../Navigation/Navigation';
import css from './AppBar.module.css';
import { Link } from 'react-router';

const AppBar = () => {
  return (
    <header className={css.header}>
      <div className={clsx('container', css.headerContainer)}>
        <Link className={css.logo} to="/">
          Travel
          <span className={css.accentColor}>Trucks</span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default AppBar;

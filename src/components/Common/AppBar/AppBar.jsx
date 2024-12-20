import clsx from 'clsx';
import Navigation from '../Navigation/Navigation';
import css from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={css.header}>
      <div className={clsx('container', css.headerContainer)}>
        <p className={css.logo}>
          Travel
          <span className={css.accentColor}>Trucks</span>
        </p>
        <Navigation />
      </div>
    </header>
  );
};

export default AppBar;

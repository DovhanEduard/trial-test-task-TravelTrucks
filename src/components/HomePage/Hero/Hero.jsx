import clsx from 'clsx';
import css from './Hero.module.css';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <section className={css.heroSection}>
      <div className={clsx('container', css.heroContainer)}>
        <div className={css.titleWrapper}>
          <h1 className={css.heroTitle}>Campers of your dreams</h1>
          <p className={css.heroText}>
            You can find everything you want in our catalog
          </p>
          <Link className={css.viewNowLink} to={`/catalog`}>
            View Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import clsx from 'clsx';
import css from './Catalog.module.css';
import Location from '../Location/Location';
import Filters from '../Filtres/Filters';
import CatalogList from '../CatalogList/CatalogList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCampers } from '../../../redux/campers/operations';

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);
  return (
    <section>
      <div className={clsx('container', css.catalogContainer)}>
        <div className={css.sidebar}>
          <Location />
          <Filters />
        </div>
        <div>
          <CatalogList />
        </div>
      </div>
    </section>
  );
};

export default Catalog;

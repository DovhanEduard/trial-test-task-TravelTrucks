import clsx from 'clsx';
import css from './Catalog.module.css';
import Filters from '../Filtres/Filters';
import toast, { toastConfig } from 'react-simple-toasts';
import 'react-simple-toasts/dist/style.css';
import CatalogList from '../CatalogList/CatalogList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCampers } from '../../../redux/campers/operations';
import {
  selectCampersIsLoading,
  selectTotalCampers,
} from '../../../redux/campers/selectors';
import Loader from 'components/Common/Loader/Loader';

const Catalog = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [limitPerPage, setlimitPerPage] = useState(4);
  const [isLastPage, setisLastPage] = useState(false);

  const totalCampers = useSelector(selectTotalCampers);
  const isLoading = useSelector(selectCampersIsLoading);

  useEffect(() => {
    dispatch(getCampers({ page: currentPage }));
  }, [dispatch]);

  const setDefaultState = () => {
    setCurrentPage(1);
    setisLastPage(false);
  };

  toastConfig({
    position: 'bottom-left',
    className: css.toast,
  });

  const handleClick = () => {
    const page = currentPage + 1;

    setCurrentPage(page);

    if (currentPage * limitPerPage > totalCampers) {
      toast('No more campers!');
      setisLastPage(true);
      return;
    }

    dispatch(getCampers({ page: page }));
  };

  return (
    <section className={css.catalogSection}>
      <div className={clsx('container', css.catalogContainer)}>
        <div className={css.sidebar}>
          <Filters setDefaultState={setDefaultState} />
        </div>
        <div className={css.listWrapper}>
          {totalCampers === 0 ? (
            <p className={css.noMatchesText}>No matches found!</p>
          ) : (
            <CatalogList />
          )}
          {isLoading && <Loader />}
          {totalCampers > limitPerPage && (
            <button
              className={clsx(css.loadMoreBtn, {
                ['visually-hidden']: isLastPage,
              })}
              type="button"
              onClick={handleClick}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Catalog;

import { Outlet, useParams } from 'react-router';
import MainInfo from '../MainInfo/MainInfo';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCamperById } from '../../../redux/campers/operations';
import css from './Details.module.css';
import clsx from 'clsx';
import CamperGallery from '../CamperGallery/CamperGallery';
import CamperDescription from '../CamperDescription/CamperDescription';
import DetailsNav from '../DetailsNav/DetailsNav';
import { selectCampersIsLoading } from '../../../redux/campers/selectors';
import Loader from 'components/Common/Loader/Loader';

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const isLoading = useSelector(selectCampersIsLoading);

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [dispatch, id]);

  return (
    <section className={css.detailsSection}>
      <div className={clsx('container', css.detailsContainer)}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div>
              <MainInfo />
              <CamperGallery />
              <CamperDescription />
              <DetailsNav />
              <Outlet />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Details;

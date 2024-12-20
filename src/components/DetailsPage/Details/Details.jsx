import { Outlet, useParams } from 'react-router';
import MainInfo from '../MainInfo/MainInfo';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCamperById } from '../../../redux/campers/operations';
import css from './Details.module.css';
import clsx from 'clsx';
import CamperGallery from '../CamperGallery/CamperGallery';
import CamperDescription from '../CamperDescription/CamperDescription';
import DetailsNav from '../DetailsNav/DetailsNav';

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [dispatch, id]);

  return (
    <div className={clsx('container', css.catalogContainer)}>
      <MainInfo />
      <CamperGallery />
      <CamperDescription />
      <DetailsNav />
      <Outlet />
    </div>
  );
};

export default Details;

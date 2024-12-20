import css from './CamperGallery.module.css';
import { useSelector } from 'react-redux';
import { selectCamper } from '../../../redux/campers/selectors';
import { nanoid } from '@reduxjs/toolkit';

const CamperGallery = () => {
  const camper = useSelector(selectCamper);

  return (
    <ul className={css.gallery}>
      {camper &&
        camper.gallery.map(photo => {
          return (
            <li className={css.galletyItem} key={nanoid()}>
              <div className={css.imageContainer}>
                <img
                  className={css.camperImg}
                  src={photo.original}
                  alt="Detailed truck photo"
                />
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default CamperGallery;

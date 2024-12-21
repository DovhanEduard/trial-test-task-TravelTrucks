import { useSelector } from 'react-redux';
import CatalogListItem from '../CatalogListItem/CatalogListItem';
import css from './CatalogList.module.css';
import { selectCampers } from '../../../redux/campers/selectors';
import { nanoid } from '@reduxjs/toolkit';

const CatalogList = () => {
  const campers = useSelector(selectCampers);

  return (
    <ul className={css.catalogList}>
      {campers.map(camper => {
        return (
          <li className={css.catalogListItem} key={nanoid()}>
            <CatalogListItem camper={camper} />
          </li>
        );
      })}
    </ul>
  );
};

export default CatalogList;

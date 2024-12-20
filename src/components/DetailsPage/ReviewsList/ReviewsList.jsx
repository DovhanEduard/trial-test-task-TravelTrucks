import { nanoid } from '@reduxjs/toolkit';
import ReviewsListItem from '../ReviewsListItem/ReviewsListItem';
import css from './ReviewsList.module.css';

const ReviewsList = ({ camper }) => {
  return (
    <ul className={css.reviewsList}>
      {camper.reviews.map(review => {
        return (
          <li className={css.catalogListItem} key={nanoid()}>
            <ReviewsListItem review={review} />
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsList;

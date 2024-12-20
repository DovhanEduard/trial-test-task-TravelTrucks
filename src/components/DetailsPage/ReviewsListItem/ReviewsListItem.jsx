import { getFirstCapitalLetter } from '../../../utils/capitalizeFirstLetter';
import css from './ReviewsListItem.module.css';

const ReviewsListItem = ({ review }) => {
  return (
    <div>
      <div className={css.wrapper}>
        <span className={css.reviewLogo}>
          {getFirstCapitalLetter(review.reviewer_name)}
        </span>
        <div>
          <p className={css.reviewName}>{review.reviewer_name}</p>
          <p className={css.reviewRating}>Rating: {review.reviewer_rating}</p>
        </div>
      </div>
      <p className={css.reviewComment}>{review.comment}</p>
    </div>
  );
};

export default ReviewsListItem;

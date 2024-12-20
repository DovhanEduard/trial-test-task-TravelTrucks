import { useSelector } from 'react-redux';
import { selectCamper } from '../../../redux/campers/selectors';
import ReviewsList from '../ReviewsList/ReviewsList';
import BookForm from '../BookForm/BookForm';
import css from './Reviews.module.css';

const Reviews = () => {
  const camper = useSelector(selectCamper);

  return (
    <div className={css.reviewsWrapper}>
      {camper && <ReviewsList camper={camper} />} <BookForm />
    </div>
  );
};

export default Reviews;

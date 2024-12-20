import { useSelector } from 'react-redux';
import { selectCamper } from '../../../redux/campers/selectors';
import ReviewsList from '../ReviewsList/ReviewsList';

const Reviews = () => {
  const camper = useSelector(selectCamper);

  return <div>{camper && <ReviewsList camper={camper} />}</div>;
};

export default Reviews;

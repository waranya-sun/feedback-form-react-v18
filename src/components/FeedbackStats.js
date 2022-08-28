import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  let avg =
    feedback.reduce((total, current) => total + current.rating, 0) /
    feedback.length;

  avg = avg.toFixed(1).replace(/[.]0$/, '');
  return (
    <div className='flex justify-between py-5 font-bold'>
      <div>{feedback.length} Reviews</div>
      <div>Average Rating: {isNaN(avg) ? 0 : avg}</div>
    </div>
  );
};

export default FeedbackStats;

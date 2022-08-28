import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';

const FeedBackList = () => {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <div>No Feedback...</div>;
  }
  return (
    <>
      {feedback.map(item => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default FeedBackList;

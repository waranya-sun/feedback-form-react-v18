import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';

const FeedbackItem = ({ item }) => {
  const { handleEditFeedback, handleDeleteFeedback } =
    useContext(FeedbackContext);
  return (
    <Card>
      <div className='w-12 h-12 absolute bg-amber-400 text-white font-bold p-2 text-center rounded-full -top-4 -left-5 text-lg bg-'>
        {item.rating}
      </div>
      <button
        onClick={() => handleEditFeedback(item)}
        className='bg-none border-0 absolute right-11 top-4 text-lg'
      >
        <FaEdit />
      </button>
      <button
        onClick={() => handleDeleteFeedback(item.id)}
        className='bg-none border-0 absolute right-5 top-4 text-lg'
      >
        <FaTimes />
      </button>
      <div>{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;

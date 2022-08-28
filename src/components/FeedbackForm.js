import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
import RatingSelect from './RatingSelect';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [warningMsg, setWarningMsg] = useState('');
  const [isDisabled, setDisabled] = useState(true);
  const { handleAddFeedback, feedbackEdit, handleUpdatedFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleChangeRating = rating => {
    setRating(rating);
  };

  const handleInputChange = e => {
    //Real-time validation
    // Have to use e.target.value because if we use text state, the fisrt time of calling this function the text state will always be empty string because of default value
    let input = e.target.value;
    if (input === '') {
      setWarningMsg('');
      setDisabled(true);
    } else if (input.trim().length <= 10) {
      setWarningMsg('* Text must be more than 10 characters');
      setDisabled(true);
    } else {
      setWarningMsg(null);
      setDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newFeedback = {
      rating,
      text,
    };

    if (feedbackEdit.edit === true) {
      handleUpdatedFeedback(feedbackEdit.item.id, newFeedback);
    } else {
      handleAddFeedback(newFeedback);
    }
    setDisabled(true);
    setRating(10);
    setText('');
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2 className='font-bold text-2xl text-center'>
          How satified are you with our product ?
        </h2>
        <RatingSelect
          rating={rating}
          onHandleChangeRating={handleChangeRating}
        />
        <div className='flex flex-row border border-gray-200 p-2 rounded items-center'>
          <input
            className='p-2 border-0 grow text-lg w-4/5 focus:outline-none'
            type='text'
            value={text}
            onChange={handleInputChange}
            placeholder='Write a comment'
          />
          <button
            type='submit'
            className='text-white w-24 h-8 border-0 rounded cursor-pointer text-lg bg-sky-400 disabled:bg-gray-200 disabled:text-black disabled:cursor-auto'
            disabled={isDisabled}
          >
            Submit
          </button>
        </div>
        {warningMsg && <div className='text-red-600 pt-2'>{warningMsg}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;

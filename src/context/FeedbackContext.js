import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'This stuff really works I will be buying more.',
    },
    {
      id: 2,
      rating: 9,
      text: 'Amazing product and good price.',
    },
    {
      id: 3,
      rating: 8,
      text: 'I bought this a month ago and I’m really happy with it.',
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const handleAddFeedback = newFeedback => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const handleUpdatedFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map(item => {
        if (item.id === id) {
          return (item = updatedItem);
        }
        return item;
      })
    );
  };

  const handleEditFeedback = item => {
    setFeedbackEdit({ item, edit: true });
  };

  const handleDeleteFeedback = id => {
    if (window.confirm('Do you want to delete a comment?')) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleDeleteFeedback,
        handleAddFeedback,
        handleEditFeedback,
        feedbackEdit,
        handleUpdatedFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

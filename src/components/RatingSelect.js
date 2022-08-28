const RatingSelect = ({ rating, onHandleChangeRating }) => {
  return (
    <ul className='list-none flex justify-center flex-wrap  my-9'>
      {Array.from({ length: 10 }, (_, i) => (
        <li
          className='bg-gray-200 w-12 h-12 rounded-full text-center p-2 relative text-lg duration-300 m-1 hover:bg-amber-400 hover:text-white'
          key={`rating-${i + 1}`}
        >
          <input
            className='opacity-0 peer'
            type='radio'
            name='rating'
            id={`num${i + 1}`}
            value={i + 1}
            onChange={() => onHandleChangeRating(i + 1)}
            checked={rating === i + 1}
          />
          <label
            className='absolute w-12 h-12 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-2 
            peer-checked:bg-amber-400 peer-checked:text-white'
            htmlFor={`num${i + 1}`}
          >
            {i + 1}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default RatingSelect;

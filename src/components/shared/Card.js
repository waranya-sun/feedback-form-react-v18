const Card = ({ children }) => {
  return (
    <div className='border-4 border-sky-400 p-12 mb-6 rounded-lg relative'>
      {children}
    </div>
  );
};

export default Card;

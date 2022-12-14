import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='w-full text-center bg-black text-white py-4 relative'>
      <div>
        <a className='no-underline text-white text-xl font-bold' href='/'>
          <h2>Feedback Form</h2>
        </a>
        <Link
          to='/about'
          className='absolute right-5 top-4 bg-amber-400 py-1 px-2 rounded text-white font-bold no-underline'
        >
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;

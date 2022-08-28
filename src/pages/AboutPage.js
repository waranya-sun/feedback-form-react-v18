import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';
const AboutPage = () => {
  return (
    <Card>
      <div className='leading-9'>
        <h1 className='text-xl font-bold mb-4'>About the project</h1>
        <p>This is a React application, using following technologies : </p>
        <ul className='ml-9 list-disc mb-2'>
          <li>Context API</li>
          <li>React Router V6</li>
          <li>React Icons package</li>
          <li>TailwindCSS</li>
          <li>UUID package</li>
          <li>AWS</li>
        </ul>

        <p>Version : 1.0</p>
        <div className='text-center'>
          <Link
            to='/'
            className='no-underline bg-sky-400 py-1 px-2 rounded  inline-block mt-4'
          >
            Back to HomePage
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default AboutPage;

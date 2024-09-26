import { Link } from 'react-router-dom';
import ErrorImage from '../assets/images/error-404.svg';

const ErrorPage = () => {
  return (
    <section className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-lg'>
        <div className='text-center'>
          <img src={ErrorImage} alt='Error 404' className='mx-auto' />
          <h1 className='mt-4 text-3xl font-bold'>Sorry, page not found</h1>
          <p className='mt-2 text-gray-700'>Unfortunately the page you are looking for does not exist</p>
          <Link href={'/'} className='block px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600'>
            Go Back To Home Page
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;

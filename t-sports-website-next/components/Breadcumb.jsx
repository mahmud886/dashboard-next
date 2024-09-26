import { Link, useLocation } from 'react-router-dom';
// import SlashImg from './assets/slash.png';

const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="">
      <ul className="flex gap-3 text-xl text-tsWhite items-center">
        <li className="flex items-center">
          <Link
            to="/"
            className={`cursor-pointer p-4 rounded-md hover:text-tsRed hover:font-normal transition-all duration-300 ${location.pathname === '/' && ' text-white'}`}
          >
            Home
          </Link>
          {pathSegments.length > 0 && '/'}
        </li>
        {pathSegments.map((segment, index) => (
          <li key={index} className="flex items-center">
            {index === pathSegments.length - 1 ? (
              <span className="text-white rounded-md">{capitalizeFirstLetter(segment)}</span>
            ) : (
              <>
                <Link
                  to={`/${pathSegments.slice(0, index + 1).join('/')}`}
                  className="cursor-pointer p-4 rounded-md"
                >
                  {capitalizeFirstLetter(segment)}
                </Link>

                {/*<img src={SlashImg} className="w-5 h-5 ml-2" alt="slash" />*/}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;

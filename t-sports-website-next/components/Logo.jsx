import Brand from '../assets/images/Logo tsports.svg';
import Link from "next/link";
const Logo = () => {
  return (
    <Link href='/'>
      <img src={Brand} alt='Brand' className='w-[170px]' />
    </Link>
  );
};

export default Logo;

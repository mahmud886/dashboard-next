import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/images/logo-dark.svg' className='w-[120px] h-[54px]' width={120} height={54} alt='Logo' priority={true} quality={50} />
    </Link>
  );
};

export default Logo;
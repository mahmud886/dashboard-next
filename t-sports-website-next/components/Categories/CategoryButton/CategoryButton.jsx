
// eslint-disable-next-line react/prop-types
const CategoryButton = ({ selectedCategory, onCategoryChange }) => {
  const categories = ['All', 'Cricket', 'Football', 'Others'];

  return (
    <div className='flex w-full max-w-full md:max-w-[50%] bg-tsGrey'>
      {categories.map((category, index) => (
        <button
          key={index}
          className={`w-full flex justify-center items-center leading-none text-[16px] md:text-[22px] font-normal md:px-10 py-4 text-black hover:text-tsWhite hover:bg-tsRed ${selectedCategory === category ? 'text-tsWhite bg-tsRed' : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButton;


// flex w-full md:max-w-[40%] bg-tsGrey
// <a href="#" aria-current="false"
//    className="w-full flex justify-center items-center text-[20px] md:text-[34px] font-medium px-3 py-4 text-white bg-tsRed">
//   All
// </a>

// <a href="#" aria-current="false"
//    className="w-full flex justify-center items-center text-[20px] md:text-[30px] font-medium px-3 py-4 text-tsBlack hover:text-tsWhite hover:bg-tsRed">
//   Others
// </a>
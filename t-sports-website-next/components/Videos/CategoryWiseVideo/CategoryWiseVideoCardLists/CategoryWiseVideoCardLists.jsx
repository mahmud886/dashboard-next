import HorizontalVideoCard from "../../../Cards/VideoCard/HorizontalVideoCard.jsx";
import highlights1 from "../../../../assets/images/highlights/highlights1.png";
import highlights2 from "../../../../assets/images/highlights/highlights2.png";
import highlights3 from "../../../../assets/images/highlights/highlights3.png";
import highlights4 from "../../../../assets/images/highlights/highlights4.png";
import highlights5 from "../../../../assets/images/highlights/highlights5.png";
import highlights6 from "../../../../assets/images/highlights/highlights6.png";

const contentArray = [
  {
    "imgUrl": highlights1,
    "runTime": "5:20",
    "seriesName": "ICC Mens cricket world cup India 2023",
    "views": '10.3k',
    "publishDate": "2024-01-15",
    "videoTitle": "kNOCK OUT : nZ VS BAN Match Highlights",
    "category": "Cricket",
    "subCategory": "ICC"
  },
  {
    "imgUrl": highlights2,
    "runTime": "5:20",
    "seriesName": "Europa League 2021",
    "views": '7.3k',
    "publishDate": "2024-01-15",
    "videoTitle": "Europa League 2021 Jose Mourinho's emotional interview",
    "category": "Football",
    "subCategory": "ICC"
  },
  {
    "imgUrl": highlights3,
    "runTime": "10:20",
    "seriesName": "India tour of  South  Africa",
    "views": '5.3k',
    "publishDate": "2024-01-15",
    "videoTitle": "India vs South Africa: Kohli Hails 'Brilliant' Rohit, Mayank & Bowlers After Test Win",
    "category": "Cricket",
    "subCategory": "ICC"
  },
  {
    "imgUrl": highlights4,
    "runTime": "15:20",
    "seriesName": "India tour of  South  Africa",
    "views": '6.3k',
    "publishDate": "2024-01-15",
    "videoTitle": "India vs South Africa: Kohli Hails 'Brilliant' Rohit, Mayank & Bowlers After Test Win",
    "category": "Cricket",
    "subCategory": "ICC"
  },
  {
    "imgUrl": highlights5,
    "runTime": "25:20",
    "seriesName": "ICC Bangladesh Tour of Afghanistan",
    "views": '3.3k',
    "publishDate": "2024-01-15",
    "videoTitle": "Afghanistan are confident to win the game in absence of Rashid: Shahidi",
    "category": "Others",
    "subCategory": "Others"
  },
  {
    "imgUrl": highlights6,
    "runTime": "2:20",
    "seriesName": "Europa League 2023",
    "views": '3.3k',
    "publishDate": "2024-01-15",
    "videoTitle": "Miami move 'opposite' of PSG switch says happy Messi",
    "category": "Football",
    "subCategory": "ICC"
  },
]

const CategoryWiseVideoCardLists = () => {
  return (
    <div className='container py-[80px]'>


      <h2
        className='inline-flex items-center gap-2 md:gap-4 text-[24px] md:text-[38px] font-archivo font-normal capitalize'>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 0C7.17769 0 0 7.17769 0 16C0 24.8223 7.17769 32 16 32C24.8223 32 32 24.8223 32 16C32 7.17769 24.8223 0 16 0ZM21.7515 16.7154L12.9477 22.0338C12.8215 22.1094 12.6775 22.1501 12.5304 22.1517C12.3833 22.1533 12.2384 22.1157 12.1106 22.0428C11.9829 21.9699 11.8768 21.8643 11.8033 21.7369C11.7297 21.6095 11.6915 21.4648 11.6923 21.3177V10.6823C11.6915 10.5352 11.7297 10.3905 11.8033 10.2631C11.8768 10.1357 11.9829 10.0301 12.1106 9.95722C12.2384 9.88433 12.3833 9.84674 12.5304 9.84831C12.6775 9.84988 12.8215 9.89055 12.9477 9.96615L21.7515 15.2846C21.8743 15.3594 21.9757 15.4645 22.0461 15.5897C22.1164 15.715 22.1534 15.8563 22.1534 16C22.1534 16.1437 22.1164 16.285 22.0461 16.4103C21.9757 16.5355 21.8743 16.6406 21.7515 16.7154Z"
            fill="#333333"/>
        </svg>
        Match Highlights
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-[60px] mb-[40px]'>

        {contentArray.map((content, index) => (
          <HorizontalVideoCard key={index} content={content} />
        ))}

      </div>
    </div>
  );
};

export default CategoryWiseVideoCardLists;
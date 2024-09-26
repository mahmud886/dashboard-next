
import CategoryButton from "../../../Categories/CategoryButton/CategoryButton.jsx";
import HorizontalVideoCard from "../../../Cards/VideoCard/HorizontalVideoCard.jsx";
import highlights1 from "../../../../assets/images/highlights/highlights1.png";
import highlights2 from "../../../../assets/images/highlights/highlights2.png";
import highlights3 from "../../../../assets/images/highlights/highlights3.png";
import highlights4 from "../../../../assets/images/highlights/highlights4.png";
import highlights5 from "../../../../assets/images/highlights/highlights5.png";
import highlights6 from "../../../../assets/images/highlights/highlights6.png";
import useCategories from "../../../../hooks/useCategories.js";

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


const SingleRecentSeriesVideoLists = () => {
  const { selectedCategory, filteredContent, handleCategoryChange } = useCategories(contentArray);
  return (
    <div className='max-w-[80%] mx-auto py-[80px]'>
      <div className='pb-10'>
        <CategoryButton selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
      </div>
      <div>
        <h2 className='text-tsBlack font-semibold font-archivo capitalize'>Big Bash League 2023-24</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-[40px]'>

          {filteredContent.map((content, index) => (
            <HorizontalVideoCard key={index} content={content} />
          ))}

        </div>

      </div>
    </div>
  );
};

export default SingleRecentSeriesVideoLists;
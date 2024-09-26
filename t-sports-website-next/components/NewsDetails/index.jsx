import NewsHeader from "./NewsHeader/NewsHeader.jsx";
import NewsContent from "./NewsContent/NewsContent.jsx";
import NewsFacebookComment from "./NewsContent/NewsFacebookComment.jsx";


const NewsDetailsIndex = () => {
  return (
    <div className='container py-[80px]'>
      <NewsHeader/>
      <NewsContent/>
      <NewsFacebookComment/>
    </div>
  );
};

export default NewsDetailsIndex;
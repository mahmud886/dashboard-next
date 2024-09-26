
import NewsHeaderSlider from "./NewsHeaderSlider/NewsHeaderSlider.jsx";
import NewsNavs from "./NewsNavs/NewsNavs.jsx";
import NewsGallary from "./NewsGallary/NewsGallary.jsx";
import NewsBannerAdds from "./NewsBannerAdds/NewsBannerAdds.jsx";
import NewsSlider from "./NewsSlider/NewsSlider.jsx";
import MoreNews from "./MoreNews/MoreNews.jsx";
import FollowAndDownloadApp from "../FollowAndDownloadApp/FollowAndDownloadApp.jsx";

const NewsIndex = () => {
  return (
    <>
      <NewsHeaderSlider/>
      <NewsNavs/>
      <NewsGallary/>
      <NewsBannerAdds />
      <NewsSlider/>
      <MoreNews/>
      <FollowAndDownloadApp/>
    </>
  );
};

export default NewsIndex;

import ContentPlayHeader from "./ContentPlayHeader/ContentPlayHeader.jsx";
import VideoPlayer from "./VideoPlayer/VideoPlayer.jsx";
import UpNextSlider from "./UpNextSlider/UpNextSlider.jsx";
import ContentLists from "./ContentLists/ContentLists.jsx";

const ContentPlayIndex = () => {
  return (
    <div className='container py-[80px]'>
      <ContentPlayHeader/>
      <VideoPlayer/>
      <UpNextSlider/>
      <ContentLists/>
    </div>
  );
};

export default ContentPlayIndex;
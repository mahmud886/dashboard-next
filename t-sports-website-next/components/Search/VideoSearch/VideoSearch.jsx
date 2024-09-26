
import HorizontalVideoCard from "../../Cards/VideoCard/HorizontalVideoCard.jsx";

const VideoSearch = () => {
  return (
    <div className='max-w-[80%] mx-auto py-[20px] '>
      <h2 className='font-bengali2 text-tsBlack text-[60px]'>6 result found for “Highlight”</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-[80px]'>

        <HorizontalVideoCard/>

      </div>
    </div>
  );
};

export default VideoSearch;
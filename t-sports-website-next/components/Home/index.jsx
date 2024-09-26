import HomeNewsSlider from "@/components/Home/HomeNewsSlider/HomeNewsSlider";
import HomeLiveMatchSlider from "@/components/Home/HomeLiveMatchSlider/HomeLiveMatchSlider";
import HomeVideoSlider from "@/components/Home/HomeVideoSlider/HomeVideoSlider";
import HomeDownloadBanner from "@/components/Home/HomeDownloadBanner/HomeDownloadBanner";
import HomeSportsBanner from "@/components/Home/HomeSportsBanner/HomeSportsBanner";


const HomeIndex = () => {
  return (
    <>

      <HomeNewsSlider/>
      <HomeLiveMatchSlider/>

      <HomeVideoSlider/>

      {/*<div className='max-w-[90%] mx-auto py-[80px] '>*/}
      {/*  <VerticalVideoCard title='Videos' heading='SEMI FINAL : IND VS PAK Match Highlights'/>*/}
      {/*</div>*/}
      <HomeDownloadBanner/>
      <HomeSportsBanner/>
    </>
  );
};

export default HomeIndex;
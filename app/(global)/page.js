import {getApplicationSettings} from "@/serivces/api-service";
import CoverflowSlider from "@/components/CoverflowSlider";
import MovieCardSlider from "@/components/MovieCardSlider";


export default async function Home() {
  const appConfig =  await getApplicationSettings();
  console.log(appConfig);
  return (
    <>
      <CoverflowSlider/>

      <MovieCardSlider/>
      <div className='container'>
        <h2>Hello</h2>
      </div>
    </>

  );
}

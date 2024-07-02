import CoverflowSlider from "@/components/CoverflowSlider";
import MovieCardSlider from "@/components/MovieCardSlider";


export default async function Home() {
  // const data = await getContents();
  // console.log(data);
  return (
    <>
      <CoverflowSlider/>

      <MovieCardSlider/>
      <div className='container'>
      </div>
    </>

  );
}

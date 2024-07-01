import {getApplicationSettings} from "@/serivces/api-service";


export default async function Home() {
  const appConfig =  await getApplicationSettings();
  console.log(appConfig);
  return (
    <div className='container'>
      <h2>Hello</h2>
    </div>
  );
}

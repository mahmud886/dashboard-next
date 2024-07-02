import { dataDecript } from "@/lib/decryptService";

export async function getContents() {
  // http://172.30.40.36:8080/
  // [GET] {HOST}/v1/private/{device_type}/contents/vod/{category_id}/{sub_category_id}/{limit}/{offset}/{db_version}
  const res = await fetch('http://172.30.40.36:8080/v1/private/3/contents/vod/1/1/10/0/0');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.text();
  return dataDecript(data);
}
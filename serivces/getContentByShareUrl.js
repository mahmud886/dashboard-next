import { dataDecript } from "@/lib/decryptService";

export async function getContentByShareUrl() {
  

  const res = await fetch('http://172.30.40.36:8080/v1/private/3/content-by-share-url/0?videoShareUrl=abc');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.text();
  return dataDecript(data);
}
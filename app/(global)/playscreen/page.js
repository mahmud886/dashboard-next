'use client'
import { getContentByShareUrl } from '@/serivces/getContentByShareUrl';
import React,{useState,useEffect} from 'react';

const PlayScreen = () => {
  const [shareData, setShareData] = useState([]);
    useEffect(() => {
    const fetchUser = async () => {
          try {
              let data = await getContentByShareUrl(); // Replace 'user-id' with actual user ID
              data = JSON.parse(data);
              setShareData(data?.data?.contents);
              console.log(data);
          } catch (error) {
              console.error('Error fetching user:', error);

          }
        };
        fetchUser();
    }, []);

  return (
    <div>
      <h2>PlayScreen</h2>
    </div>
  );
};

export default PlayScreen;
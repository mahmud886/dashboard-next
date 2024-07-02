'use client'
import VideoJS from '@/components/VideoJs';
import { getContentByShareUrl } from '@/serivces/getContentByShareUrl';
import { getContents } from '@/serivces/getContents';
import React,{useState,useEffect} from 'react';

// This imports the functional component from the previous sample.
const PlayScreen = () => {
  const [shareData, setShareData] = useState([]);
  const [contentData, setContentData] = useState([]);

  const playerRef = React.useRef(null);
  const fetchContentByShareUrlData = async () => {
    try {
        let data = await getContentByShareUrl(); // Replace 'user-id' with actual user ID
        data = JSON.parse(data);
        setShareData(data?.data?.contents);
        console.log(data);
    } catch (error) {
        console.error('Error fetching user:', error);

    }
  };
  const fetchContentData = async () => {
    try {
      let data = await getContents(); // Replace 'user-id' with actual user ID
      data = JSON.parse(data);
      setContentData(data?.data?.contents);
      console.log(data);
  } catch (error) {
      console.error('Error fetching user:', error);

  }
};

    useEffect(() => {
      fetchContentData();
        fetchContentByShareUrlData();
    }, []);

    const videoJsOptions = {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      loop:true,
      preload:'auto',
      breakpoints: {
        tiny: 300,
        xsmall: 400,
        small: 500,
        medium: 600,
        large: 700,
        xlarge: 800,
        huge: 900
      },
      disablePictureInPicture:false,
      enableDocumentPictureInPicture:true,
      enableSmoothSeeking:true,
      liveui:true,
      playbackRates: [0.5, 1, 1.5, 2],
      controlBar: {
        skipButtons: {
          forward: 5,
          backward: 10
        },

      },
      sources: [{
        // src: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
        src:'http://192.168.5.204:3000/vod/movie/Hollywood/2024/American%20Star%20(2024)/American%20Star%20(2024).mp4/playlist.m3u8',
        type: 'application/x-mpegURL'
      }]
    };
  
    const handlePlayerReady = (player) => {
      playerRef.current = player;
  
      // You can handle player events here, for example:
      player.on('waiting', () => {
        videojs.log('player is waiting');
      });
  
      player.on('dispose', () => {
        videojs.log('player will dispose');
      });
    };
  return (
    <div>
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady}/>
    </div>
  );
};

export default PlayScreen;
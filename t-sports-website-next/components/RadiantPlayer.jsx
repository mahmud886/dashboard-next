import React, { useEffect, useRef } from "react";

const RadiantPlayer = () => {
  useEffect(() => {
    const src = {
        dash: 'https://5b44cf20b0388.streamlock.net:8443/vod/smil:bbb.smil/manifest.mpd'
      };
      const settings = {
        licenseKey: 'ZW5ieGlkcGtna0AxNjQwODAz',
        src,
        skin: 's2',
        autoHeightMode: true,
        autoHeightModeRatio: 2.4,
        autoplay: true,
        preload: 'smart',
        // playback: {
        //   autoplay: true,
        //   mute: true,
        // },
        plugins: {
          quality: {
            enabled: true,
            defaultQuality: 'auto',
          },
        },
  
        style: {
          width: '100%',
          height: '100%',
          aspectRatio: '16/9',
          objectFit: 'contain',
        },
      };
      const elementID = 'rmp';
      //const rmp = new window.RadiantMP(elementID);
      const rmp = new RadiantMP(elementID);
      rmp.init(settings);

      return () => {
      // Cleanup the player instance on component unmount
      rmp.destroy();
    };
  
   
  }, [])
  

  return  <div id="rmp"></div>;
}

export default RadiantPlayer;

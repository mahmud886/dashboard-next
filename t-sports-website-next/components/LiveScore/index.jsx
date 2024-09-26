import React from 'react'
import LiveScoreBanner from './LiveScoreBanner/LiveScoreBanner'
import LiveScoreBoard from './LiveScoreBoard/LiveScoreBoard'
import FollowAndDownloadApp from "../FollowAndDownloadApp/FollowAndDownloadApp.jsx";

const LiveScoreIndex = () => (
    <div className='container'>
        <LiveScoreBanner />
        <LiveScoreBoard />
        <FollowAndDownloadApp/>
    </div>
)

export default LiveScoreIndex
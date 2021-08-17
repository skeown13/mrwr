import React from "react"
import VideoItem from "./VideoItem"

const VideoList = ({ videos, onVideoSelect }) => {
  const myVideos = videos.map(video => {
    return <VideoItem video={video} onVideoSelect={onVideoSelect} />
  })

  return <div>{myVideos}</div>
}

export default VideoList

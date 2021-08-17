import React from "react"
import VideoItem from "./VideoItem"

// const VideoList = ({ videos }) => {
//   const myVideos = videos.map(video => {
//     return <VideoItem videoId={video.id.videoId} />
//   })
//   const videoThumbnail = videos.map(video => {
//     return <VideoItem videoThumbnail={video.snippet.thumbnails.medium} />
//   })
//   return (
//     <div>
//       <div>{myVideos}</div>
//       <div>{videoThumbnail}</div>
//     </div>
//   )
// }

const VideoList = ({ videos }) => {
  const myVideos = videos.map(video => {
    return <VideoItem video={video} />
  })

  return <div>{myVideos}</div>
}

export default VideoList

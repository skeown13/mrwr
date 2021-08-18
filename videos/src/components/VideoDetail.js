import React from "react"
import { Segment, Header } from "semantic-ui-react"

const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`

  return (
    <div>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        title="video player"
        src={videoSrc}
        frameBorder="0"
      ></iframe>

      <Segment>
        <Header as="h3">{selectedVideo.snippet.title}</Header>
        <p>{selectedVideo.snippet.description}</p>
      </Segment>
    </div>
  )
}

export default VideoDetail

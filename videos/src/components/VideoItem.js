import "./VideoItem.css"
import React from "react"
import { Item } from "semantic-ui-react"

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Item.Group onClick={() => onVideoSelect(video)} className="video-item">
      <Item>
        <Item.Image
          alt={video.snippet.description}
          src={video.snippet.thumbnails.medium.url}
          className="video-image"
        />
        <Item.Content verticalAlign="middle">
          <Item.Header as="a">{video.snippet.title}</Item.Header>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}

export default VideoItem

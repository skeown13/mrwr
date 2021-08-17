import React from "react"
import { Item } from "semantic-ui-react"

const VideoItem = ({ video }) => {
  return (
    <Item.Group>
      <Item>
        <Item.Image
          alt={video.snippet.description}
          src={video.snippet.thumbnails.medium.url}
        />
        <Item.Content verticalAlign="middle">
          <Item.Header as="a">{video.snippet.title}</Item.Header>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}

export default VideoItem

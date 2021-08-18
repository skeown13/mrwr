import React from "react"
import { Grid } from "semantic-ui-react"
import youtube from "../api/youtube"
import SearchBar from "./SearchBar"
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"

class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  componentDidMount() {
    this.onSearchSubmit("puppies")
  }

  onSearchSubmit = async term => {
    const res = await youtube.get("/search", {
      params: {
        maxResults: 5,
        q: term,
      },
    })

    console.log(res)
    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] })
  }

  onVideoSelect = video => {
    console.log("we got clicked App", video)
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column width={11}>
              <VideoDetail selectedVideo={this.state.selectedVideo} />
            </Grid.Column>
            <Grid.Column width={5}>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default App

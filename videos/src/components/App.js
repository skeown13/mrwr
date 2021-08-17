import React from "react"
import youtube from "../api/youtube"
import SearchBar from "./SearchBar"
import VideoList from "./VideoList"

class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  onSearchSubmit = async term => {
    const res = await youtube.get("/search", {
      params: {
        maxResults: 5,
        q: term,
      },
    })

    console.log(res)
    this.setState({ videos: res.data.items })
  }

  onVideoSelect = video => {
    console.log("we got clicked App", video)
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    )
  }
}

export default App

import React from "react"
import youtube from "../api/youtube"
import SearchBar from "./SearchBar"
import VideoList from "./VideoList"

class App extends React.Component {
  state = { videos: [] }

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

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App

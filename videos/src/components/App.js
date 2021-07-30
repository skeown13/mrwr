import React from "react"
import SearchBar from "./SearchBar"
import axios from "axios"

class App extends React.Component {
  state = { videos: [] }

  onSearchSubmit = () => {}

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar />
      </div>
    )
  }
}

export default App

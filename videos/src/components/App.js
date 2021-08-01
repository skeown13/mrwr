import React from "react"
import SearchBar from "./SearchBar"
import axios from "axios"

class App extends React.Component {
  state = { videos: [] }

  onSearchSubmit = () => {
    axios.get().then(res => {
      console.log(res)
    })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar />
      </div>
    )
  }
}

export default App

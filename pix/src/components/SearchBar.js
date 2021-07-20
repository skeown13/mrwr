import React from "react"

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" id="searchMe" placeholder="Whatcha want?" />
        </form>
      </div>
    )
  }
}

export default SearchBar

import React from "react"
import { Input, Segment, Form, Label } from "semantic-ui-react"

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value)
  }

  render() {
    return (
      <Segment>
        <Form>
          <Form.Field>
            <Label>Image Search</Label>
            <Input
              placeholder="Whatcha want?..."
              onChange={this.onInputChange}
            />
            {/* If we put () at end of onInputChange it would automatically call every time rendered. By leaving them off (referencing) it allows for it to be called at some point in the future. It is still a callback function. */}
          </Form.Field>
        </Form>
      </Segment>
    )
  }
}

export default SearchBar

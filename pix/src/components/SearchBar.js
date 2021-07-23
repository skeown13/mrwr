import React from "react"
import { Input, Segment, Form, Label } from "semantic-ui-react"

class SearchBar extends React.Component {
  state = { term: "" }

  onFormSubmit = event => {
    event.preventDefault()

    console.log(this.state.term)
  }

  render() {
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <Label>Image Search</Label>
            <Input
              placeholder="Whatcha want?..."
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </Form.Field>
        </Form>
      </Segment>
    )
  }
}

export default SearchBar

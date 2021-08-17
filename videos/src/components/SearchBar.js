import React from "react"
import { Input, Form, Label, Segment } from "semantic-ui-react"

class SearchBar extends React.Component {
  state = { term: "" }

  onFormSubmit = e => {
    e.preventDefault()

    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <Label>Video Search</Label>
            <Input
              value={this.state.term}
              onChange={e => {
                this.setState({ term: e.target.value })
              }}
              placeholder="Your Desired Video?"
            />
          </Form.Field>
        </Form>
      </Segment>
    )
  }
}

export default SearchBar

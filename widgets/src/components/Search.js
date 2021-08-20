import React, { useState } from "react";
import { Container, Form } from "semantic-ui-react";

const Search = () => {
  const [term, setTerm] = useState("");

  return (
    <Container>
      <Form>
        <Form.Field>
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </Form.Field>
      </Form>
    </Container>
  );
};

export default Search;

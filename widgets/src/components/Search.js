import React, { useEffect, useState } from "react";
import { Container, Form } from "semantic-ui-react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    const search = async () => {
      await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: term,
        },
      });
    };
    search();
  }, [term]);

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

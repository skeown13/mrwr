import React, { useState } from "react";
import { Container, Accordion, Icon } from "semantic-ui-react";

const AccordionComponent = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderedItems = items.map((item, index) => {
    return (
      <Container key={item.title}>
        <Accordion fluid styled>
          <Accordion.Title
            active={activeIndex === index}
            index={index}
            onClick={() => setActiveIndex(index)}
          >
            <Icon name="dropdown" />
            {item.title}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === index}>
            <p>{item.content}</p>
          </Accordion.Content>
        </Accordion>
      </Container>
    );
  });

  return <div>{renderedItems}</div>;
};

export default AccordionComponent;

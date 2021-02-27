import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useHistory } from "react-router-dom";

import List from "../components/List";
import ListItem from "../components/ListItem";
import Row from "../components/Row";
import Tag from "../components/Tag";
import TextButton from "../components/TextButton";
import { Buurt, useBuurten } from "../contexts/BuurtenContext";
import { CrossAxisAlignment, MainAxisAlignment } from "../tokens/Alignment";

const BuurtenOverzicht: React.FC = () => {
  const history = useHistory();

  const { buurten } = useBuurten();
  const onClick = (event: React.MouseEvent, buurt: Buurt) => {
    event.preventDefault();
    history.push(`/${buurt.name.toLowerCase()}`);
  };

  return (
    <React.Fragment>
      <Row
        mainAxisAlignment={MainAxisAlignment.spaceBetween}
        crossAxisAlignment={CrossAxisAlignment.baseline}
      >
        <h2>Buurten overzicht</h2>
      </Row>

      <List>
        {buurten.map((buurt, index) => (
          <ListItem key={index}>
            <TextButton
              iconRight={faChevronRight}
              onClick={(event) => onClick(event, buurt)}
            >
              {buurt.name}
            </TextButton>
            {!!buurt.tags.length && (
              <List>
                {buurt.tags.map((tag, index) => (
                  <ListItem key={index}>
                    <Tag key={index}>{tag}</Tag>
                  </ListItem>
                ))}
              </List>
            )}
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

export default BuurtenOverzicht;

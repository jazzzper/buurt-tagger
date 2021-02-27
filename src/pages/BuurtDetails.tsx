import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useHistory, useParams } from "react-router-dom";

import Column from "../components/Column";
import Row from "../components/Row";
import TagForm, { TagFormFields } from "../components/TagForm";
import TextButton from "../components/TextButton";
import { Buurt, useBuurten } from "../contexts/BuurtenContext";
import { CrossAxisAlignment, MainAxisAlignment } from "../tokens/Alignment";

const BuurtDetails: React.FC = () => {
  const { buurtName } = useParams<{ buurtName: string }>();
  const { findBuurt, updateBuurt } = useBuurten();
  const [buurt, setBuurt] = React.useState<Buurt | undefined>();

  const history = useHistory();

  React.useEffect(() => {
    const buurt = findBuurt(buurtName);
    setBuurt(buurt);
  }, [findBuurt]);

  const onTextButtonClick = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      history.push("/");
    },
    [history]
  );

  const onSubmit = React.useCallback(
    (formState: TagFormFields) => {
      if (buurt !== undefined) {
        updateBuurt({ ...buurt, ...formState });
        history.push("/");
      }
    },
    [buurt, updateBuurt, history]
  );

  if (buurt === undefined) {
    return <p>Buurt met de naam {buurtName} bestaat niet</p>;
  }
  return (
    <Column>
      <Row
        mainAxisAlignment={MainAxisAlignment.spaceBetween}
        crossAxisAlignment={CrossAxisAlignment.baseline}
      >
        <h2>{buurt.name}</h2>
        <TextButton onClick={onTextButtonClick} iconLeft={faChevronLeft}>
          Terug
        </TextButton>
      </Row>
      <TagForm buurt={buurt} onSubmit={onSubmit} />
    </Column>
  );
};

export default BuurtDetails;

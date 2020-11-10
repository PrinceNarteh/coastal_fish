import { FunctionComponent } from "react";
import styled from "styled-components";

const Sprite = ({ path, className }) => {
  return (
    <SpriteStyled className={className}>
      <use xlinkHref={path} />
    </SpriteStyled>
  );
};

export default Sprite;

/* Styling */
const SpriteStyled = styled.svg``;

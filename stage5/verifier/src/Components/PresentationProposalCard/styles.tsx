import { lighten, transparentize } from "polished";
import styled from "styled-components";

interface StyleProps {
  validated: boolean;
}
export const Container = styled.div<StyleProps>`
  margin-bottom: 10px;
  color: ${lighten(0.2, "black")};
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-radius: 2px;
  transition: ease-in-out 0.2s;
  background-color: ${({ validated }) =>
    validated ? transparentize(0.8, "green") : transparentize(0.8, "#178fad")};

  &:hover {
    background-color: ${({ validated }) =>
      validated ? null : transparentize(0.9, "#178fad")};

    cursor: ${({ validated }) => (validated ? "default" : "pointer")};
  }
`;

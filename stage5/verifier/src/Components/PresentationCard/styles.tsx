import { lighten, transparentize } from "polished";
import styled from "styled-components";

interface StyleProps {
  verified: any;
  hover: any;
}
export const Container = styled.div`
  margin-bottom: 10px;
  color: ${lighten(0.2, "white")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 10px;
  border-radius: 2px;
  transition: ease-in-out 0.2s;
  background-color: ${"#178fad"};
  position: relative;
  &:hover {
    background-color: ${transparentize(0.2, "#178fad")};
    cursor: pointer;
  }
`;

export const Title = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
`;

export const Text = styled.div`
  margin-bottom: 2px;
  font-size: 12px;
`;

export const ImportantText = styled.div`
  margin-bottom: 3px;
  font-weight: bold;
  font-size: 14px;
`;

export const Verified = styled.div<StyleProps>`
  position: absolute;
  bottom: 8px;
  right: 8px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ verified, hover }) =>
    verified
      ? hover
        ? lighten(0.15, "green")
        : transparentize(0.8, lighten(0.2, "green"))
      : hover
      ? "red"
      : transparentize(0.8, "red")};
  transition: ease-in-out 0.2s;
  color: ${({ hover }) => (hover ? "white" : transparentize(0.6, "white"))};
`;

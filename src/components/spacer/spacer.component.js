import styled from "styled-components/native";
import { space } from "../../infrastructure/theme/spacing";

const sizeVariant = {
  small: space.vsm,
  medium: space.sm,
  large: space.md,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size) => {
  const property = positionVariant[position];
  const value = sizeVariant[size];

  return `${property}: ${value}`;
};

const SpacerView = styled.View`
  ${({ position, size }) => getVariant(position, size)}
`;

export const Spacer = styled.View`
  ${({ position, size }) => getVariant(position, size)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};

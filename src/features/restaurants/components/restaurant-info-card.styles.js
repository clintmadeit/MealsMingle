import styled from "styled-components";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space.md};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const Info = styled.View`
padding: ${(props) => props.theme.space.md};
`;

export const Rating = styled.View`
flex-direction: row;
padding-top: ${(props) => props.theme.space.sm};
padding-bottom: ${(props) => props.theme.space.sm};
`;

export const Section = styled.View`
flex-direction: row;
align-items: center;
`;

export const SectionEnd = styled.View`
flex: 1;
flex-direction: row;
justify-content: flex-end;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;

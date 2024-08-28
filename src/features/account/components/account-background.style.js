import React from "react";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button, TextInput } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/images/Acc.Screen.jpg"),
})`
  flex: 1;
  background-color: "goldenrod";
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.9);
  padding: ${(props) => props.theme.space.xl};
  margin-top: ${(props) => props.theme.space.md};
  border-radius: ${(props) => props.theme.space.md};
`;

export const AuthButton = styled(Button)`
  padding: ${(props) => props.theme.space.sm};
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const AuthInput = styled(TextInput)`
  width: 250px;
`;

export const Title = styled(Text)`
  font-size: 30px;
<<<<<<< HEAD
  color: ${colors.brand.secondary};
=======
  color: ${colors.brand.primary};
>>>>>>> a79124ca94828f75eddc18a7fe865ede6b809ee5
  text-align: center;
  margin-bottom: ${(props) => props.theme.space.md};
  font-family: ${(props) => props.theme.fonts.body};
`;

export const ErrorContainer = styled.View`
<<<<<<< HEAD
  max-width: 250px;
=======
  max-width: 300px;
>>>>>>> a79124ca94828f75eddc18a7fe865ede6b809ee5
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space.md};
  margin-bottom: ${(props) => props.theme.space.md};
`;

import React, { useContext } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { AuthContext } from "../../../services/authentication/auth.context";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space.md};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, isLoading, user } = useContext(AuthContext);

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#BFA100" />
        <Spacer size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
          loading={isLoading}
        />
      </List.Section>
    </SafeArea>
  );
};

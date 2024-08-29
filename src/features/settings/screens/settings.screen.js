import React, { useContext } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { AuthContext } from "../../../services/authentication/auth.context";
import { List } from "react-native-paper";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, isLoading } = useContext(AuthContext);

  return (
    <SafeArea>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <List.Item
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
          loading={isLoading}
        />
      </List.Section>
    </SafeArea>
  );
};

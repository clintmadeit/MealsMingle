import React, { useContext } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Button } from "react-native-paper";
import { AuthContext } from "../../../services/authentication/auth.context";

export const SettingsScreen = () => {
  const { onLogout, isLoading } = useContext(AuthContext);

  return (
    <SafeArea>
      <Text variant="label">Settings</Text>
      <Button mode="contained" loading={isLoading} onPress={onLogout}>
        Logout
      </Button>
    </SafeArea>
  );
};

import React, { useContext, useState } from "react";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
} from "../components/account-background.style";
import { AuthContext } from "../../../services/authentication/auth.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          placeholder="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            placeholder="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthButton
            icon={"lock-open-outline"}
            mode="contained"
            onPress={() => onLogin(email, password)}
            labelStyle={{
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            Login
          </AuthButton>
          {error && (
            <ErrorContainer size="large">
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton
          icon="arrow-left"
          mode="contained"
          onPress={() => navigation.goBack()}
          labelStyle={{
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};

<<<<<<< HEAD
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

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error } = useContext(AuthContext);

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
          <AuthInput
            placeholder="Repeat Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatedPassword(p)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthButton
            icon={"email"}
            mode="contained"
            onPress={() => onRegister(email, password, repeatedPassword)}
            labelStyle={{
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            Register
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
=======
import React from "react";
import { AccountBackground } from "../components/account-background.style";

export const RegisterScreen = () => {
  return <AccountBackground />;
>>>>>>> a79124ca94828f75eddc18a7fe865ede6b809ee5
};

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

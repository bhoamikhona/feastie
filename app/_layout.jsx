import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplayBold: require("../assets/fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf"),
    EphesisRegular: require("../assets/fonts/Ephesis/Ephesis-Regular.ttf"),
    MontserratRegular: require("../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    MontserratMedium: require("../assets/fonts/Montserrat/static/Montserrat-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
        headerTitle: "",
      }}
    />
  );
}

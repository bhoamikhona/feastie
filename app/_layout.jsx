import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplayExtraBold: require("../assets/fonts/Playfair_Display/static/PlayfairDisplay-ExtraBold.ttf"),
    PlayfairDisplayBold: require("../assets/fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf"),
    EphesisRegular: require("../assets/fonts/Ephesis/Ephesis-Regular.ttf"),
    MontserratRegular: require("../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    MontserratMedium: require("../assets/fonts/Montserrat/static/Montserrat-Medium.ttf"),
    MontserratSemiBold: require("../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf"),
    MontserratBold: require("../assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
    MontserratExtraBold: require("../assets/fonts/Montserrat/static/Montserrat-ExtraBold.ttf"),
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

import { Stack, router } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";
import { FavoritesProvider } from "../context/FavoritesContext";

function RootLayoutNav() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) return;
    if (user) {
      router.replace("/(tabs)");
    }
  }, [user, loading]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ gestureEnabled: false }} />
      <Stack.Screen name="(auth)/login" options={{ gestureEnabled: false }} />
      <Stack.Screen
        name="(auth)/register"
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name="(tabs)" options={{ gestureEnabled: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplayMedium: require("../assets/fonts/Playfair_Display/static/PlayfairDisplay-Medium.ttf"),
    PlayfairDisplayExtraBold: require("../assets/fonts/Playfair_Display/static/PlayfairDisplay-ExtraBold.ttf"),
    PlayfairDisplayBold: require("../assets/fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf"),
    EphesisRegular: require("../assets/fonts/Ephesis/Ephesis-Regular.ttf"),
    MontserratRegular: require("../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    MontserratMedium: require("../assets/fonts/Montserrat/static/Montserrat-Medium.ttf"),
    MontserratSemiBold: require("../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf"),
    MontserratBold: require("../assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
    MontserratExtraBold: require("../assets/fonts/Montserrat/static/Montserrat-ExtraBold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <CartProvider>
        <FavoritesProvider>
          <RootLayoutNav />
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  );
}

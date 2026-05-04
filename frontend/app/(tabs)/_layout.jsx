import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function AuthLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fd7e14",
        tabBarInactiveTintColor: "#adb5bd",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#f1f3f5",
          height: height * 0.08,
          paddingVertical: height * 0.012,
        },
        tabBarLabelStyle: {
          fontSize: width * 0.03,
        },
        tabBarIconStyle: {
          marginTop: height * 0.004,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={width * 0.065} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="search-outline"
              size={width * 0.065}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart-outline" size={width * 0.065} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="person-outline"
              size={width * 0.065}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

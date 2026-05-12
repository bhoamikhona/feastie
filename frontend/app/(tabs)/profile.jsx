import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Dimensions,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useAuth } from "../../context/AuthContext";
import { useFavorites } from "../../context/FavoritesContext";

const { width, height } = Dimensions.get("window");

const ACCENT = "#fd7e14";
const MUTED = "#868e96";
const BORDER = "#f1f3f5";
const API_URL = process.env.EXPO_PUBLIC_API_URL;

function StatItem({ label, value }) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function SettingsRow({ icon, label, onPress, trailing }) {
  return (
    <TouchableOpacity
      style={styles.settingsRow}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <View style={styles.settingsRowLeft}>
        <Ionicons
          name={icon}
          size={width * 0.055}
          color={ACCENT}
          style={styles.settingsIcon}
        />
        <Text style={styles.settingsLabel}>{label}</Text>
      </View>
      {trailing ?? (
        <Ionicons name="chevron-forward" size={width * 0.045} color={MUTED} />
      )}
    </TouchableOpacity>
  );
}

export default function Profile() {
  const router = useRouter();
  const { user, token, logout } = useAuth();
  const { favorites } = useFavorites();
  const [notificationsOn, setNotificationsOn] = useState(true);
  const [darkModeOn, setDarkModeOn] = useState(false);
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${API_URL}/api/orders`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setOrderCount(Array.isArray(data) ? data.length : 0);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    if (token) fetchOrders();
  }, [token]);

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "?";

  const handleDeleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "This will permanently delete your account, cart, and order history. This cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              const response = await fetch(`${API_URL}/api/auth/profile`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
              });
              if (!response.ok) throw new Error("Failed to delete account");
              await logout();
              router.replace("/(auth)/register");
              setTimeout(() => {
                Alert.alert(
                  "Account Deleted",
                  "Your account has been permanently deleted.",
                );
              }, 300);
            } catch (error) {
              Alert.alert("Error", error.message);
            }
          },
        },
      ],
    );
  };

  const handleLogout = () => {
    Alert.alert("Log Out", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Log Out",
        style: "destructive",
        onPress: async () => {
          await logout();
          router.replace("/(auth)/login");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.screenTitle}>Profile</Text>
          <View style={styles.avatarWrapper}>
            <View style={[styles.avatar, styles.avatarFallback]}>
              <Text style={styles.avatarInitials}>{initials}</Text>
            </View>
          </View>
          <Text style={styles.userName}>{user?.name}</Text>
          <Text style={styles.userEmail}>{user?.email}</Text>
        </View>

        <View style={styles.statsCard}>
          <StatItem label="Orders" value={orderCount} />
          <View style={styles.statDivider} />
          <StatItem label="Favorites" value={favorites.length} />
          <View style={styles.statDivider} />
          <StatItem label="Saved" value={0} />
        </View>

        <Text style={styles.sectionTitle}>General</Text>
        <View style={styles.settingsCard}>
          <SettingsRow
            icon="person-outline"
            label="Account"
            onPress={() => router.push("/account")}
          />
          <SettingsRow
            icon="receipt-outline"
            label="Order History"
            onPress={() => router.push("/orders")}
          />
          <SettingsRow
            icon="notifications-outline"
            label="Notifications"
            onPress={() => setNotificationsOn((p) => !p)}
            trailing={
              <Switch
                value={notificationsOn}
                onValueChange={setNotificationsOn}
                trackColor={{ false: "#adb5bd", true: ACCENT }}
                thumbColor="#fff"
                ios_backgroundColor="#adb5bd"
              />
            }
          />
          <SettingsRow
            icon="moon-outline"
            label="Dark Mode"
            onPress={() => setDarkModeOn((p) => !p)}
            trailing={
              <Switch
                value={darkModeOn}
                onValueChange={setDarkModeOn}
                trackColor={{ false: "#adb5bd", true: ACCENT }}
                thumbColor="#fff"
                ios_backgroundColor="#adb5bd"
              />
            }
          />
        </View>

        <Text style={styles.sectionTitle}>Support</Text>
        <View style={styles.settingsCard}>
          <SettingsRow
            icon="lock-closed-outline"
            label="Privacy"
            onPress={() => Alert.alert("Privacy", "Coming soon.")}
          />
          <SettingsRow
            icon="help-circle-outline"
            label="Help & Support"
            onPress={() =>
              Alert.alert("Help & Support", "Contact support@feastie.app")
            }
          />
          <SettingsRow
            icon="information-circle-outline"
            label="About"
            onPress={() => Alert.alert("About Feastie", "Version 1.0.0")}
          />
        </View>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.7}
        >
          <Ionicons
            name="log-out-outline"
            size={width * 0.05}
            color="#EB5757"
          />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDeleteAccount}
          activeOpacity={0.7}
        >
          <Ionicons
            name="person-remove-outline"
            size={width * 0.05}
            color="#EB5757"
          />
          <Text style={styles.deleteText}>Delete Account</Text>
        </TouchableOpacity>

        <Text style={styles.version}>Feastie v1.0.0</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContent: { paddingTop: height * 0.08, paddingBottom: height * 0.05 },
  header: {
    alignItems: "center",
    paddingTop: height * 0.015,
    paddingBottom: height * 0.025,
  },
  screenTitle: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: width * 0.055,
    color: "#1E1E1E",
    marginBottom: height * 0.025,
  },
  avatarWrapper: { position: "relative", marginBottom: height * 0.015 },
  avatar: {
    width: width * 0.24,
    height: width * 0.24,
    borderRadius: width * 0.12,
  },
  avatarFallback: {
    backgroundColor: ACCENT,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarInitials: {
    fontFamily: "MontserratBold",
    fontSize: width * 0.09,
    color: "#fff",
  },
  userName: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: width * 0.055,
    color: "#1E1E1E",
  },
  userEmail: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.033,
    color: MUTED,
    marginTop: height * 0.003,
  },
  statsCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: width * 0.05,
    borderRadius: width * 0.04,
    paddingVertical: height * 0.022,
    marginTop: height * 0.01,
    marginBottom: height * 0.03,
    borderWidth: 1,
    borderColor: BORDER,
    elevation: 2,
  },
  statItem: { flex: 1, alignItems: "center" },
  statValue: {
    fontFamily: "MontserratBold",
    fontSize: width * 0.05,
    color: ACCENT,
  },
  statLabel: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.028,
    color: MUTED,
    marginTop: height * 0.003,
  },
  statDivider: { width: 1, backgroundColor: BORDER },
  sectionTitle: {
    fontFamily: "MontserratSemiBold",
    fontSize: width * 0.03,
    color: MUTED,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginLeft: width * 0.06,
    marginBottom: height * 0.01,
  },
  settingsCard: {
    backgroundColor: "#fff",
    marginHorizontal: width * 0.05,
    borderRadius: width * 0.04,
    marginBottom: height * 0.03,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: BORDER,
    elevation: 2,
  },
  settingsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: height * 0.018,
    paddingHorizontal: width * 0.04,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: BORDER,
  },
  settingsRowLeft: { flexDirection: "row", alignItems: "center" },
  settingsIcon: { marginRight: width * 0.03 },
  settingsLabel: {
    fontFamily: "MontserratMedium",
    fontSize: width * 0.038,
    color: "#1E1E1E",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: width * 0.05,
    paddingVertical: height * 0.018,
    borderRadius: width * 0.04,
    backgroundColor: "#FFF0F0",
    marginBottom: height * 0.02,
  },
  logoutText: {
    fontFamily: "MontserratSemiBold",
    fontSize: width * 0.038,
    color: "#EB5757",
    marginLeft: width * 0.02,
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: width * 0.05,
    paddingVertical: height * 0.015,
    marginBottom: height * 0.01,
  },
  deleteText: {
    fontFamily: "MontserratSemiBold",
    fontSize: width * 0.033,
    color: "#EB5757",
    marginLeft: width * 0.02,
  },
  version: {
    fontFamily: "MontserratRegular",
    textAlign: "center",
    fontSize: width * 0.028,
    color: MUTED,
  },
});

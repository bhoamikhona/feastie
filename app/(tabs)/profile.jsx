/**
 * Profile Screen — app/(tabs)/profile.jsx
 *
 * Displays the authenticated user's profile info, quick stats,
 * and grouped settings. Each handler is ready to be wired up
 * to a real navigation action or API call.
 */

import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
  Dimensions,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

/** Accent colour shared with the tab bar (#fd7e14) */
const ACCENT = "#fd7e14";

/** Muted text colour matching tabBarInactiveTintColor */
const MUTED = "#adb5bd";

/** Border colour matching the tab bar's borderTopColor */
const BORDER = "#f1f3f5";

/* ------------------------------------------------------------------ */
/*  Mock Data                                                          */
/* ------------------------------------------------------------------ */

/**
 * Placeholder user object.
 * Replace this with a call to your auth context / user store
 * once that layer is implemented.
 */
const MOCK_USER = {
  name: "Tafadzwa",
  email: "tafadzwa@feastie.app",
  avatarUrl: null,
  stats: { orders: 12, favorites: 5, saved: 3 },
};

/* ------------------------------------------------------------------ */
/*  Shared Components                                                  */
/* ------------------------------------------------------------------ */

/** Single stat column used inside the stats card. */
function StatItem({ label, value }) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

/**
 * A tappable row inside a settings card.
 *
 * @param {string}      icon     - Ionicons icon name
 * @param {string}      label    - Row label
 * @param {Function}    onPress  - Tap handler
 * @param {JSX.Element} trailing - Optional right-side widget (e.g. Switch)
 */
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

/* ------------------------------------------------------------------ */
/*  Screen                                                             */
/* ------------------------------------------------------------------ */

export default function Profile() {
  const router = useRouter();
  const [notificationsOn, setNotificationsOn] = useState(true);
  const [darkModeOn, setDarkModeOn] = useState(false);

  const user = MOCK_USER;

  // Build up to two initials for the avatar fallback
  const initials = user.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  /* ---- Navigation / action handlers ---- */

  const handleEditProfile = () => {
    // TODO: router.push("/profile/edit")
    Alert.alert("Edit Profile", "This will open the profile editor.");
  };

  /** Navigate to the Account Details screen */
  const handleAccount = () => {
    router.push("/account");
  };

  const handlePrivacy = () => {
    // TODO: router.push("/privacy")
    Alert.alert("Privacy", "Control data sharing and visibility preferences.");
  };

  const handleHelp = () => {
    // TODO: router.push("/help")
    Alert.alert("Help & Support", "Visit our FAQ or contact support@feastie.app.");
  };

  const handleAbout = () => {
    Alert.alert("About Feastie", "Version 1.0.0\nBuilt with Expo & React Native.");
  };

  const handleLogout = () => {
    Alert.alert("Log Out", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Log Out",
        style: "destructive",
        onPress: () => {
          // TODO: call auth provider sign-out, then redirect to login
        },
      },
    ]);
  };

  /* ---- Render ---- */

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Avatar & identity */}
        <View style={styles.header}>
          <Text style={styles.screenTitle}>Profile</Text>

          <View style={styles.avatarWrapper}>
            {user.avatarUrl ? (
              <Image source={{ uri: user.avatarUrl }} style={styles.avatar} />
            ) : (
              <View style={[styles.avatar, styles.avatarFallback]}>
                <Text style={styles.avatarInitials}>{initials}</Text>
              </View>
            )}

            <TouchableOpacity style={styles.editBadge} onPress={handleEditProfile}>
              <Ionicons name="pencil" size={width * 0.035} color="#fff" />
            </TouchableOpacity>
          </View>

          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>

        {/* Quick stats */}
        <View style={styles.statsCard}>
          <StatItem label="Orders" value={user.stats.orders} />
          <View style={styles.statDivider} />
          <StatItem label="Favorites" value={user.stats.favorites} />
          <View style={styles.statDivider} />
          <StatItem label="Saved" value={user.stats.saved} />
        </View>

        {/* General settings */}
        <Text style={styles.sectionTitle}>General</Text>
        <View style={styles.settingsCard}>
          <SettingsRow
            icon="person-outline"
            label="Account"
            onPress={handleAccount}
          />
          <SettingsRow
            icon="notifications-outline"
            label="Notifications"
            onPress={() => setNotificationsOn((prev) => !prev)}
            trailing={
              <Switch
                value={notificationsOn}
                onValueChange={setNotificationsOn}
                trackColor={{ false: "#ddd", true: ACCENT }}
                thumbColor="#fff"
              />
            }
          />
          <SettingsRow
            icon="moon-outline"
            label="Dark Mode"
            onPress={() => setDarkModeOn((prev) => !prev)}
            trailing={
              <Switch
                value={darkModeOn}
                onValueChange={setDarkModeOn}
                trackColor={{ false: "#ddd", true: ACCENT }}
                thumbColor="#fff"
              />
            }
          />
        </View>

        {/* Support settings */}
        <Text style={styles.sectionTitle}>Support</Text>
        <View style={styles.settingsCard}>
          <SettingsRow
            icon="lock-closed-outline"
            label="Privacy"
            onPress={handlePrivacy}
          />
          <SettingsRow
            icon="help-circle-outline"
            label="Help & Support"
            onPress={handleHelp}
          />
          <SettingsRow
            icon="information-circle-outline"
            label="About"
            onPress={handleAbout}
          />
        </View>

        {/* Log out */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.7}
        >
          <Ionicons name="log-out-outline" size={width * 0.05} color="#EB5757" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <Text style={styles.version}>Feastie v1.0.0</Text>
      </ScrollView>
    </View>
  );
}

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const styles = StyleSheet.create({
  /* Layout */
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingTop: height * 0.08,
    paddingBottom: height * 0.05,
  },

  /* Header */
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

  /* Avatar */
  avatarWrapper: {
    position: "relative",
    marginBottom: height * 0.015,
  },
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
  editBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#333",
    width: width * 0.07,
    height: width * 0.07,
    borderRadius: width * 0.035,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },

  /* User info */
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

  /* Stats card */
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
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
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
  statDivider: {
    width: 1,
    backgroundColor: BORDER,
  },

  /* Section headings */
  sectionTitle: {
    fontFamily: "MontserratSemiBold",
    fontSize: width * 0.03,
    color: MUTED,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginLeft: width * 0.06,
    marginBottom: height * 0.01,
  },

  /* Settings cards */
  settingsCard: {
    backgroundColor: "#fff",
    marginHorizontal: width * 0.05,
    borderRadius: width * 0.04,
    marginBottom: height * 0.03,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: BORDER,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
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
  settingsRowLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingsIcon: {
    marginRight: width * 0.03,
  },
  settingsLabel: {
    fontFamily: "MontserratMedium",
    fontSize: width * 0.038,
    color: "#1E1E1E",
  },

  /* Log out */
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

  /* Footer */
  version: {
    fontFamily: "MontserratRegular",
    textAlign: "center",
    fontSize: width * 0.028,
    color: MUTED,
  },
});
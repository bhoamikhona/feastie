import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useAuth } from "../context/AuthContext";
import { capitalize } from "../utils/helpers.js";

const { width, height } = Dimensions.get("window");

const ACCENT = "#fd7e14";
const MUTED = "#adb5bd";
const BORDER = "#f1f3f5";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

function DetailRow({ label, value, icon }) {
  return (
    <View style={styles.detailRow}>
      <View style={styles.detailLeft}>
        <Ionicons
          name={icon}
          size={width * 0.048}
          color={ACCENT}
          style={styles.detailIcon}
        />
        <Text style={styles.detailLabel}>{label}</Text>
      </View>
      <Text style={styles.detailValue} numberOfLines={1}>
        {value || "—"}
      </Text>
    </View>
  );
}

function SectionHeader({ title, onEdit }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {onEdit && (
        <TouchableOpacity onPress={onEdit} activeOpacity={0.6}>
          <Text style={styles.editLink}>Edit</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default function Account() {
  const router = useRouter();
  const { token } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${API_URL}/api/auth/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        Alert.alert("Error", "Failed to load account details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={ACCENT} />
      </View>
    );
  }

  const fullAddress = profile?.address
    ? [
        profile.address.street,
        profile.address.city,
        `${profile.address.state} ${profile.address.zip}`,
      ]
        .filter(Boolean)
        .join(", ")
    : "—";

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
          activeOpacity={0.6}
        >
          <Ionicons name="chevron-back" size={width * 0.065} color="#1E1E1E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account Details</Text>
        <View style={styles.backButton} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <SectionHeader
          title="Personal Information"
          onEdit={() => Alert.alert("Edit", "Coming soon.")}
        />
        <View style={styles.card}>
          <DetailRow
            icon="person-outline"
            label="Name"
            value={capitalize(profile?.name)}
          />
          <DetailRow icon="mail-outline" label="Email" value={profile?.email} />
          <DetailRow icon="call-outline" label="Phone" value={profile?.phone} />
        </View>

        <SectionHeader
          title="Delivery Address"
          onEdit={() => Alert.alert("Edit", "Coming soon.")}
        />
        <View style={styles.card}>
          <DetailRow
            icon="home-outline"
            label="Street"
            value={profile?.address?.street}
          />
          <DetailRow
            icon="location-outline"
            label="City"
            value={profile?.address?.city}
          />
          <DetailRow
            icon="map-outline"
            label="State"
            value={
              profile?.address?.state
                ? `${profile.address.state} ${profile.address.zip}`
                : "—"
            }
          />
          <DetailRow icon="navigate-outline" label="Full" value={fullAddress} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  loadingContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  scrollContent: { paddingBottom: height * 0.05 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: height * 0.07,
    paddingBottom: height * 0.02,
    paddingHorizontal: width * 0.04,
  },
  backButton: { width: width * 0.1, alignItems: "center" },
  headerTitle: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: width * 0.05,
    color: "#1E1E1E",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: width * 0.06,
    marginTop: height * 0.025,
    marginBottom: height * 0.01,
  },
  sectionTitle: {
    fontFamily: "MontserratSemiBold",
    fontSize: width * 0.03,
    color: MUTED,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  editLink: {
    fontFamily: "MontserratSemiBold",
    fontSize: width * 0.032,
    color: ACCENT,
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: width * 0.05,
    borderRadius: width * 0.04,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: BORDER,
    elevation: 2,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: height * 0.018,
    paddingHorizontal: width * 0.04,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: BORDER,
  },
  detailLeft: { flexDirection: "row", alignItems: "center", flexShrink: 0 },
  detailIcon: { marginRight: width * 0.03 },
  detailLabel: {
    fontFamily: "MontserratMedium",
    fontSize: width * 0.035,
    color: MUTED,
  },
  detailValue: {
    fontFamily: "MontserratMedium",
    fontSize: width * 0.035,
    color: "#1E1E1E",
    flexShrink: 1,
    textAlign: "right",
    marginLeft: width * 0.04,
  },
});

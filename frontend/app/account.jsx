/**
 * Account Details Screen — app/account.jsx
 *
 * Displays the user's personal info, delivery address,
 * and payment method in read-only detail rows.
 * Pushes on top of the tab bar via the root Stack navigator.
 *
 * Navigation: Profile → "Account" row → this screen
 * Back:       Swipe back or tap the header back arrow
 *
 */

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

const ACCENT = "#fd7e14";
const MUTED = "#adb5bd";
const BORDER = "#f1f3f5";

/* ------------------------------------------------------------------ */
/*  Mock Data                                                          */
/* ------------------------------------------------------------------ */

/**
 * Placeholder account details.
 * Replace with real user data from your auth / profile API.
 */
const MOCK_ACCOUNT = {
  fullName: "Tafadzwa Nhesvi",
  email: "tafadzwa@feastie.app",
  phone: "+1 (914) 555-0123",
  address: {
    street: "1 Pace Plaza",
    city: "New York",
    state: "NY",
    zip: "10038",
  },
  card: {
    brand: "Visa",
    lastFour: "4242",
    expiry: "09/27",
  },
};

/* ------------------------------------------------------------------ */
/*  Shared Components                                                  */
/* ------------------------------------------------------------------ */

/**
 * A single label + value row inside a detail card.
 *
 * @param {string} label - Left-side label (e.g. "Email")
 * @param {string} value - Right-side value (e.g. "user@example.com")
 * @param {string} icon  - Ionicons icon name shown before the label
 */
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
        {value}
      </Text>
    </View>
  );
}

/**
 * Section header with an optional "Edit" button.
 *
 * @param {string}   title   - Section heading text
 * @param {Function} onEdit  - Tap handler for the edit button (optional)
 */
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

/* ------------------------------------------------------------------ */
/*  Screen                                                             */
/* ------------------------------------------------------------------ */

export default function Account() {
  const router = useRouter();
  const account = MOCK_ACCOUNT;

  // Format the full address into a single line
  const fullAddress = [
    account.address.street,
    account.address.city,
    `${account.address.state} ${account.address.zip}`,
  ].join(", ");

  /* ---- Edit handlers ---- */

  const handleEditPersonal = () => {
    // TODO: router.push("/account/edit-personal")
    Alert.alert(
      "Edit Personal Info",
      "You will be able to update your name, email, and phone number here."
    );
  };

  const handleEditAddress = () => {
    // TODO: router.push("/account/edit-address")
    Alert.alert(
      "Edit Address",
      "You will be able to update your delivery address here."
    );
  };

  const handleEditPayment = () => {
    // TODO: router.push("/account/edit-payment")
    Alert.alert(
      "Edit Payment",
      "You will be able to manage your payment methods here."
    );
  };

  return (
    <View style={styles.container}>
      {/* Custom header with back button */}
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
        {/* Personal information */}
        <SectionHeader title="Personal Information" onEdit={handleEditPersonal} />
        <View style={styles.card}>
          <DetailRow icon="person-outline" label="Name" value={account.fullName} />
          <DetailRow icon="mail-outline" label="Email" value={account.email} />
          <DetailRow icon="call-outline" label="Phone" value={account.phone} />
        </View>

        {/* Delivery address */}
        <SectionHeader title="Delivery Address" onEdit={handleEditAddress} />
        <View style={styles.card}>
          <DetailRow icon="home-outline" label="Street" value={account.address.street} />
          <DetailRow icon="location-outline" label="City" value={account.address.city} />
          <DetailRow icon="map-outline" label="State" value={`${account.address.state} ${account.address.zip}`} />
          <DetailRow icon="navigate-outline" label="Full" value={fullAddress} />
        </View>

        {/* Payment method */}
        <SectionHeader title="Payment Method" onEdit={handleEditPayment} />
        <View style={styles.card}>
          <DetailRow
            icon="card-outline"
            label="Card"
            value={`${account.card.brand} •••• ${account.card.lastFour}`}
          />
          <DetailRow icon="calendar-outline" label="Expires" value={account.card.expiry} />
        </View>
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
    paddingBottom: height * 0.05,
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: height * 0.07,
    paddingBottom: height * 0.02,
    paddingHorizontal: width * 0.04,
  },
  backButton: {
    width: width * 0.1,
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: width * 0.05,
    color: "#1E1E1E",
  },

  /* Section header */
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

  /* Card */
  card: {
    backgroundColor: "#fff",
    marginHorizontal: width * 0.05,
    borderRadius: width * 0.04,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: BORDER,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },

  /* Detail row */
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: height * 0.018,
    paddingHorizontal: width * 0.04,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: BORDER,
  },
  detailLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 0,
  },
  detailIcon: {
    marginRight: width * 0.03,
  },
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
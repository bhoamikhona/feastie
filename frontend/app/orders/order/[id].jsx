import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../../../context/AuthContext";

const { width, height } = Dimensions.get("window");

const ACCENT = "#fd7e14";
const BORDER = "#f1f3f5";
const MUTED = "#868e96";
const API_URL = process.env.EXPO_PUBLIC_API_URL;

const STATUS_COLORS = {
  pending: "#868e96",
  confirmed: "#fd7e14",
  preparing: "#f59f00",
  out_for_delivery: "#1971c2",
  delivered: "#2f9e44",
  cancelled: "#e03131",
};

export default function OrderDetail() {
  const { id } = useLocalSearchParams();
  const { token } = useAuth();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`${API_URL}/api/orders/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setOrder(data);
      } catch (error) {
        console.error("Failed to fetch order:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  const formatStatus = (status) =>
    status.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  if (loading) {
    return (
      <SafeAreaView style={styles.container} edges={["top"]}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backBtn}
          >
            <Ionicons
              name="chevron-back-outline"
              size={width * 0.06}
              color="#212529"
            />
          </TouchableOpacity>
          <Text style={styles.title}>Order Details</Text>
          <View style={styles.backBtn} />
        </View>
        <View style={styles.center}>
          <ActivityIndicator size="large" color={ACCENT} />
        </View>
      </SafeAreaView>
    );
  }

  if (!order) return null;

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons
            name="chevron-back-outline"
            size={width * 0.06}
            color="#212529"
          />
        </TouchableOpacity>
        <Text style={styles.title}>Order Details</Text>
        <View style={styles.backBtn} />
      </View>

      <FlatList
        data={order.items}
        keyExtractor={(item, idx) => idx.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View>
            <View style={styles.statusCard}>
              <View
                style={[
                  styles.statusBadge,
                  { backgroundColor: STATUS_COLORS[order.status] + "20" },
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    { color: STATUS_COLORS[order.status] },
                  ]}
                >
                  {formatStatus(order.status)}
                </Text>
              </View>
              <Text style={styles.orderDate}>
                {formatDate(order.createdAt)}
              </Text>
            </View>
            <Text style={styles.sectionTitle}>Items</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            {item.image ? (
              <Image
                source={{ uri: item.image }}
                style={styles.itemImage}
                resizeMode="cover"
              />
            ) : (
              <View
                style={[
                  styles.itemImage,
                  {
                    backgroundColor: "#f1f3f5",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                ]}
              >
                <Ionicons
                  name="fast-food-outline"
                  size={width * 0.07}
                  color={MUTED}
                />
              </View>
            )}
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemRestaurant}>{item.restaurant}</Text>
              <Text style={styles.itemQty}>Qty: {item.quantity}</Text>
            </View>
            <Text style={styles.itemPrice}>
              ${(item.price * item.quantity).toFixed(2)}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={
          <View>
            {order.deliveryAddress?.street ? (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Delivery Address</Text>
                <View style={styles.infoCard}>
                  <Text style={styles.infoText}>
                    {order.deliveryAddress.street}
                    {order.deliveryAddress.apt
                      ? `, ${order.deliveryAddress.apt}`
                      : ""}
                  </Text>
                  <Text style={styles.infoText}>
                    {order.deliveryAddress.city}, {order.deliveryAddress.state}{" "}
                    {order.deliveryAddress.zip}
                  </Text>
                </View>
              </View>
            ) : null}

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Order Summary</Text>
              <View style={styles.summaryCard}>
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>Subtotal</Text>
                  <Text style={styles.summaryValue}>
                    ${order.subtotal.toFixed(2)}
                  </Text>
                </View>
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>Delivery Fee</Text>
                  <Text style={styles.summaryValue}>
                    ${order.deliveryFee.toFixed(2)}
                  </Text>
                </View>
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>Tax</Text>
                  <Text style={styles.summaryValue}>
                    ${order.tax.toFixed(2)}
                  </Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.summaryRow}>
                  <Text style={styles.totalLabel}>Total</Text>
                  <Text style={styles.totalValue}>
                    ${order.total.toFixed(2)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.04,
    paddingTop: height * 0.015,
    paddingBottom: height * 0.02,
  },
  backBtn: { width: width * 0.1, alignItems: "center" },
  title: {
    fontFamily: "PlayfairDisplayExtraBold",
    fontSize: width * 0.055,
    color: "#212529",
  },
  listContent: {
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.05,
  },
  statusCard: {
    alignItems: "center",
    paddingVertical: height * 0.02,
    marginBottom: height * 0.01,
  },
  statusBadge: {
    borderRadius: 999,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.008,
    marginBottom: height * 0.008,
  },
  statusText: { fontFamily: "MontserratSemiBold", fontSize: width * 0.035 },
  orderDate: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.032,
    color: MUTED,
  },
  sectionTitle: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: width * 0.045,
    color: "#212529",
    marginBottom: height * 0.012,
    marginTop: height * 0.01,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: height * 0.014,
  },
  itemImage: {
    width: width * 0.18,
    height: width * 0.18,
    borderRadius: width * 0.03,
  },
  itemInfo: { flex: 1, paddingHorizontal: width * 0.04 },
  itemName: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: width * 0.04,
    color: "#212529",
  },
  itemRestaurant: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.03,
    color: MUTED,
    marginTop: 2,
  },
  itemQty: {
    fontFamily: "MontserratMedium",
    fontSize: width * 0.03,
    color: MUTED,
    marginTop: 2,
  },
  itemPrice: {
    fontFamily: "MontserratBold",
    fontSize: width * 0.038,
    color: ACCENT,
  },
  separator: { height: 1, backgroundColor: BORDER },
  section: { marginTop: height * 0.025 },
  infoCard: {
    backgroundColor: "#f8f9fa",
    borderRadius: width * 0.03,
    padding: width * 0.04,
  },
  infoText: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.035,
    color: "#495057",
    marginBottom: height * 0.004,
  },
  summaryCard: {
    backgroundColor: "#f8f9fa",
    borderRadius: width * 0.03,
    padding: width * 0.04,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: height * 0.01,
  },
  summaryLabel: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.035,
    color: MUTED,
  },
  summaryValue: {
    fontFamily: "MontserratMedium",
    fontSize: width * 0.035,
    color: "#212529",
  },
  divider: {
    height: 1,
    backgroundColor: BORDER,
    marginVertical: height * 0.012,
  },
  totalLabel: {
    fontFamily: "MontserratBold",
    fontSize: width * 0.04,
    color: "#212529",
  },
  totalValue: {
    fontFamily: "MontserratBold",
    fontSize: width * 0.04,
    color: ACCENT,
  },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
});

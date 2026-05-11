import { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ActivityIndicator,
  Animated,
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

const STATUS_SEQUENCE = [
  "pending",
  "confirmed",
  "preparing",
  "out_for_delivery",
  "delivered",
];

const STATUS_CONFIG = {
  pending: { color: "#868e96", icon: "time-outline", label: "Pending" },
  confirmed: {
    color: "#fd7e14",
    icon: "checkmark-circle-outline",
    label: "Confirmed",
  },
  preparing: {
    color: "#f59f00",
    icon: "restaurant-outline",
    label: "Preparing",
  },
  out_for_delivery: {
    color: "#1971c2",
    icon: "bicycle-outline",
    label: "Out for Delivery",
  },
  delivered: {
    color: "#2f9e44",
    icon: "checkmark-done-circle-outline",
    label: "Delivered",
  },
};

const STATUS_MESSAGES = {
  pending: "Your order has been received.",
  confirmed: "Restaurant has confirmed your order!",
  preparing: "The kitchen is preparing your food.",
  out_for_delivery: "Your order is on its way!",
  delivered: "Your order has been delivered. Enjoy!",
};

export default function OrderDetail() {
  const { id } = useLocalSearchParams();
  const { token } = useAuth();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef(null);
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    fetchOrder();
    return () => clearInterval(intervalRef.current);
  }, [id]);

  useEffect(() => {
    if (order && order.status !== "delivered" && order.status !== "cancelled") {
      startSimulation();
    }
    return () => clearInterval(intervalRef.current);
  }, [order?.status]);

  useEffect(() => {
    if (order && order.status !== "delivered") {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.15,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    } else {
      pulseAnim.setValue(1);
    }
  }, [order?.status]);

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

  const startSimulation = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(async () => {
      setOrder((prev) => {
        if (!prev) return prev;
        const currentIndex = STATUS_SEQUENCE.indexOf(prev.status);
        if (currentIndex === -1 || currentIndex >= STATUS_SEQUENCE.length - 1) {
          clearInterval(intervalRef.current);
          return prev;
        }
        const nextStatus = STATUS_SEQUENCE[currentIndex + 1];

        // Update backend
        fetch(`${API_URL}/api/orders/${id}/status`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: nextStatus }),
        });

        if (nextStatus === "delivered") clearInterval(intervalRef.current);
        return { ...prev, status: nextStatus };
      });
    }, 4000);
  };

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

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

  const config = STATUS_CONFIG[order.status] ?? STATUS_CONFIG.pending;
  const isDelivered = order.status === "delivered";

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
            {/* Tracking card */}
            <View
              style={[
                styles.trackingCard,
                { borderColor: config.color + "40" },
              ]}
            >
              <Animated.View
                style={[
                  styles.trackingIconWrapper,
                  {
                    backgroundColor: config.color + "20",
                    transform: [{ scale: isDelivered ? 1 : pulseAnim }],
                  },
                ]}
              >
                <Ionicons
                  name={config.icon}
                  size={width * 0.1}
                  color={config.color}
                />
              </Animated.View>
              <Text style={[styles.trackingStatus, { color: config.color }]}>
                {config.label}
              </Text>
              <Text style={styles.trackingMessage}>
                {STATUS_MESSAGES[order.status]}
              </Text>
              <Text style={styles.orderDate}>
                {formatDate(order.createdAt)}
              </Text>
              {/* Progress bar */}
              <View style={styles.progressRow}>
                {STATUS_SEQUENCE.map((s, idx) => {
                  const currentIdx = STATUS_SEQUENCE.indexOf(order.status);
                  const done = idx <= currentIdx;
                  return (
                    <View key={s} style={styles.progressStep}>
                      <View
                        style={[
                          styles.progressDot,
                          {
                            backgroundColor: done
                              ? STATUS_CONFIG[s].color
                              : "#dee2e6",
                          },
                        ]}
                      />
                      {idx < STATUS_SEQUENCE.length - 1 && (
                        <View
                          style={[
                            styles.progressLine,
                            {
                              backgroundColor:
                                idx < currentIdx
                                  ? STATUS_CONFIG[STATUS_SEQUENCE[idx + 1]]
                                      .color
                                  : "#dee2e6",
                            },
                          ]}
                        />
                      )}
                    </View>
                  );
                })}
              </View>
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
  trackingCard: {
    borderRadius: width * 0.04,
    borderWidth: 1.5,
    padding: width * 0.05,
    alignItems: "center",
    marginBottom: height * 0.02,
  },
  trackingIconWrapper: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: height * 0.012,
  },
  trackingStatus: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: width * 0.052,
    marginBottom: height * 0.006,
  },
  trackingMessage: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.033,
    color: MUTED,
    textAlign: "center",
    marginBottom: height * 0.006,
  },
  orderDate: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.028,
    color: MUTED,
    marginBottom: height * 0.018,
  },
  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: height * 0.018,
    width: "100%",
    paddingLeft: width * 0.115,
  },
  progressStep: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  progressDot: {
    width: width * 0.032,
    height: width * 0.032,
    borderRadius: 999,
    flexShrink: 0,
  },
  progressLine: {
    flex: 1,
    height: 2,
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

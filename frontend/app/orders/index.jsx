import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useAuth } from "../../context/AuthContext";

const { width, height } = Dimensions.get("window");
const ACCENT = "#fd7e14";
const BORDER = "#f1f3f5";
const MUTED = "#adb5bd";
const API_URL = process.env.EXPO_PUBLIC_API_URL;

const STATUS_COLORS = {
  pending: "#868e96",
  confirmed: "#fd7e14",
  preparing: "#f59f00",
  out_for_delivery: "#1971c2",
  delivered: "#2f9e44",
  cancelled: "#e03131",
};

export default function Orders() {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${API_URL}/api/orders`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setOrders(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const formatStatus = (status) =>
    status.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

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
        <Text style={styles.title}>Order History</Text>
        <View style={styles.backBtn} />
      </View>

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color={ACCENT} />
        </View>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.orderCard}
              onPress={() => router.push(`/orders/order/${item._id}`)}
              activeOpacity={0.75}
            >
              <View style={styles.orderHeader}>
                <Text style={styles.orderDate}>
                  {formatDate(item.createdAt)}
                </Text>
                <View
                  style={[
                    styles.statusBadge,
                    { backgroundColor: STATUS_COLORS[item.status] + "20" },
                  ]}
                >
                  <Text
                    style={[
                      styles.statusText,
                      { color: STATUS_COLORS[item.status] },
                    ]}
                  >
                    {formatStatus(item.status)}
                  </Text>
                </View>
              </View>

              {item.items.map((i, idx) => (
                <Text key={idx} style={styles.orderItem}>
                  {i.quantity}× {i.name}{" "}
                  <Text style={styles.orderItemRestaurant}>
                    ({i.restaurant})
                  </Text>
                </Text>
              ))}

              <View style={styles.orderFooter}>
                <Text style={styles.orderTotal}>${item.total.toFixed(2)}</Text>
                <View style={styles.chevronRow}>
                  <Text style={styles.orderItemCount}>
                    {item.items.reduce((sum, i) => sum + i.quantity, 0)} items
                  </Text>
                  <Ionicons
                    name="chevron-forward"
                    size={width * 0.04}
                    color={MUTED}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <View style={styles.center}>
              <Ionicons
                name="receipt-outline"
                size={width * 0.2}
                color={BORDER}
              />
              <Text style={styles.emptyTitle}>No orders yet</Text>
              <Text style={styles.emptyText}>
                Your order history will appear here.
              </Text>
            </View>
          }
        />
      )}
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
    fontSize: width * 0.06,
    color: "#212529",
  },
  listContent: {
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.05,
  },
  orderCard: {
    backgroundColor: "#fff",
    borderRadius: width * 0.04,
    borderWidth: 1,
    borderColor: BORDER,
    padding: width * 0.04,
    marginBottom: height * 0.015,
  },
  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: height * 0.012,
  },
  orderDate: {
    fontFamily: "MontserratSemiBold",
    fontSize: width * 0.035,
    color: "#212529",
  },
  statusBadge: {
    borderRadius: 999,
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.004,
  },
  statusText: { fontFamily: "MontserratSemiBold", fontSize: width * 0.028 },
  orderItem: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.033,
    color: "#495057",
    marginBottom: height * 0.004,
  },
  orderItemRestaurant: { color: MUTED },
  orderFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: height * 0.012,
    paddingTop: height * 0.012,
    borderTopWidth: 1,
    borderTopColor: BORDER,
  },
  orderTotal: {
    fontFamily: "MontserratBold",
    fontSize: width * 0.042,
    color: ACCENT,
  },
  chevronRow: { flexDirection: "row", alignItems: "center", gap: width * 0.01 },
  orderItemCount: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.032,
    color: MUTED,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.1,
    gap: height * 0.01,
  },
  emptyTitle: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: width * 0.05,
    color: "#212529",
    marginTop: height * 0.01,
  },
  emptyText: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.035,
    color: MUTED,
  },
});

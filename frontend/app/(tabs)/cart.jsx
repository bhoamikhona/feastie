import { useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Pressable,
  Dimensions,
  ActivityIndicator,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

const { width, height } = Dimensions.get("window");

const ACCENT = "#fd7e14";
const BORDER = "#f1f3f5";
const MUTED = "#adb5bd";
const TAX_RATE = 0.08875;
const DELIVERY_FEE = 3.99;
const API_URL = process.env.EXPO_PUBLIC_API_URL;

export default function Cart() {
  const { cart, loading, updateQuantity, removeFromCart, clearCart } =
    useCart();
  const { token } = useAuth();

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart],
  );

  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + (cart.length > 0 ? DELIVERY_FEE : 0);

  const handleCheckout = async () => {
    try {
      const response = await fetch(`${API_URL}/api/orders`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      await clearCart();
      Alert.alert("Order Placed!", "Your order has been placed successfully.");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.screen} edges={["top"]}>
        <Text style={styles.pageTitle}>Your Cart</Text>
        <View style={styles.emptyContainer}>
          <ActivityIndicator size="large" color={ACCENT} />
        </View>
      </SafeAreaView>
    );
  }

  if (cart.length === 0) {
    return (
      <SafeAreaView style={styles.screen} edges={["top"]}>
        <Text style={styles.pageTitle}>Your Cart</Text>
        <View style={styles.emptyContainer}>
          <Ionicons name="cart-outline" size={width * 0.22} color={BORDER} />
          <Text style={styles.emptyTitle}>Your cart is empty</Text>
          <Text style={styles.emptyText}>
            Add some delicious food to get started.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.itemId}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={<Text style={styles.pageTitle}>Your Cart</Text>}
        renderItem={({ item }) => (
          <View style={styles.row}>
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
                  size={width * 0.08}
                  color={MUTED}
                />
              </View>
            )}
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemRestaurant}>{item.restaurant}</Text>
              <Text style={styles.itemPrice}>
                ${(item.price * item.quantity).toFixed(2)}
              </Text>
            </View>
            <View style={styles.rowRight}>
              <View style={styles.qtyCol}>
                <TouchableOpacity
                  style={styles.qBtn}
                  onPress={() => updateQuantity(item.itemId, item.quantity + 1)}
                >
                  <Ionicons name="add" size={width * 0.04} color={ACCENT} />
                </TouchableOpacity>
                <Text style={styles.qText}>{item.quantity}</Text>
                <TouchableOpacity
                  style={styles.qBtn}
                  onPress={() => updateQuantity(item.itemId, item.quantity - 1)}
                >
                  <Ionicons name="remove" size={width * 0.04} color={ACCENT} />
                </TouchableOpacity>
              </View>
              <Pressable
                style={styles.trashBtn}
                onPress={() => removeFromCart(item.itemId)}
              >
                {({ pressed }) => (
                  <Ionicons
                    name="trash-outline"
                    size={width * 0.055}
                    color={pressed ? ACCENT : "#adb5bd"}
                  />
                )}
              </Pressable>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={
          <View style={styles.summary}>
            <Text style={styles.summaryTitle}>Order Summary</Text>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal</Text>
              <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Delivery Fee</Text>
              <Text style={styles.summaryValue}>
                ${DELIVERY_FEE.toFixed(2)}
              </Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Tax</Text>
              <Text style={styles.summaryValue}>${tax.toFixed(2)}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.summaryRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
            </View>
          </View>
        }
      />

      <View style={styles.footer}>
        <View style={styles.footerInner}>
          <View>
            <Text style={styles.footerLabel}>Total Price</Text>
            <Text style={styles.footerTotal}>${total.toFixed(2)}</Text>
          </View>
          <TouchableOpacity
            style={styles.checkoutBtn}
            onPress={handleCheckout}
            activeOpacity={0.85}
          >
            <Text style={styles.checkoutText}>Checkout</Text>
            <Ionicons name="arrow-forward" size={width * 0.045} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#fff" },
  listContent: { paddingBottom: height * 0.16 },
  pageTitle: {
    fontFamily: "PlayfairDisplayExtraBold",
    fontSize: width * 0.07,
    color: "#212529",
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.015,
    marginBottom: height * 0.02,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.016,
  },
  itemImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.03,
    alignItems: "center",
    justifyContent: "center",
  },
  itemInfo: { flex: 1, paddingHorizontal: width * 0.04, gap: height * 0.004 },
  itemName: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: width * 0.042,
    color: "#212529",
  },
  itemRestaurant: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.03,
    color: "#868e96",
  },
  itemPrice: {
    fontFamily: "MontserratBold",
    fontSize: width * 0.04,
    color: ACCENT,
    marginTop: height * 0.004,
  },
  rowRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.02,
  },
  trashBtn: {
    padding: width * 0.02,
  },
  qtyCol: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.02,
    borderWidth: 1,
    borderColor: "#e9ecef",
    borderRadius: 999,
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.005,
  },
  qBtn: {
    width: width * 0.07,
    height: width * 0.07,
    alignItems: "center",
    justifyContent: "center",
  },
  qText: {
    fontFamily: "MontserratBold",
    fontSize: width * 0.038,
    color: "#212529",
  },
  separator: {
    height: 1,
    backgroundColor: BORDER,
    marginHorizontal: width * 0.05,
  },
  summary: {
    marginHorizontal: width * 0.05,
    marginTop: height * 0.025,
    backgroundColor: "#f1f3f5",
    borderRadius: width * 0.04,
    padding: width * 0.05,
  },
  summaryTitle: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: width * 0.048,
    color: "#212529",
    marginBottom: height * 0.018,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: height * 0.012,
  },
  summaryLabel: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.036,
    color: "#868e96",
  },
  summaryValue: {
    fontFamily: "MontserratMedium",
    fontSize: width * 0.036,
    color: "#212529",
  },
  divider: {
    height: 1,
    backgroundColor: BORDER,
    marginVertical: height * 0.012,
  },
  totalLabel: {
    fontFamily: "MontserratBold",
    fontSize: width * 0.042,
    color: "#212529",
  },
  totalValue: {
    fontFamily: "MontserratBold",
    fontSize: width * 0.042,
    color: ACCENT,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: BORDER,
    paddingBottom: height * 0.03,
    paddingTop: height * 0.015,
    paddingHorizontal: width * 0.05,
  },
  footerInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerLabel: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.031,
    color: "#868e96",
  },
  footerTotal: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: width * 0.07,
    color: "#212529",
  },
  checkoutBtn: {
    backgroundColor: ACCENT,
    borderRadius: 999,
    paddingVertical: height * 0.016,
    paddingHorizontal: width * 0.08,
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.02,
  },
  checkoutText: {
    fontFamily: "MontserratBold",
    fontSize: width * 0.04,
    color: "#fff",
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: width * 0.1,
    gap: height * 0.012,
  },
  emptyTitle: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: width * 0.055,
    color: "#212529",
    marginTop: height * 0.01,
  },
  emptyText: {
    fontFamily: "MontserratRegular",
    fontSize: width * 0.036,
    color: MUTED,
    textAlign: "center",
  },
});

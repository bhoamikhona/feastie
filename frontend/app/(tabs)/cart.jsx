import React, { useMemo, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const ACCENT = "#fd7e14";
const BORDER = "#f1f3f5";
const MUTED = "#adb5bd";
const TAX_RATE = 0.08875; // NYC tax rate

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Margherita",
      restaurant: "Pizza Express",
      price: 14.99,
      quantity: 1,
      image: require("../../assets/images/menus/pizza-express/margherita.jpg"),
    },
    {
      id: 2,
      name: "Bacon Cheeseburger",
      restaurant: "Five Guys",
      price: 11.49,
      quantity: 2,
      image: require("../../assets/images/menus/five-guys/bacon-cheeseburger.jpg"),
    },
  ]);

  const deliveryFee = 3.99;

  const increaseQuantity = (id) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );

  const decreaseQuantity = (id) =>
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  );

  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + (cartItems.length > 0 ? deliveryFee : 0);

  if (cartItems.length === 0) {
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
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={<Text style={styles.pageTitle}>Your Cart</Text>}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Image
              source={item.image}
              style={styles.itemImage}
              resizeMode="cover"
            />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemRestaurant}>{item.restaurant}</Text>
              <Text style={styles.itemPrice}>
                ${(item.price * item.quantity).toFixed(2)}
              </Text>
            </View>
            <View style={styles.qtyCol}>
              <TouchableOpacity
                style={styles.qBtn}
                onPress={() => increaseQuantity(item.id)}
              >
                <Ionicons name="add" size={width * 0.04} color={ACCENT} />
              </TouchableOpacity>
              <Text style={styles.qText}>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.qBtn}
                onPress={() => decreaseQuantity(item.id)}
              >
                <Ionicons name="remove" size={width * 0.04} color={ACCENT} />
              </TouchableOpacity>
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
              <Text style={styles.summaryValue}>${deliveryFee.toFixed(2)}</Text>
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
          <TouchableOpacity style={styles.checkoutBtn} activeOpacity={0.85}>
            <Text style={styles.checkoutText}>Checkout</Text>
            <Ionicons name="arrow-forward" size={width * 0.045} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContent: {
    paddingBottom: height * 0.16,
  },
  pageTitle: {
    fontFamily: "PlayfairDisplayExtraBold",
    fontSize: width * 0.07,
    color: "#212529",
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.015,
    marginBottom: height * 0.02,
  },

  // ITEM ROW
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
    backgroundColor: "#f1f3f5",
  },
  itemInfo: {
    flex: 1,
    paddingHorizontal: width * 0.04,
    gap: height * 0.004,
  },
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

  // SUMMARY
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

  // FOOTER
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

  // EMPTY STATE
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

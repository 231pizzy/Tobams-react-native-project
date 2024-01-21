import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import BottomTab from "../components/BottomTab";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import cartImg from "../assets/asaro.png";
import cartImg2 from "../assets/moimoi.png";
import cartImg3 from "../assets/efo.png";
import CartItem from "../components/CartItem";

export default function CartScreen() {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate("Menu");
  };

  const [cartItems, setCartItems] = useState([
    // Sample cart items
    {
      id: 1,
      name: "Asaro (Yam porridge)",
      price: 30,
      quantity: 1,
      image: cartImg, // Replace with your actual image source
    },
    {
      id: 2,
      name: "Moi Moi (Bean Cake)",
      price: 30,
      quantity: 1,
      image: cartImg2, // Replace with your actual image source
    },
    {
      id: 3,
      name: "Efo Riro",
      price: 30,
      quantity: 1,
      image: cartImg3, // Replace with your actual image source
    },
    // Add more items as needed
  ]);

  const handleDelete = (itemId) => {
    // Remove item from the cart based on itemId
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleIncrement = (itemId) => {
    // Increment quantity for the specified item
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    // Decrement quantity for the specified item
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9F9F9" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 24,
          marginTop: 10,
          width: 326,
          height: 40,
        }}
      >
        <TouchableOpacity
          onPress={handleBackPress}
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            borderWidth: 1,
            padding: 8,
            borderColor: "#E1E5E9",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Entypo name="chevron-small-left" size={20} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            fontFamily: "Poppins",
            fontWeight: 500,
            lineHeight: 21,
            letterSpacing: 0.03,
            fontSize: 14,
            padding: "10px 0px 9px 16px",
            color: "#151515",
            textAlign: "center",
          }}
        >
          Cart
        </Text>
      </View>

      {/* Scroll Area */}
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 4,
          width: 375,
          height: 240,
        }}
        contentContainerStyle={{ paddingBottom: 300 }}
      >
        <View
          style={{
            width: 375,
            height: 240,
            top: 60,
            left: 24,
            gap: 24,
          }}
        >
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onDelete={() => handleDelete(item.id)}
              onIncrement={() => handleIncrement(item.id)}
              onDecrement={() => handleDecrement(item.id)}
            />
          ))}
        </View>
      </ScrollView>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: "column", // Set to "column" for vertical layout
            justifyContent: "space-between",
            alignItems: "center",
            width: 327,
            height: 77, // Assuming "Hug" means content-based sizing
            gap: 8,
          }}
        >
          {/* Top Section: Total (3 items) and $90 */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 327,
              height: 21,
            }}
          >
            {/* Left Section: Total (3 items) */}
            <Text>Total (3 items)</Text>

            {/* Right Section: $90 */}
            <Text>${90}</Text>
          </View>

          {/* Bottom Section: Button */}
          <TouchableOpacity
            style={{
              width: 327,
              height: 48,
              padding: 10,
              borderRadius: 50,
              gap: 10,
              backgroundColor: "#DB3C25",
            }}
          >
            {/* Your button content goes here */}
            <Text style={{ color: "white", textAlign: "center" }}>
              Checkout - ￡90
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomTab />
    </SafeAreaView>
  );
}

import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const CounterView = ({ navigation }) => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    // Navigate to "Cart" screen with instant animation
    navigation.navigate("Cart", { count });
  };

  const handleSubscribe = () => {
    // Implement subscribe logic here
  };

  return (
    <View
      style={{
        width: "Hug(327px)",
        height: "Hug(184px)",
        top: 1006,
        // left: 24,
        gap: 24,
        // backgroundColor: "#E1E5E9",
        padding: 16,
        borderRadius: 8,
      }}
    >
      {/* Counter View */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={handleSubtract}
          style={{
            height: 48,
            width: 48,
            borderRadius: 8,
            borderWidth: 1,
            padding: 10,
            gap: 10,
            borderColor: "#E1E5E9",
            backgroundColor: "#FFFFFF",
          }}
        >
          <MaterialIcons name="remove" size={24} color="#E1E5E9" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{count}</Text>
        <TouchableOpacity
          onPress={handleAdd}
          style={{
            height: 48,
            width: 48,
            borderRadius: 8,
            borderWidth: 1,
            padding: 10,
            gap: 10,
            borderColor: "#E1E5E9",
            backgroundColor: "#FFFFFF",
          }}
        >
          <MaterialIcons name="add" size={24} />
        </TouchableOpacity>
      </View>

      {/* Add to Cart Button */}
      <View
        style={{
          width: "Fixed(327px)",
          height: "Fixed(48px)",
          padding: 10,
          borderRadius: 50,
          backgroundColor: "#DB3C25",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <TouchableOpacity onPress={handleAddToCart}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>

      {/* Subscribe to a Plan Button */}
      <View
        style={{
          width: "Fixed(327px)",
          height: "Fixed(48px)",
          padding: 10,
          borderRadius: 50,
          borderWidth: 1,
          borderColor: "#DB3C25",
          backgroundColor: "transparent",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <TouchableOpacity onPress={handleSubscribe}>
          <Text style={{ color: "#DB3C25", fontWeight: "bold" }}>
            Subscribe to a Plan
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CounterView;

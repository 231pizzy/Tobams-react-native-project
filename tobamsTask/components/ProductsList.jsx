// ProductItem.js
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";

const ProductsList = ({ product, onPress, onAddToCart }) => {
  const shortenText = (text, n) => {
    if (text.length > n) {
      const shoretenedText = text.substring(0, n).concat("...");
      return shoretenedText;
    }
    return text;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        key={product.id}
        style={{
          width: 155,
          height: 228,
          borderRadius: 8,
          backgroundColor: "#FFFFFF",
        }}
      >
        <View style={{ width: 156, height: 123.37, gap: 8 }}>
          <View style={{ marginTop: 24, alignItems: "center" }}>
            <Image
              source={product.image}
              style={{
                width: 94.37,
                height: 94.37,
                borderRadius: 10.49,
                marginTop: 8,
              }}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 156,
              height: 21,
              padding: "0px 8px",
            }}
          >
            <Text
              style={{
                width: 100,
                height: 21,
                fontFamily: "Poppins",
                fontSize: 14,
                fontWeight: "500",
                lineHeight: 21,
                letterSpacing: 0.03,
                color: "#151515",
              }}
            >
              {shortenText(product.name, 11)}
            </Text>

            <Text
              style={{
                width: 32,
                height: 21,
                fontFamily: "Poppins",
                fontSize: 14,
                fontWeight: "500",
                lineHeight: 21,
                letterSpacing: 0.03,
                color: "#DB3C25",
              }}
            >
              {product.price}
            </Text>
          </View>
        </View>

        <View
          style={{
            position: "absolute",
            top: 15,
            width: 142,
            height: 24,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <MaterialIcons name="favorite-outline" size={24} color="black" />
        </View>

        <TouchableOpacity
          onPress={() => onAddToCart(product.id)}
          style={{
            position: "absolute",
            width: 134,
            height: 40,
            top: 177,
            left: 11,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#DB3C25",
          }}
        >
          <View
            style={{
              width: 101.67,
              height: 24,
              gap: 6.67,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Feather
              name="shopping-bag"
              size={16}
              style={{
                width: 17.75,
                height: 19.5,
                top: 2.25,
                left: 3.12,
                alignItems: "center",
                color: "#FFFFFF",
              }}
            />
            <Text
              style={{
                width: 71,
                height: 18,
                fontFamily: "Poppins",
                fontSize: 12,
                fontWeight: "400",
                lineHeight: 18,
                letterSpacing: 0.03,
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              Add to Cart
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductsList;

import React, { useState } from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function CartItem({ item, onDelete, onIncrement, onDecrement }) {
  return (
    <View
      style={{
        flexDirection: "column",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 327,
        height: 120,
        gap: 24,
        marginBottom: 24,
      }}
    >
      {/* Left Section: Item Details */}
      <Image
        source={item.image}
        style={{ width: 92, height: 92, borderRadius: 14.02 }}
      />

      {/* Middle Section: Image */}
      <View
        style={{
          flex: 1,

          width: 154,
          height: 82,
          justifyContent: "space-between",
        }}
      >
        <View style={{ height: 60, width: 154, gap: 8 }}>
          <Text>{item.name}</Text>
          <Text
            style={{
              height: 21,
              width: 35,
              gap: 8,
              color: "#DB3C25",
              fontFamily: "Poppins",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            ￡{item.price}
          </Text>
        </View>
        <TouchableOpacity onPress={onDelete} style={{ width: 24, height: 24 }}>
          <AntDesign
            name="delete"
            size={16}
            color="black"
            style={{
              width: 16.5,
              height: 19.5,
              top: 2.2,
              left: 3.75,
              //   borderWidth: 1.5,
              color: "#4A4A4A",
            }}
          />
        </TouchableOpacity>
      </View>

      {/* Right Section: Increment, Decrement, and Quantity */}
      <View
        style={{
          flexDirection: "column",
          gap: 4,
          alignItems: "center",
          borderRadius: 8,
          height: 104,
          width: 32,
        }}
      >
        <TouchableOpacity
          onPress={onDecrement}
          style={{
            height: 32,
            width: 32,
            borderRadius: 8,
            backgroundColor: "#FFFFFF",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign name="minus" size={16} color="black" />
        </TouchableOpacity>

        <View
          style={{
            width: 32,
            height: 32,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins",
              fontSize: 14,
              fontWeight: 500,
              color: "#4A4A4A",
            }}
          >
            {item.quantity}
          </Text>
        </View>

        <TouchableOpacity
          onPress={onIncrement}
          style={{
            height: 32,
            width: 32,
            borderRadius: 8,
            backgroundColor: "#FFFFFF",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign name="plus" size={16} color="#000000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

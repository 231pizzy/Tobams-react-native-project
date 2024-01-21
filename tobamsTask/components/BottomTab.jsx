import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import photo from "../assets/creed.jpeg";

export default function BottomTab() {
  const navigation = useNavigation();
  const [activeIcon, setActiveIcon] = useState("Home");

  const handleNavigation = (screenName) => {
    // Navigate to the specified screen
    navigation.navigate(screenName);
    // Set the active icon
    setActiveIcon(screenName);
  };

  return (
    <View
      style={{
        width: 375,
        height: 83,
        paddingHorizontal: 16,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderTopWidth: 1,
        gap: 20,
        padding: 16,
        borderTopColor: "#E1E5E9",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <TouchableOpacity
        style={{
          alignItems: "center",
          height: 51,
          width: 60,
          padding: 8,
          gap: 8,
        }}
        onPress={() => handleNavigation("Home")}
      >
        <AntDesign
          name="home"
          size={24}
          color={activeIcon === "Home" ? "#DB3C25" : "black"}
        />
        <Text
          style={{
            fontSize: 12,
            marginTop: 4,
            color: "black",
          }}
        >
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          alignItems: "center",
          height: 51,
          width: 60,
          padding: 8,
          gap: 8,
        }}
        onPress={() => handleNavigation("Menu")}
      >
        <AntDesign
          name="menuunfold"
          size={24}
          color={activeIcon === "Menu" ? "#DB3C25" : "black"}
        />
        <Text
          style={{
            fontSize: 12,
            marginTop: 4,
            color: "black",
          }}
        >
          Menu
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          alignItems: "center",
          height: 51,
          width: 48,
          padding: 8,
          gap: 8,
        }}
        onPress={() => handleNavigation("Cart")}
      >
        <Feather
          name="shopping-bag"
          size={24}
          color={activeIcon === "Cart" ? "#DB3C25" : "black"}
        />
        <Text
          style={{
            fontSize: 12,
            marginTop: 4,
            color: "black",
          }}
        >
          Cart
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          alignItems: "center",
          height: 51,
          width: 77,
          padding: 8,
          gap: 8,
        }}
        onPress={() => handleNavigation("Account")}
      >
        <Image
          source={photo}
          style={{ width: 24, height: 24, borderRadius: 12 }}
        />
        <Text
          style={{
            fontSize: 12,
            marginTop: 4,
            color: "black",
          }}
        >
          Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const DropdownItem = ({ label, isVisible, onPress }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#E1E5E9",
      width: 327,
      height: 48,
    }}
  >
    <Text style={{ flex: 1 }}>{label}</Text>
    <TouchableWithoutFeedback onPress={onPress}>
      <AntDesign
        name={isVisible ? "up" : "down"}
        size={20}
        color="black"
        style={{ marginLeft: 8 }}
      />
    </TouchableWithoutFeedback>
  </View>
);

export default function DropDown() {
  const [ingredientVisible, setIngredientVisible] = useState(false);
  const [nutritionVisible, setNutritionVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9F9F9" }}>
      {/* Collapsible View */}
      <View
        style={{
          position: "absolute",
          width: 327,
          height: 288,
          top: 678,
          left: 24,
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* Ingredient */}
        <DropdownItem
          label="Ingredient"
          isVisible={ingredientVisible}
          onPress={() => setIngredientVisible(!ingredientVisible)}
        />

        {/* Nutrition */}
        <DropdownItem
          label="Nutrition information"
          isVisible={nutritionVisible}
          onPress={() => setNutritionVisible(!nutritionVisible)}
        />

        <DropdownItem
          label="How to prepare"
          isVisible={nutritionVisible}
          onPress={() => setNutritionVisible(!nutritionVisible)}
        />

        <DropdownItem
          label="Dietary Information"
          isVisible={nutritionVisible}
          onPress={() => setNutritionVisible(!nutritionVisible)}
        />
        <DropdownItem
          label="Storage information"
          isVisible={nutritionVisible}
          onPress={() => setNutritionVisible(!nutritionVisible)}
        />
        <DropdownItem
          label="Extra"
          isVisible={nutritionVisible}
          onPress={() => setNutritionVisible(!nutritionVisible)}
        />
      </View>
    </SafeAreaView>
  );
}

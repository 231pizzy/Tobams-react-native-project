import { View, Text, TextInput, ScrollView, StatusBar } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons } from "@expo/vector-icons";
import { productData } from "../productData";
import { useNavigation } from "@react-navigation/native";
import BottomTab from "../components/BottomTab";
import ProductsList from "../components/ProductsList";

export default function MenuScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigation = useNavigation();

  const handleSearchTerm = (text) => {
    setSearchTerm(text);
  };

  const handleAddToCart = (productId) => {
    // Implement your "Add to Cart" logic here
    console.log(`Product ${productId} added to cart`);
  };

  const handlePress = () => {
    // On click Navigate to: "Product Detail Page"
    navigation.navigate("ProductScreen");
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#f9F9F9]">
      <StatusBar barStyle="dark-content" />
      <Text
        style={{
          width: 326,
          height: 40,
          fontFamily: "Poppins",
          fontWeight: 500,
          lineHeight: 21,
          letterSpacing: 0.03,
          fontSize: 14,
          padding: "10px 161px 9px 124px",
          gap: 65,
          marginTop: 10,
          color: "#151515",
          textAlign: "center",
        }}
      >
        Menu
      </Text>

      {/* Serach Box */}
      <View
        style={{
          width: 375,
          height: 72,
          // padding: "16px 24px 16px 24px",
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 16,
          paddingBottom: 16,
          gap: 16,
          alignItems: "center",
          borderTopWidth: 1,
          borderTopColorColor: "#E1E5E9",
        }}
      >
        <View
          style={{
            width: 327,
            height: 40,
            gap: 10,
            borderRadius: 8,
            padding: "20px 16px 14px 16px",
            marginTop: 10,
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#E1E5E9",
            backgroundColor: "#FFFFFF",
          }}
        >
          <View
            style={{
              flex: 1,
              width: 211,
              height: 20,
              gap: 12,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "2px 4px",
              backgroundColor: "white",
            }}
          >
            <EvilIcons
              name="search"
              size={16}
              color="#151515"
              style={{ width: 13.67, height: 13.67, top: 0.83, left: 0.83 }}
            />

            <TextInput
              style={{
                width: 190,
                height: 20,
                flex: 1,
                fontSize: 14,
                fontFamily: "Poppins",
                fontWeight: 400,
                lineHeight: 20,
                letterSpacing: 0.03,
                color: "#858585",
              }}
              placeholder="Search"
              value={searchTerm}
              onChangeText={handleSearchTerm}
            />
          </View>
        </View>
      </View>

      {/* Scrollable Container */}
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 4,
          width: 375,
          height: 644,
        }}
        contentContainerStyle={{ paddingBottom: 300 }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 16,
            borderRadius: 8,
            // backgroundColor: "#FFFFFF",
            height: 437,
          }}
        >
          {productData.map((product) => (
            <ProductsList
              key={product.id}
              product={product}
              onPress={handlePress}
              onAddToCart={() => handleAddToCart(product.id)}
            />
          ))}
        </View>
      </ScrollView>
      <BottomTab />
    </SafeAreaView>
  );
}

// {/* <TouchableOpacity onPress={handlePress}>
//               <View
//                 key={product.id}
//                 style={{
//                   width: 155,
//                   height: 228,
//                   borderRadius: 8,
//                   backgroundColor: "#FFFFFF",
//                 }}
//               >
//                 <View style={{ width: 156, height: 123.37, gap: 8 }}>
//                   <View style={{ marginTop: 24, alignItems: "center" }}>
//                     <Image
//                       source={product.image}
//                       style={{
//                         width: 94.37,
//                         height: 94.37,
//                         borderRadius: 10.49,
//                         //   alignItems: "center",
//                         marginTop: 8,
//                       }}
//                       resizeMode="cover"
//                     />
//                   </View>
//                   <View
//                     style={{
//                       flexDirection: "row",
//                       justifyContent: "space-between",
//                       width: 156,
//                       height: 21,
//                       padding: "0px 8px",
//                     }}
//                   >
//                     <Text
//                       style={{
//                         width: 100,
//                         height: 21,
//                         fontFamily: "Poppins",
//                         fontSize: 14,
//                         fontWeight: "500",
//                         lineHeight: 21,
//                         letterSpacing: 0.03,
//                         // textAlign: "left",
//                         color: "white", // Set the text color as needed
//                         color: "#151515",
//                       }}
//                     >
//                       {product.name}
//                     </Text>

//                     <Text
//                       style={{
//                         width: 32,
//                         height: 21,
//                         fontFamily: "Poppins",
//                         fontSize: 14,
//                         fontWeight: "500",
//                         lineHeight: 21,
//                         letterSpacing: 0.03,
//                         // textAlign: "center",
//                         // Set the text color as needed
//                         color: "#DB3C25",
//                       }}
//                     >
//                       {product.price}
//                     </Text>
//                   </View>
//                 </View>

//                 {/* Material Icon */}
//                 <View
//                   style={{
//                     position: "absolute",
//                     top: 15,
//                     width: 142,
//                     height: 24,
//                     flexDirection: "row",
//                     justifyContent: "flex-end",
//                   }}
//                 >
//                   <MaterialIcons
//                     name="favorite-outline"
//                     size={24}
//                     color="black"
//                   />
//                 </View>

//                 {/* Button */}
//                 <TouchableOpacity
//                   onPress={() => handleAddToCart(product.id)}
//                   style={{
//                     position: "absolute",
//                     // bottom: 16, // Adjusted bottom value
//                     // left: 8, // Adjusted left value
//                     width: 134,
//                     height: 40,
//                     top: 177,
//                     left: 11,
//                     // padding: "8.38px 16.23px 7.62px 16.11px",
//                     borderRadius: 50,
//                     justifyContent: "center", // Center content vertically
//                     alignItems: "center", // Center content horizontally

//                     backgroundColor: "#DB3C25",
//                   }}
//                   className="items-center flex-row justify-center rounded-3xl"
//                 >
//                   <View
//                     style={{
//                       //   top: 8.38,
//                       width: 101.67,
//                       height: 24,
//                       //   //   left: 16.11,
//                       gap: 6.67,
//                       flexDirection: "row",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <Feather
//                       name="shopping-bag"
//                       size={16}
//                       style={{
//                         width: 17.75,
//                         height: 19.5,
//                         top: 2.25,
//                         left: 3.12,
//                         alignItems: "center",
//                         // borderWidth: 1.5,
//                         // borderColor: "#FFFFFF",
//                         // Set the text color as needed
//                         color: "#FFFFFF",
//                       }}
//                     />
//                     <Text
//                       style={{
//                         width: 71,
//                         height: 18,
//                         fontFamily: "Poppins",
//                         fontSize: 12,
//                         fontWeight: "400",
//                         lineHeight: 18,
//                         letterSpacing: 0.03,
//                         textAlign: "center",
//                         // Set the text color as needed
//                         color: "#FFFFFF",
//                       }}
//                     >
//                       Add to Cart
//                     </Text>
//                   </View>
//                 </TouchableOpacity>
//               </View>
//             </TouchableOpacity> */}

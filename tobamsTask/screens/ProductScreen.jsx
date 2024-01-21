import React from "react";
import {
  View,
  SafeAreaView,
  TouchableHighlight,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import Dropdown from "../components/DropdownItem";
import { useNavigation } from "@react-navigation/native";
import CounterView from "../components/ProductPageButton";

const images = [
  require("../assets/africa.png"),
  require("../assets/asaro.png"),
  require("../assets/asaro.svg"),
];

export default function ProductScreen() {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.navigate("Menu");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9F9F9" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 1000 }}>
        <TouchableHighlight
          onPress={handleBackPress}
          underlayColor="transparent"
          style={{
            position: "absolute",
            top: 30,
            left: 24,
            width: 36,
            height: 36,
            gap: 195,
            borderRadius: 8,
            borderWidth: 1,
            padding: 8,
            borderColor: "#E1E5E9",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Entypo name="chevron-small-left" size={20} color="black" />
        </TouchableHighlight>
        <View
          style={{
            position: "absolute",
            width: 327,
            height: 336,
            top: 151,
            left: 24,
            gap: 24,
            flexDirection: "row",
          }}
        >
          <Swiper
            style={{ height: 304, marginTop: 10 }}
            showsButtons={false}
            dotStyle={{
              backgroundColor: "#D3D3D3",
              width: 8,
              height: 8,
              borderRadius: 4,
              marginHorizontal: 5,
            }}
            activeDotStyle={{
              backgroundColor: "#DB3C25",
              width: 8,
              height: 8,
              borderRadius: 4,
              marginHorizontal: 5,
            }}
          >
            {images.map((image, index) => (
              <View key={index}>
                <Image
                  source={image}
                  style={{
                    width: 327,
                    height: 304,
                    borderRadius: 16,
                  }}
                  resizeMode="cover"
                />
              </View>
            ))}
          </Swiper>
        </View>

        {/* PRoducts Details*/}

        <View
          style={{
            position: "absolute",
            top: 480,
            left: 24,
            width: 327,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 24,
            gap: 39,
            // paddingHorizontal: 8,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins",
              fontSize: 16,
              fontWeight: "600",
              color: "#151515",
              width: 241,
              height: 24,
            }}
          >
            Product Name
          </Text>
          <Text
            style={{
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: 16,
              lineHeight: 24,
              color: "#DB3C25",
              width: 46,
              height: 24,
            }}
          >
            $3.99
          </Text>
        </View>

        {/* Product Description */}
        <View
          style={{
            position: "absolute",
            top: 520,
            left: 24,
            // width: 327,
            // height: 90,
            paddingHorizontal: 8,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins",
              fontSize: 14,
              fontWeight: "400",
              color: "#151515",
              width: 327,
              height: 90,
            }}
          >
            Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are
            made from yeast dough, shaped into balls and deep-fried until golden
            brown. It has a doughnut-like texture but slightly o....Read more
          </Text>
        </View>
        {/* </View> */}
        <Dropdown />
        <CounterView />
      </ScrollView>
    </SafeAreaView>
  );
}

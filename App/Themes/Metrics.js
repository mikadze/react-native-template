import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

const metrics = {
  // searchBarHeight: 30,
  screenWidth,
  screenHeight,
  navBarHeight: Platform.OS === "ios" ? 64 : 54,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
    avatar: 54
  }
};

export default metrics;

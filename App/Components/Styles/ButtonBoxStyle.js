import { StyleSheet } from "react-native";
import { Colors, Metrics, Fonts } from "../../Themes";

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth / 2,
    aspectRatio: 0.9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.silk
  },
  image: {
    width: Metrics.icons.xl,
    height: Metrics.icons.xl,
    margin: Metrics.baseMargin
  },
  label: {
    ...Fonts.style.h1,
    fontSize: 11,
    color: Colors.silkText
  },
  badge: {
    margin: 2,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 1,
    shadowOpacity: 1,
    elevation: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.silkText,
    position: "absolute",
    top: -3,
    right: -3
  },
  badgeText: {
    color: Colors.snow
  }
});

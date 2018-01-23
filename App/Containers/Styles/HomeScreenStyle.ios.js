import { StyleSheet } from "react-native";
import { ApplicationStyles, Colors, Fonts, Metrics } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    // marginBottom: 36,
    // backgroundColor: Colors.snow
    // paddingTop: Metrics.section
  },
  mainContainer: {
    backgroundColor: Colors.snow,
    flex: 1,
    marginTop: -20
  },
  iconsContainer: {
    marginHorizontal: 5,
    // marginVertical: 15,
    marginBottom: 66,
    backgroundColor: Colors.snow,
    alignItems: "center"
  },
  buttonsContainer: {
    flexDirection: "row",
    flex: 1
  },
  b2bButton: {
    borderColor: Colors.silkBorder,
    borderWidth: 0.7,
    aspectRatio: 3,
    flex: 1,
    margin: 4.5,
    backgroundColor: Colors.snow,
    borderRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 2,
    shadowColor: Colors.silkText,
    shadowOpacity: 1,
    elevation: 1
  },
  centered: {
    alignItems: "center"
  },
  defaultButton: {
    borderColor: Colors.silkBorder,
    borderWidth: 0.7,
    flex: 1,
    margin: 5,
    backgroundColor: Colors.snow,
    borderRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 2,
    shadowColor: Colors.silkText,
    shadowOpacity: 1,
    elevation: 1
  },
  middleButton: {
    borderColor: Colors.silkBorder,
    borderWidth: 0.7,
    marginVertical: 5,
    flex: 1,
    backgroundColor: Colors.snow,
    borderRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 2,
    shadowColor: Colors.silkText,
    shadowOpacity: 1,
    elevation: 1
  },
  sectionText: {
    textAlign: "center",
    fontFamily: Fonts.base,
    fontSize: 14,
    marginHorizontal: Metrics.baseMargin,
    lineHeight: 30,
    marginVertical: Metrics.doubleBaseMargin,
    color: Colors.text
  },
  banner: {
    position: "absolute",
    width: Metrics.screenWidth,
    backgroundColor: Colors.silk,
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    left: 0,
    right: 0,
    height: 36
  },
  bannerLabel: {
    ...Fonts.style.h1,
    fontSize: 12,
    color: Colors.snow
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.silk,
    width: Metrics.screenWidth,
    flex: 1,
    marginBottom: 30
    // padding: 0
  },
  image: {
    resizeMode: "cover",
    // height: Metrics.images.logo,
    width: Metrics.screenWidth,
    // margin: Metrics.baseMargin
    // margin: -12,
    padding: 0
  }
});

import { Platform } from "react-native";

const colors = {
  background: "#1F0808",
  clear: "#005ba6",
  facebook: "#3b5998",
  transparent: "rgba(0,0,0,0)",
  steel: "#CCCCCC",
  error: "rgba(200, 0, 0, 0.8)",
  ricePaper: "rgba(255,255,255, 0.75)",
  frost: "#D8D8D8",
  cloud: "rgba(200,200,200, 0.35)",
  windowTint: "rgba(0, 0, 0, 0.4)",
  panther: "#161616",
  charcoal: "#595959",
  coal: "#2d2d2d",
  bloodOrange: "#fb5f26",
  ember: "rgba(164, 0, 48, 0.5)",
  fire: "#ffffff",
  drawer: "rgba(30, 30, 29, 0.95)",
  eggplant: "#251a34",
  border: "#483F53",
  banner: "#5F3E63",

  silk: "#005ba6",
  silkGold: "#b07e12",
  silkLight: "#1c7ece",
  silkDark: "#07497f",
  silkText: "grey",
  silkBorder: "#efefef",

  snow: "white",
  red: "#E64044",
  redShadow: "#E83E3F",
  silver: "#F3F5F6",
  purple: "#005ba6",
  darkPurple: "#07497f",
  purpleShadow1: "#1c7ece",
  purpleShadow2: "#1c7ece",
  headerPurple: "#07497f",
  avatarBorder: "#DCE3E8",
  lightText: "#656565",
  text: "#000000",
  transparentBump:
    Platform.OS === "ios" ? "rgba(140,42,140, 0.5)" : "rgba(140,42,140, 0.9)"
};

export default colors;

import DebugConfig from "./DebugConfig";
import "./ReactotronConfig";

if (__DEV__) {
  console.disableYellowBox = !DebugConfig.yellowBox;
}

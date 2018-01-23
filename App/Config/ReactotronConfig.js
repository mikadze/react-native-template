import Config from "./DebugConfig";
import AppConfig from "./AppConfig";
import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";

Reactotron.configure({ name: AppConfig.name })
  .useReactNative()
  .use(reactotronRedux());

if (Config.useReactotron) {
  // let's connect!
  Reactotron.connect();

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear();

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
}

console.tron = Reactotron;

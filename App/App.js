import React, { Component } from "react";
import { Text, View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import StoreCreator from "./Redux";
import ReduxNavigation from "./Navigation/ReduxNavigation";
import Reactotron from "reactotron-react-native";
import "./Config";

const store = StoreCreator();

class App extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    this._loadAssets();
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }
  _loadAssets = async () => {};
  render() {
    return (
      <Provider store={store}>
        <ReduxNavigation />
      </Provider>
    );
  }
}

// export default codePush(App);
export default App;

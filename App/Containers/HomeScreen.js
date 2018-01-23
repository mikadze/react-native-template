import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  AsyncStorage,
  Linking,
  TouchableWithoutFeedback
} from "react-native";
import styles from "./Styles/HomeScreenStyle";
import Images from "../Themes/Images";
import Colors from "../Themes/Colors";
import ButtonBox from "../Components/ButtonBox";
import { socket } from "../Services/Socket";
import { connect } from "react-redux";

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarVisible: false,
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      count: 0
    };
  }

  async componentDidMount() {
    this._mounted = true;
    let u;
    try {
      u = JSON.parse(await AsyncStorage.getItem("user"));
    } catch (e) {
      console.error(e);
    }
    if (this.props.user || u) {
      const user = this.props.user || u;
      socket.emit("REQUEST_UNREAD_COUNT", user._id);
      // this.setState({ loading: true })
      // setTimeout(() => {
      //   this._mounted && this.setState({ loading: false })
      // }, 2000)
    }

    socket.on("UNREAD_MESSAGE_COUNT", count => {
      this._mounted && this.setState({ count });
    });
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  openComponents = () => {
    this.props.navigation.navigate("Home");
  };

  openUsage = () => {
    this.props.navigation.navigate("Location");
  };

  openConf = () => {
    this.props.navigation.navigate("AboutInfo");
  };

  openTheme = () => {
    this.props.navigation.navigate("About");
  };

  openDevice = () => {
    this.props.navigation.navigate("Sponsors");
  };

  openTravel = () => {
    this.props.navigation.navigate("Travel");
  };

  openGeogriaInfo = () => {
    this.props.navigation.navigate("GeorgiaInfo");
  };

  openSpeakers = () => {
    this.props.navigation.navigate("Speakers");
  };

  openParticipants = () => {
    this.props.navigation.navigate("Participants");
  };

  openChat = () => {
    this.props.navigation.navigate("ChatUsers");
  };

  openB2B = () => {
    this.props.navigation.navigate("B2BMeetings");
  };

  render() {
    if (this.state.loading)
      return (
        <View style={{ flex: 1 }}>
          <ActivityIndicator
            color={Colors.snow}
            size="large"
            animating={this.state.fetching}
            style={{
              flex: 1,
              backgroundColor: Colors.transparent,
              justifyContent: "center",
              alignItems: "center",
              zIndex: 10,
              padding: 8
            }}
          />
        </View>
      );
    return (
      <View style={styles.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={styles.container}
        >
          {/* <View style={styles.logoContainer}>
            <Image
              resizeMode="cover"
              source={Images.silkLogo}
              style={styles.image}
            />
          </View> */}
          <View style={styles.iconsContainer}>
            <View style={styles.buttonsContainer}>
              <ButtonBox
                onPress={this.openConf}
                style={styles.defaultButton}
                image={Images.agenda}
                text="ABOUT FORUM"
              />
              <ButtonBox
                onPress={this.openGeogriaInfo}
                style={styles.middleButton}
                image={Images.agenda}
                text="ABOUT GEORGIA"
              />
              <ButtonBox
                onPress={this.openComponents}
                style={styles.defaultButton}
                image={Images.agenda}
                text="AGENDA"
              />
            </View>
            {/* <View style={styles.buttonsContainer}>
              <ButtonBox
                onPress={this.openSpeakers}
                style={styles.defaultButton}
                image={Images.speakers}
                text="SPEAKERS"
              />
              <ButtonBox
                onPress={this.openChat}
                style={styles.middleButton}
                image={Images.chat}
                text="CHAT"
                badge={this.state.count}
              />
              <ButtonBox
                onPress={this.openDevice}
                style={styles.defaultButton}
                image={Images.partners}
                text="PARTNERS"
              />
            </View>
            <View style={styles.buttonsContainer}>
              <ButtonBox
                onPress={this.openUsage}
                style={styles.defaultButton}
                image={Images.locations}
                text="LOCATIONS"
              />
              <ButtonBox
                onPress={this.openTheme}
                style={styles.middleButton}
                image={Images.contact}
                text="CONTACT"
              />
              <ButtonBox
                onPress={this.openTravel}
                style={styles.defaultButton}
                image={Images.travel}
                text="TRAVEL INFO"
              />
            </View>
            <View style={styles.buttonsContainer}>
              <ButtonBox
                onPress={this.openB2B}
                style={styles.b2bButton}
                image={Images.meeting}
                text="B2B MEETINGS"
              />
            </View> */}
          </View>
        </ScrollView>
        <TouchableWithoutFeedback
          onPress={() => Linking.openURL("http://biznetx.org/")}
        >
          <View style={styles.banner}>
            <Text style={styles.bannerLabel}>© GiS developed by BiznetX</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    // user: state.chat.user
  };
};

export default connect(mapStateToProps)(HomeScreen);

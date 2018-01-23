import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./Styles/ButtonBoxStyle";

export default class ButtonBox extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
    image: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    text: PropTypes.string
  };

  render() {
    const badge = this.props.badge === 0 ? null : this.props.badge;
    return (
      <TouchableOpacity
        style={[styles.container, this.props.style]}
        onPress={this.props.onPress}
      >
        <Image
          resizeMode="contain"
          source={this.props.image}
          style={styles.image}
        />
        <Text style={styles.label}>{this.props.text}</Text>
        {badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

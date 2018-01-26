import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import { LinearGradient } from 'expo'


export default class NavigationButton extends Component {

  render() {
    return (
        <TouchableWithoutFeedback onPress={this.props.onPress}>
          <LinearGradient
            colors={this.props.active ? ['#F63669', '#7E34A9'] : ["white", "white"]}
            start={[1, 0]}
            style={styles.wrapper}
          >
            <Text style={[styles.copy, this.props.active && styles.copyActive]}>
              {this.props.text}
            </Text>
          </LinearGradient>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: "32%",
    padding: 15,
    paddingTop: 17,
    borderRadius: 100,
    maxWidth: "100%",
    height: 55,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#979797",
    overflow: "hidden",
  },
  copy: {
    fontSize: 14,
    fontFamily: "Nunito",
    textAlign: "center",
    color: "#673CFF",
  },
  copyActive: {
    color: "white",
  },
})

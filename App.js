import React, {Component} from 'react'
import {View, ScrollView, Text, StyleSheet, Linking} from 'react-native'

import { Font } from 'expo'

import NavigationButton from './components/NavigationButton'
import CalendarInput from './components/CalendarInput'

export default class App extends Component {

  state = {
    fontLoaded: false,
    btnValue: 'Pregnant',
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Nunito': require('./assets/fonts/Nunito-Regular.ttf'),
    })
    this.setState({ fontLoaded: true })
  }

  _handleNavigation = (value) => {
    this.setState({ btnValue: value })
  }

  render() {
    return (
      <ScrollView style={styles.wrapper}>
        {
          this.state.fontLoaded ? (
            <View style={{marginBottom: 70}}>
              <Text style={styles.title}>Fun that you want to use Preggers!</Text>
              <Text style={styles.copy}>I am:</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <NavigationButton
                  text="Pregnant"
                  active={this.state.btnValue == 'Pregnant'}
                  onPress={() => this._handleNavigation('Pregnant')}
                />
                <NavigationButton
                  text="Partner"
                  active={this.state.btnValue == 'Partner'}
                  onPress={() => this._handleNavigation('Partner')}
                />
                <NavigationButton
                  text="Testing"
                  active={this.state.btnValue == 'Testing'}
                  onPress={() => this._handleNavigation('Testing')}
                />
              </View>
              <Text style={styles.copySm}>
                Välkommen. Det är lätt att komma igång! Om du är gravid och vet ditt beräknade förlossningsdatum anger du det. Om du inte vet så räknar appen ut det åt dig. Om du redan har barn anger du ditt barns födelsedag. (Du kan lägga till flera barn senare)
              </Text>
              <Text style={styles.copy}>Help me calculate date of birth:</Text>
              <CalendarInput placeholder="The first day of your last period" />
              <Text style={styles.copy}>Calculated birthday:</Text>
              <CalendarInput />
              <Text
                style={styles.linkTiny}
                onPress={() => Linking.openURL('http://google.com')}
              >
                I don’t have any children but would like to try the app
              </Text>
            </View>
          ) : null
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    paddingTop: 40,
    flex: 1,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Nunito",
  },
  copy: {
    fontSize: 14,
    color: "#414260",
    marginTop: 15,
    marginBottom: 10,
    fontFamily: "Nunito",
  },
  copySm: {
    color: "#2B3857",
    fontSize: 13,
    lineHeight: 24,
    marginTop: 30,
    fontFamily: "Nunito",
    marginBottom: 45,
  },
  linkTiny: {
    color: "#7C8AAC",
    fontSize: 12,
    textDecorationLine: "underline",
    marginTop: 30,
    fontFamily: "Nunito",
  },
})

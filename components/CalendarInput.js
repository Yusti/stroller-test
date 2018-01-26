import React, {Component} from 'react'
import { View, TextInput, TouchableHighlight } from 'react-native'
import { Calendar } from 'react-native-calendars'

import CalendarLabel from './CalendarLabel'


export default class CalendarInput extends Component {
  state = {
    calendarActive: false,
    value: '',
  }

  _handleCalendarVisibility = () => {
    this.setState({ calendarActive: !this.state.calendarActive })
  }

  _handleDaySelection = (day) => {
    console.log("day", day);
    this._handleCalendarVisibility;
    this.setState({ value: day.dateString });
  }

  render() {
    return (
      <View>
        <View style={{display: this.state.calendarActive ? "flex" : "none"}}>
          <Calendar
            monthFormat={'MM yyyy'}
            onDayPress={day => {this._handleCalendarVisibility(day)}}
          />
        </View>
        <TouchableHighlight style={{position: "relative"}} onPress={this._handleCalendarVisibility}>
          <View>
            <TextInput
              style={{height: 55, borderColor: 'gray', borderWidth: 1, borderRadius: 100, padding: 20}}
              placeholder={this.props.placeholder}
              value={this.state.value}
              underlineColorAndroid="transparent"
            />
            <View style={{position: "absolute", right: 20, top: 13}}>
              <CalendarLabel />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}


import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class Filter extends Component {
  state = {
    filterSelected: null,
  };
  render() {
    return (
      <View style={styles.containerPickerStyle}>
        <RNPickerSelect
          onValueChange={value => {}}
          items={[
            {label: 'Show All', value: 'Show_All'},
            {label: 'Show Forgot', value: 'Show_Forgot'},
            {label: 'Show Memorized', value: 'Show_Memorized'},
          ]}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerPickerStyle: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: 'black',
    padding: 20,
    marginHorizontal: 10,
  },
  pickerStyle: {
    padding: 50,
  },
});
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default class Child extends Component {
  render() {
    return (
      <View>
        <View style={styles.eventgroup}>
          <TouchableOpacity
            onPress={() => {
              this.setState({count: this.state.count + 1});
              console.log(this.state.count);
            }}
            style={styles.boxIncrease}>
            <Text style={styles.increase}>InCrease</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxDescrease}>
            <Text style={styles.descrease}>DeCrease</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxReset}>
            <Text style={styles.reset}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCount: {
    fontSize: 30,
    color: 'red',
  },
  eventgroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  boxIncrease: {
    borderRadius: 10,
    backgroundColor: 'green',
  },
  boxDescrease: {
    borderRadius: 10,
    backgroundColor: 'red',
  },
  boxReset: {
    borderRadius: 10,
    backgroundColor: 'orange',
  },
  increase: {
    fontSize: 20,
    padding: 10,
    color: 'white',
  },
  descrease: {
    fontSize: 20,
    padding: 10,
    color: 'white',
  },
  reset: {
    fontSize: 20,
    padding: 10,
    color: 'white',
  },
});
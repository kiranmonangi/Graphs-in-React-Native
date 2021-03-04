import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import { BarChart, XAxis } from 'react-native-svg-charts'

class Chart extends Component
{
  constructor (props)
  {
    super(props);
  }

  render ()
  {
    const data  = [29, 30, 70, 50, 34, 98, 51, 35, 53, 24, 50];
    return (
      <View style={styles.container}> 
        <BarChart
          style={{ flex: 1 }}
          data={ data }
          contentInset={{ top: 30, bottom: 30 }}
        />

        <XAxis
          style={{ marginHorizontal: -10, marginTop: 15}}
          data={ data }
          formatLabel={ (value, index) => index }
          contentInset={{ left: 25, right: 25 }}
        />
        <TouchableOpacity style={styles.loginButton} onPress={()=> this.props.navigation.navigate('Graph2')}>
              <Text style={styles.loginButtonText}>Next Graph</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '60%'
  },
  loginButton: {
    backgroundColor: 'blue',
    opacity:0.6,
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Chart;
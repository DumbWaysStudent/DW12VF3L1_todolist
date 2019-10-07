import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component{
  render(){

    const data = [
      'work',
      'swim',
      'study',
      'sleep',
      'run',
    ]

    return(
      <View>
        
        { data.map((item) => {
          return <Text style={styles.list}>{item}</Text>
        })}

      </View>
    );
  }
}

export default App;

const styles=StyleSheet.create({
  list: {
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: '#000'
  }
});

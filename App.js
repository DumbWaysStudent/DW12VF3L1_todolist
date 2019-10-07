import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native'

class Add extends Component {

  constructor(props) {
    super(props)

    //list data
    this.state = {
      datas: [
        'work',
        'swim',
        'study',
        'sleep',
        'run',
      ],
      data: '',
    }
  }

  //inputan data
  onHandleAdd = (text) => {
    this.setState({data: text})
  }

  //masukkan inputan data ke list
  inputBtn = () =>{
    if(this.state.data !== ''){
      let insert = this.state.datas.concat(this.state.data)
      this.setState({datas: insert})
      this.setState({data: ''})
    }else{
      alert('Field Tidak boleh kosong!')
    }

  }


  render() {

    return (

      <View>
        
        <View style={styles.header}>
          <Text style={styles.headerText}>TODO APP</Text>
        </View>

        <View style={styles.direc}>
              
          <TextInput style={styles.inputTxt} placeholder='Type Here' type='text' onChangeText={(text) => this.onHandleAdd(text)} value={this.state.data}
          />

          <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton} onPress={this.inputBtn} >Add</Text>
          </TouchableOpacity>

                 
        </View>
        
        <ScrollView>
          {this.state.datas.map((item) => 
            <Text style={styles.textList}>{item}</Text>)
          }
        </ScrollView>
            

      </View>
          
      
    )
  }

}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd'
  },

  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },

  textList: {
    fontSize: 28,
    borderWidth: 1,
    marginBottom: 5,
    borderColor: '#E91E63'
  },

  inputTxt:{
    width:'80%',
    borderColor:'red',
    marginRight: 3,
    marginTop: 10,
    height:50,
    borderWidth:2,
    fontSize:18,

  },
  button:{
    borderRadius:2,
    backgroundColor:'#E91E63',
    marginTop: 10,
    height:50,
    width:70,
    height:50,
  },
  
  textButton:{
    textAlign:'center',
    justifyContent:'center',
    fontWeight:'bold',
    fontSize:24,
    paddingTop:7,
    },
  direc:{
    flexDirection:'row',
    justifyContent:'center',
    paddingBottom:50,
    alignItems:'center',
    
  },
})

export default Add;
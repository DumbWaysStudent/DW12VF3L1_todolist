import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, ScrollView, CheckBox } from 'react-native'
import Fa from 'react-native-vector-icons/FontAwesome5';

class Add extends Component {

  constructor(props) {
    super(props)

    //list data
    this.state = {
      datas: [
        {id: 1, name: 'Work', done: false},
        {id: 2, name: 'Swim', done: false},
        {id: 3, name: 'Play', done: false},
        {id: 4, name: 'Sleep', done: false},
        {id: 5, name: 'Run', done: false},
      ],
      data: '',
    }
  }

  //Buat View List
  viewLists = () => {
    return this.state.datas.map((item, index) => {
      return(
        <View style={{flexDirection: "row", flex: 1, borderWidth: 1, borderColor: "#E91E63", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10, marginBottom: 10, marginHorizontal: 10}}>
          
          <View style={{ flexDirection: "row", alignItems:'center' }}>
            <CheckBox
              style={styles.check}
              value={item.done}
              onValueChange={() => this.onHandleCheckbox(item.id)}
            />
            <Text style={styles.textList}>{item.name}</Text>
          </View>
          
          <TouchableOpacity onPress={() => this.onDelete(item.id)} >
            <Fa name='trash' size={18} color='#E91E63' />
          </TouchableOpacity>

        </View>
      )
    })
  }

  //Cheklist
  onHandleCheckbox = (id) =>{  
    let index = this.state.datas.findIndex((item) => item.id == id);
    if (this.state.datas[index].done == false) {
      this.setState((state) => {
        return state.datas[index].done = true
      })
    } else {
      this.setState((state) => {
        return state.datas[index].done = false
      })
    }
  }

  //hapus data
  onDelete = (id) =>{
    this.setState({
        datas: this.state.datas.filter((datas) => {
          return datas.id !== id
        })
    })
  }

  //inputan data
  onHandleAdd = (text) => {
    this.setState({data: text})
  }

  //masukkan inputan data ke list
  inputBtn = () =>{
    if(this.state.data !== ''){
      let addItem = this.state.datas.length,
      newInput = [{
        id: addItem + 1,
        name: this.state.data,
        done: false
      }]
      
      this.setState({datas: [...this.state.datas, ...newInput]});
      this.setState({data: ''})

    }else{
      alert('Field can not be empty')
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
          {this.viewLists()} 
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
    marginBottom: 5,
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
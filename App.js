import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, ScrollView, CheckBox } from 'react-native'
import Fa from 'react-native-vector-icons/FontAwesome5';

class Add extends Component {

  constructor(props) {
    super(props)

    this.state = {
      datas: [
        {id:1, name:'Work', done: true },
        {id:2, name:'Swim', done: true },
        {id:3, name:'Play', done: false },
        {id:4, name:'Swim', done: false },
        {id:5, name:'Run', done: false },
      ],
      data: '',
      titleBtn: 'Add',
      editItem: 0,
      editName:''
    }
  }
  viewList = () => {
    return this.state.datas.map((item) => {
      return (
        <ScrollView>
          <View style={styles.direcL}>
              <CheckBox
                value={item.done}
                onValueChange={() => this.onHandleCheckbox(item.id)}
              />

              <Text style={styles.textList}>
                {item.name}
              </Text>
                    
              <TouchableOpacity onPress={() => this.onHandledEdit(item.id, item.name)}>
                <Fa name='edit' style={styles.btnAdd} />
              </TouchableOpacity>
                    
              <TouchableOpacity onPress={() => this.onHandleDelete(item.id)}>
                <Fa name='trash' style={styles.btnDel} />
              </TouchableOpacity> 
          </View>
        </ScrollView>
      );
    })
  }

  onHandleAdd = (text) => {
    this.setState({data: text})
  }

  onHandleBtn = (input) =>{
      if(this.state.data !== ''){
        if(input == 'Add'){
            let tambah = this.state.datas.length,
            newInput = [{
                id: tambah + 1,
                name : this.state.data,
                done : false
            }]
            this.setState({datas: [...this.state.datas, ...newInput]});
            this.setState({data:''})
        }else if(input == 'Edit'){
          let name = this.state.editName
          let index = this.state.datas.findIndex((x) => x.name == name)
            this.setState((state) => {
              return state.datas[index].name = state.data
            })
            this.setState({data: '', titleBtn: 'Add'})      
        }
      }else{
          alert('Field Tidak Boleh Kosong')
      }
      
  }

  onHandleDelete = (id) =>{
    this.setState({
        datas: this.state.datas.filter((datas) => {
          return datas.id !== id
        })
    })
  }

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

  onHandledEdit = (id, name) =>{
    this.setState({data : name, titleBtn: 'Edit', editName: name})
    this.setState({editItem: (id -1)})
  }


  render() {

    return (

      <View>

        <View style={styles.direc}>
              
          <TextInput style={styles.inputTxt}
            placeholder='New todo'
            type='text'
            onChangeText={(text) => this.onHandleAdd(text)} value={this.state.data}
          />
            
          <TouchableOpacity style={styles.btn}>
              <Text
              style={styles.textOne}
              onPress={() => this.onHandleBtn(this.state.titleBtn)}
              >{this.state.titleBtn}</Text>
          </TouchableOpacity>

                 
        </View>
            
        {this.viewList()}
            
      </View>
          
      
    )
  }

}

const styles = StyleSheet.create({
  textList: {
    fontSize: 28,
    flex:8,
    paddingTop:30,
  },
  inputTxt:{
    width:'80%',
    borderColor:'#E91E63',
    height:50,
    borderWidth:2,
    fontSize:18,
    marginTop:10,
    marginRight:5,

  },
  btn:{
    borderRadius:2,
    backgroundColor:'#E91E63',
    width:70,
    height:50,
    marginTop:10,
  },
  textOne:{
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
  direcL:{
      flexDirection:'row',
      borderBottomWidth:2,
      borderWidth: 1,
      marginBottom: 10,
      borderColor: '#E91E63',
  },
  btnDel:{
      fontSize:30,
      marginTop:20,
      padding:10,
      color:'#E91E63',
      
  },
  btnAdd:{
    fontSize:30,
    marginTop:20,
    padding:10,
    color:'#E91E63',
    
},
  txtEdDl:{
      textAlign:'center',
      paddingTop:7,
  },
  check:{
    marginTop:35,
  }
})


export default Add;
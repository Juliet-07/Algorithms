// import React, {Component} from "react";
// import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

// const makeid = length => {
//   let result = "";
//   let characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let charactersLength = characters.length;
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// };

// const Todos = [
//   {id:1, name: 'Study'},
//   {id:2, name: 'visit'},
//   {id:3, name: 'Code'},
//   {id:4, name: 'Walk'},
//   {id:5, name: 'Bath the dog'},
//   {id:6, name: 'Shopping'},
//   {id:7, name: 'Clear workspace'},
//   {id:8, name: 'sleep'},
//   {id:9, name: 'Set the day plan'},
//   {id:10, name: 'Eat'},
//   {id:11, name: 'play soccer'},
//   {id:12, name: 'Pray'},
//   {id:13, name: 'watch netflix'},
//   {id:14, name: 'meditation'}
// ]
// class Todo extends Component {
//   render() {
//     return (
//       <View style={styles.main}>
//           {/* Header View */}
//         <View style={styles.headerContainer}> 
//           <Text style={styles.headerText}> Menu </Text>
//           <Text style={styles.headerText}> Todo App </Text>
//           <Text style={styles.headerText}> Settings </Text>
//         </View>

//         {/* Body View */}
//         <FlatList
//         data={Todos}
//         renderItem={({item})=><Text style={styles.todoText}>{item.name}</Text>}
//         indexExtractor={item => makeid(5)}
//         />
//         {/* <ScrollView style={{flex:5}}>
//           {
//             Todos.map((eachTodoItem)=>{
//               return <Text style={styles.todoText}>{eachTodoItem.name}</Text>
//             })
//           }
//         </ScrollView> */}

//         {/* Footer View */}
//         <View style={{ backgroundColor:'#95a5a6'}}><Text style={styles.headerText}>JULIET</Text></View>
//       </View>
//     );
//   }
// }
// export default Todo

// const styles = StyleSheet.create({
//     main:{
//         flex:1,
//         backgroundColor:'#2ecc71'
//     },
//      headerText:{
//         color:'#eee',
//         fontSize: 20,
//         fontWeight:'900'
//     },
//     headerContainer:{
//         flex:0,
//         flexDirection:'row',
//         justifyContent: 'space-between',
//         paddingLeft:5,
//         paddingRight:5,
//         backgroundColor:'#95a5a6'
//     },
//     todoText:{
//         color: 'white',
//         fontSize: 16,
//         backgroundColor:'#bdc3c7',
//         padding: 10,
//         marginTop: 14,
//         borderRadius: 10
//     }
// })
import React from "react";
import {
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  TextInput, 
  TouchableNativeFeedback, 
  Button
} 
from "react-native";
import Entypo from 'react-native-vector-icons/Entypo'
const makeid = length => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export default class Todo extends React.Component {
  doSomething = ()=>{console.log('hello')}
  state = {
    list: [],
    newList:""
  }
  handleChange = (value)=>{
    this.setState({newList:value})
  }
  addNewList = () =>{
    if(this.state.newList.trim() === ""){
      return;
    }
    this.setState(prevState =>{
      return {
          list: prevState.list.concat(prevState.newList)
      }
    })
  }
  deleteList = eachList =>{
    this.setState(prevState => {
      return{
        list: prevState.list.filter(lists =>lists !== prevState.list[eachList])
      }
    })
  }
  render() {
    return (
      //container ViMath.random()
      <View style={styles.main}>
        {/* Header View */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}> Menu </Text>
          <Text style={styles.headerText}> Todo App </Text>
          <Text style={styles.headerText}> Settings </Text>
        </View>

        {/* Body View */}
        <View style={styles.body}>
            <View style={styles.addContainer}>
            <TextInput
            style={styles.textInput}
            underlineColorAndroid = "transparent"
            placeholder = "New Todo"
            placeholderTextColor = "gray"
            onChangeText = {this.handleChange}
            value={this.state.newList}
            />

          {/* Button */}
            <TouchableNativeFeedback onPress={this.addNewList}>
              <Entypo
                style={styles.addButton} 
                name='add-to-list'
                size={20}
              />
            </TouchableNativeFeedback>

            </View>
                <FlatList
                style={styles.flatlist}
                data={this.state.list}
                renderItem={({ item, index }) =>
                <View style={styles.viewContainer}>
                    <Text style={styles.todoText}>{item}</Text>
                    <TouchableNativeFeedback onPress={()=>this.deleteList(index)}>
                      <View style={styles.addButton}><Text>Delete</Text></View>
                    </TouchableNativeFeedback>
                </View>}
                keyExtractor={item => makeid(5)}
               />
            </View>

        {/* Footer View */}
        <View style={{ flex: 1, backgroundColor: '#222e50' }}>
          <Text style={styles.footerText}>JULIET</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  headerText: {
    color: "white",
    fontSize: 20,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: '#222e50',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomColor:'#ffffff',
    borderBottomWidth:0.5,
  },
  todoText: {
    color: '#222e50',
    fontSize: 16,
    backgroundColor:'transparent',
    padding: 14,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: .5,
    borderColor: '#222e50',
    width:'75%'
  },
  textInput:{
    flex: 0,
    justifyContent:'space-around',
    marginBottom: 10,
    width: '60%',
    borderColor: '#222e50',
    borderWidth: .2,
    padding: 10,
    borderRadius: 5,
    height:60
  },
  body:{
    flex: 5,  
    padding: 10,
    backgroundColor:'white'
  },
  footerText: {
    color: "white",
    fontSize: 20,
  },
  addButton:{
    padding:10,
    backgroundColor:"green",
    borderColor:"white",
    borderWidth: 1,
    borderRadius:5,
    marginBottom:30,
    textAlign:"center",
   
  },
  buttonText:{
    color: "white",
    fontSize: 15,
    letterSpacing:1
  },
  flatlist:{
    width: '75%'
  },
  addContainer:{
    flex:0,
    flexDirection:'row'
  },
  viewContainer:{
    flex:1,
    flexDirection:'row'
  },
  flatlistButton:{
    width:'25%',

  }
});
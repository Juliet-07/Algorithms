import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ClassComponent from './ClassComponent';
import Likes from './LikesApp'
import Todo from './Todo'
import LikeCounter from './Counter'

const PresentationalComponent = ()=>{
    return(
        <View style={styles.container}>
            <Text>You are welcome</Text>
            {/* <ClassComponent title='ReactNative'/>
            <Likes/>
            <LikeCounter/>
            {<Todo/>} */}
        </View>
    )
}
export default PresentationalComponent;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#17859b'
    }
})
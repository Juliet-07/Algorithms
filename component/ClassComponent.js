import React, {Component} from 'react';
import {View, Text} from 'react-native';
class ClassComponent extends Component{
    render(){
        console.log(this.props)
        return(
            <View>
                <Text>WELCOME TO REACT-NATIVE</Text>
            </View>
        )
    }
}
export default ClassComponent
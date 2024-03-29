import React, {Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

class Likes extends Component{
    state = {
        likes: 0
    }

    // increaselikes handler
    increaseLikes = () =>{
        this.setState((prevState)=>{
            return{
                likes: prevState.likes + 1
            }
        })
    }

    // decreaselikes handler
    decreaseLikes = ()=>{
        this.state.likes &&
        (this.setState((prevState)=>{
            return{
                likes:prevState.likes - 1
            }
        }))
    }

    // resetlikes handler
    resetLikes = ()=>{
        this.setState(()=>{
            return{
                likes: 0
            }
        })
    }
render(){
    return(
        <View>
            <Text>Welcome To My Likes App</Text>
            <Text>Likes:{this.state.likes}</Text>
            <View style={styles.btn}>
                <Button 
                onPress={this.increaseLikes}
                title='like'
                color='blue'
                />
            </View>
            <View style={styles.btn}>
                <Button 
                onPress={this.decreaseLikes}
                title='unlike'
                color='#841584'
                />
            </View>
            <View style={styles.btn}>
                <Button 
                onPress={this.resetLikes}
                title='reset'
                color='red'
                disabled={this.state.likes<=0}
                />
            </View>
        </View>
    )
}
}
export default Likes

const styles = StyleSheet.create({
    btn:{
        padding:10
    },
    text:{
        fontWeight: 'bold'
    }
})
import React, {useState} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

const LikeCounter = () =>{
    const [likes, setLikes] = useState(0)

    increaseLikes = ()=>{
        setLikes(likes + 1)
    }

    decreaseLikes = ()=>{
        likes &&
        (setLikes(likes - 1))
    }

    Reset = ()=>{
        setLikes(likes<=0)
    }
    return(
        <View>
            <Text>My Likes App</Text>
            <Text>Likes:{likes}</Text>
            <View style={yemi.button}>
            <Button onPress={increaseLikes}
            title="Like"
            color="pink"
            />
            </View>
            <View>
            <Button onPress={decreaseLikes}
            title="Unlike"
            />
            </View>
            <View>
            <Button onPress={Reset}
            title="Reset"
            color="red"
            disabled={likes<=0}
            />
            </View>
        </View>
    )
}
export default LikeCounter

const yemi = StyleSheet.create({
    button:{
        padding:10
    }
})
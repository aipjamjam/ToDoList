import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { style } from '../../styles'

const Button = (props) => {
    return (
        <View>button cuy</View>
    )
}

const ButtonCircle = (props) => {
    return (
        <TouchableHighlight underlayColor='transparent' onPress={props.onPress}>
            <View style={[style.shadowLong, styles.btnCircle]}>
                <Text style={{ fontSize: 30, color: '#fff' }}>+</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    btnCircle: {
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8c69ff'
    }
})

export {
    Button,
    ButtonCircle
}
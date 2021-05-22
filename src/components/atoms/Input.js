import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { color, style } from '../../styles'

const Input = (props) => {
    return (
        <View style={[props.style, styles.wrapper, style.shadowLong]}>
            {/* <Text>Input cuy</Text> */}
            <TextInput
                value={props.value}
                onChangeText={props.onChangeText}
                secureTextEntry={props.password}
                keyboardType={props.keyboardType}
                placeholder={props.placeholder ?? 'placeholder'}
                style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        // flex: 1,
        padding: 10,
        paddingHorizontal: 16,
        // alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 50
    },
    input: {
        // flex: 1,
        height: 30,
        color: color.g900
    }
})

export default Input
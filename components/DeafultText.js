import React from 'react'
import { Text, StyleSheet } from 'react-native'

const DeafultTetx = props => {
    return <Text style={style.text}>{props.children}</Text>
}

const style = StyleSheet.create({
    text : {
fontFamily : 'open-sans'
    }
})

export default DeafultTetx;
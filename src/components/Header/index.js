import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Quiz App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 16,
        backgroundColor: "#14213d",
        alignItems: "center"
    },
    text:{
        color: "white",
        fontSize: 20
    }
})
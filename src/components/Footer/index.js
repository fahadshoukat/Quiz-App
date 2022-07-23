import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>&copy; 2022 Quiz App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 12,
        backgroundColor: "#14213d",
        alignItems: "center"
    },
    text:{
        color: "white",
        fontSize: 16
    }
})
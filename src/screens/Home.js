import React from 'react'
import { Button, Image, StyleSheet, View } from 'react-native'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image source={{uri: "https://source.unsplash.com/250x250/?quiz"}} style={styles.img} />
        <Button title='START' onPress={() => navigation.navigate("Quiz")} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    img:{
        width: 250,
        height: 250,
        marginBottom: 16
    },
})
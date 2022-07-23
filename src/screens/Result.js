import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const Result = () => {
    return (
            <View style={styles.container}>
            <Text style={styles.heading}>Result</Text>
                <View>
                    <Image source={{ uri: "https://source.unsplash.com/250x250/?congratulations" }} style={styles.img} />
                </View>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Home</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

export default Result

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        flex: 1
    },
    heading: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#1a535c",
        marginBottom: 16
    },
    img:{
        width: 250,
        height: 250,
        marginBottom: 16
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginTop: 12,
        backgroundColor: "#284b63",
    },
    text: {
        color: "white",
        fontWeight: "bold"
    }
})
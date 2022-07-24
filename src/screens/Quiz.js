import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Quiz = () => {
    return (
        <View style={styles.container}>
            <View style={styles.question}>
                <Text style={styles.questionText}>Q. This is a Question</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity>
                    <Text>Option-1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Option-2</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Option-3</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Option-4</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.prevBtn}>
                    <Text style={styles.text}>SKIP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextBtn}>
                    <Text style={styles.text}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Quiz

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16
    },
    question:{
        marginVertical: 12,
    },
    questionText:{
        fontSize: 24
    },
    options:{
        marginVertical: 12,
        flex: 1
    },
    buttons:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    nextBtn:{
        borderWidth: 1,
        padding: 8,
        backgroundColor: "#00963c",
        borderRadius: 8,
        borderWidth: 0
    },
    prevBtn:{
        borderWidth: 1,
        padding: 8,
        backgroundColor: "#e63946",
        borderRadius: 8,
        borderWidth: 0
    },
    text:{
        color: "#fff"
    }
})
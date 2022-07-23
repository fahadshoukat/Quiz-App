import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Quiz = () => {
    return (
        <View style={styles.container}>
            <View style={styles.question}>
                <Text>This is a Question</Text>
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
                <TouchableOpacity>
                    <Text>SKIP</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>NEXT</Text>
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
        marginVertical: 12
    },
    options:{
        marginVertical: 12,
        flex: 1
    },
    buttons:{
        flexDirection: "row",
        justifyContent: "space-between"
    }
})
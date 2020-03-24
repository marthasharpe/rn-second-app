import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const StartGameScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <View style={styles.inputContainer}>
                <Text>Choose a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Reset"/>
                    <Button title="Select"/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        padding: 10
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: "80%",
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.2,
        backgroundColor: "white",
        elevation: 5, //android shadow
        padding: 20,
        borderRadius: 10
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around"
    }
})

export default StartGameScreen

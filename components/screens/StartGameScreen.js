import React from 'react';
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../Card';
import Colors from '../../constants/colors';
import Input from '../Input';

const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = React.useState('')
    
    const handleInputChange = (inputText) => {
        // any non-number gets replaced by an empty string
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    return (
        // touch anywhere on the screen to close the keyboard
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Pick a Number</Text>
                <Input
                    value={enteredValue}
                    style={styles.input}
                    keyboardType="numeric"
                    maxLength={2}
                    onChangeText={handleInputChange}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Reset"
                            color={Colors.secondary}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Select"
                            color={Colors.primary}
                        />
                    </View>
                </View>
            </Card>
        </View>
        </TouchableWithoutFeedback>
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
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around"
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: "center"
    }
})

export default StartGameScreen

import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import Card from '../Card';
import Colors from '../../constants/colors';
import Input from '../Input';
import NumberContainer from '../NumberContainer';

const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = React.useState('');
    const [confirmed, setConfirmed] = React.useState(false);
    const [chosenNumber, setChosenNumber] = React.useState();
    
    const handleInputNumber = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const handleInputReset = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const handleInputSubmit = () => {
        const number = parseInt(enteredValue);
        // validate input type
        if (isNaN(number) || number <= 0 || number > 99) {
            // Alert with title, message, and buttons
            Alert.alert(
                'Invalid number!',
                'Choose a number between 1 and 99.',
                [{text: 'Okay', style: 'destructive', onPress: handleInputReset}]
            )
            return;
        }
        setConfirmed(true);
        setChosenNumber(number);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.confirmedContainer}>
                <Text>Chosen number:</Text>
                <NumberContainer>{chosenNumber}</NumberContainer>
                <Button title="START GAME" />
            </Card>
        )
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
                    onChangeText={handleInputNumber}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Reset"
                            color={Colors.secondary}
                            onPress={handleInputReset}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Submit"
                            color={Colors.primary}
                            onPress={handleInputSubmit}
                        />
                    </View>
                </View>
            </Card>
            {confirmedOutput}
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
    },
    confirmedContainer: {
        marginVertical: 20,
        alignItems: "center"
    }
})

export default StartGameScreen

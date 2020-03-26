import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import NumberContainer from '../NumberContainer';
import Card from '../Card';

// function to generate random number
const guessNumber = (min, max, excluded) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === excluded) {
        return guessNumber(min, max, excluded);
    } else {
        return randomNumber;
    }
}

const GameScreen = (props) => {

    const [currentGuess, setCurrentGuess] = React.useState(
        guessNumber(1, 100, props.userChoice)
    );

    return (
        <View style={styles.screen}>
            <Text>Opponent's guess:</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={() => {}} />
                <Button title="HIGHER" onPress={() => {}} />
            </Card>
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
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around"
    },
});

export default GameScreen;
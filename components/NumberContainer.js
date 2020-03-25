import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = (props) => {
    return (
        <View style={styles.numberContainer}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    numberContainer: {
        borderWidth: 1,
        borderColor: "grey",
        padding: 10,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    number: {
        color: Colors.primary,
        fontSize: 22,
        textAlign: "center"
    }
});

export default NumberContainer

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Guess a Number</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.primary,
        width: "100%",
        height: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        fontSize: 20,
        color: "white"
    }
});

export default Header;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Guess a Number</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "red",
        width: "100%",
        height: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        fontSize: 20
    }
});

export default Header;

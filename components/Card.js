import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: "black",
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.2,
        elevation: 5, // android shadow
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10
    }
})

export default Card

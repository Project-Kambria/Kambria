import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function Recipebox() {
    return (
        <View style={styles.container}>
            <Image style={styles.recipeImage} source={require('../assets/placeholder.png')}/>
          <Text style={styles.text}>Recipe</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        margin: '3vw',
    },
    recipeImage: {
        width: '80vw',
        height: '50vw',
    },
    text: {
        margin: 'auto',
        color: '#fff',
        fontSize: 35,
    }
});
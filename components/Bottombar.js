import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Bottombar() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Bottom Bar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '11vw',
        backgroundColor: '#6c8d7d',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 35,
    },
  });
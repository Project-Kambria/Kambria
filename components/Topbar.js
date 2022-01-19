import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Topbar() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Project Kambria</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'fixed',
        top: 0,
        zIndex: 3,
        width: '100%',
        height: '12vw',
        backgroundColor: '#6c8d7d',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: '5vw'
    },
  });
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useNavigate } from 'react-router-native';
import { firebase } from '../database/config';

export default function SettingsScreen() {

    const navigate = useNavigate();

    const onLogOutPress = () => {
        firebase
            .auth()
            .signOut()
            .then((response) => {
                navigate('/login');
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => onLogOutPress()}>
                <Text style={styles.buttonTitle}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    btnContainer: {
        backgroundColor: '#1ac4ac',
        marginTop: 10,
    },
})

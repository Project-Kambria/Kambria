import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import { useNavigate } from 'react-router-native';
import { firebase } from '../database/config';

export default function SettingsScreen(props) {

    const navigate = useNavigate();

    const onGithubPress = () => {
        Linking.canOpenURL("https://github.com/Project-Kambria/Kambria").then(supported => {
            if (supported) {
                Linking.openURL("https://github.com/Project-Kambria/Kambria");
            } else {
                console.log("Unable to open link...");
            }
        });
    }

    const onLogOutPress = () => {
        firebase
            .auth()
            .signOut()
            .then((response) => {
                props.setUser(null)
                navigate('/login');
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => onGithubPress()}>
                <Text style={styles.buttonTitle}>Project Github</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => onLogOutPress()}>
                <Text style={styles.buttonTitle}>Log Out</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {},
    btnContainer: {
        backgroundColor: '#d4dbe1',
        marginTop: 10,
    },
    buttonTitle: {
        fontSize: 20,
        padding: 10
    }
})

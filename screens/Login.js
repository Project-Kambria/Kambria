import React, { useState} from 'react'
import {StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Keyboard, TouchableOpacity} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigate } from 'react-router-native';
import { firebase } from '../database/config';


const LoginScreen = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const onFooterLinkPress = () => {
        navigate('/register')
    }

    const onOtherFooterLinkPress = () => {
        props.setUser(1)
        navigate('/home')
    }

    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return;
                        }
                        props.setUser(uid)
                        navigate('/home');
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.title}>
                    <Text style={styles.title}>[Project</Text>
                    <Text style={styles.titleAlt}>Kambria]</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}/>
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    value={password}/>
                <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}><Text onPress={() => onOtherFooterLinkPress()} style={styles.footerLink}>Continue without signing in</Text></Text>
                </View>
            </View>
            <View style={styles.bottomView}>
                <Text>Project-Kambria © 2022</Text>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 55,
        color: '#000',
        marginTop: 50
    },
    titleAlt: {
        fontSize: 55,
        color: '#1ac4ac',
        paddingLeft: 100,
    },
    input: {
        backgroundColor: '#dfdfdf',
        padding: 5,
        fontSize: 28,
        width: 265,
        marginTop: 5,
        marginBottom: 5,
    },
    form: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        backgroundColor: '#1ac4ac',
        marginTop: 10,
    },
    footerView: {
        alignItems: 'center',
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    },
    bottomView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 30
    }
})

export default LoginScreen;

import { useNavigation } from '@react-navigation/core'
import React, { useEffect , useState } from 'react'
import {StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Keyboard} from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { auth } from '../database/config'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { NativeScreenNavigationContainer } from 'react-native-screens';

export default function LoginScreen({}) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.navigate("Home")
          }
        })
    
        return unsubscribe
      }, [])

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onRegisterPress = () => {
        /*if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        firebase.firestore().collection('users')
        const user = userCredential.user;
        navigation.navigate('Home');
        // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        // ..
        });*/
        /*if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        initializeApp
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('Home', {user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });*/
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
        })
        .catch(error => alert(error.message))
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
                        placeholder='Full Name'
                        onChangeText={(text) => setFullName(text)}
                        value={fullName}/>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={ email }
                        onChangeText={text => setEmail(text)}/>
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        value={ password }
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={true}/>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder='Confirm Password'
                        onChangeText={(text) => setConfirmPassword(text)}
                        value={confirmPassword}/>
                    <TouchableOpacity
                        style={styles.btnContainer}
                        onPress={onRegisterPress}>
                        <Text style={styles.buttonTitle}>Create account</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 55,
        color: '#000',
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
    footerView: {
        alignItems: 'center',
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    btnContainer: {
        backgroundColor: '#1ac4ac',
        marginTop: 10,
    }
})
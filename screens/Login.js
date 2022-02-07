import React, { Component } from 'react';
import firebase from '../database/config'
import {StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Keyboard} from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

class Login extends Component {
    constructor() {
      super();
      this.state = { 
        email: '', 
        password: '',
        isLoading: false
      }
    }
  
    onTextChange = (val, prop) => {
      const state = this.state;
      state[prop] = val;
      this.setState(state);
    }
  
    signIn = () => {
      if(this.state.email === '' && this.state.password === '') {
        Alert.alert('Enter correct details.')
      } else {
        this.setState({
          isLoading: true,
        })
        firebase
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          this.setState({
            isLoading: false,
            email: '', 
            password: ''
          })
          this.props.navigation.navigate('Home')
          alert('Logged in to app')
        })
        .catch(error => this.setState({ errorMessage: error.message }))
      }
    }
  
    render() {
      if(this.state.isLoading){
        return(
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="grey"/>
          </View>
        )
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
                        value={this.state.email}
                        onChangeText={(val) => this.onTextChange(val, 'email')}/>
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        value={this.state.password}
                        onChangeText={(val) => this.onTextChange(val, 'password')}
                        secureTextEntry={true}/>
                        <View style={styles.btnContainer}>
                            <TouchableOpacity title="Log in" onPress={() => this.signIn()}><Text>Submit</Text></TouchableOpacity>
                        </View>
                </View>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={() => this.props.navigation.navigate('Registration')} style={styles.footerLink}>Sign up</Text></Text>
                </View>
        </KeyboardAvoidingView>
    );
}
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

export default Login;

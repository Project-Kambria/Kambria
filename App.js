import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import RegistrationScreen from './screens/Registration';
import SettingsScreen from './screens/Settings';

import { firebase } from './database/config';

const Stack = createStackNavigator();

export default function App() {
  
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  /*if (loading) {	
    return (	
      <></>	
    )	
  }

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);*/

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'HomeScreen' : 'Login'}>
        <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen screenOptions={{ headerStyle: { backgroundColor: '#1ac4ac', }, headerTintColor: '#fff', }} name="HomeScreen" options={({navigation}) => ({
              headerRight: () => (
                <TouchableOpacity
                style={styles.navBtn}
                onPress={() => navigation.navigate('Settings')}>
                  <Text style={styles.navBtnText}>[Settings]</Text>
                </TouchableOpacity>
              )
              })}>
              {props => <HomeScreen {...props} extraData={user} />}
            </Stack.Screen>
            <Stack.Screen screenOptions={{
              headerStyle: {
                backgroundColor: '#1ac4ac',
              },
              headerTintColor: '#fff',
            }} name="Settings" component={SettingsScreen}>
            </Stack.Screen>
            <Stack.Screen name="Login" component={LoginScreen} screenOptions={{headerShown: false}}/>
            <Stack.Screen name="Registration" component={RegistrationScreen} screenOptions={{headerShown: false}}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navBtn: {
    paddingRight: 20,
  },
  navBtnText: {
    fontSize: 18,
    color: '#fff'
  }
})
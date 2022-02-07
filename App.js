import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import RegistrationScreen from './screens/Registration';
import SettingsScreen from './screens/Settings';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerStyle: { backgroundColor: '#1ac4ac', }, headerTintColor: '#fff', }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({navigation}) => ({
              headerRight: () => (
                <TouchableOpacity
                  style={styles.navBtn}
                  onPress={() => navigation.navigate('Settings')}>
                    <Text style={styles.navBtnText}>[Settings]</Text>
                </TouchableOpacity>
              )
            })} />
            <Stack.Screen name="Settings" component={SettingsScreen}/>
        </Stack.Group>
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
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
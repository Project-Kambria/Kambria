import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createRef } from 'react';

import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Footer from './components/Footer';

import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import SettingsScreen from './screens/Settings';

const Stack = createStackNavigator();
const navigationRef = createRef();


export default function App() {
  // Dev: If user is logged in or not
  const state = {
    isLoggedIn: true
  }
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {state.isLoggedIn ? (
          <Stack.Group
            screenOptions={{
              headerStyle: {
                backgroundColor: '#1ac4ac',
              },
              headerTintColor: '#fff',
            }}>
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
        ) : (
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
      <Footer navigationRef={navigationRef}/>
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
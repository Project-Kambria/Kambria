import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Login from './screens/Login';
import Profile from './screens/Profile';

const Stack = createStackNavigator();

export default function App() {
  // Dev: If user is logged in or not
  let state = {
    isLoggedIn: false
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile}/>
          </Stack.Group>
        ) : (
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Login from '../screens/Login';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={Home}/>
            <Drawer.Screen name='Login' component={Login}/>
        </Drawer.Navigator>
    );
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator/>
        </NavigationContainer>
    )
}

export default Navigation;
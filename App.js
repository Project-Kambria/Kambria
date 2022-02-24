import { useState, useEffect } from 'react';

import { NativeRouter, Route, Routes } from 'react-router-native';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import RegistrationScreen from './screens/Registration';
import SettingsScreen from './screens/Settings';

import * as Font from "expo-font";
import { View, Text } from 'react-native';
import RecipeScreen from './screens/Recipe';
import FridgeScreen from './screens/Fridge';

import { LogBox } from 'react-native';

export default function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  LogBox.ignoreLogs(['Setting a timer']);

  useEffect(() => {
    async function getFonts() {
        await Font.loadAsync({
            'icomoon-svg-icons': require('./assets/fonts/icomoon-svg-icons.ttf')
        });
        setLoading(false);
    }
    getFonts();
  }, []);

  if (loading) {
    return (
      <View><Text>Loading...</Text></View>
    )
  } else {
    return (
      <NativeRouter>
        {user ? <Header/> : null}
  
        <Routes>
          <Route exact path="/" element={user ? <HomeScreen/> : <LoginScreen setUser={setUser}/>}/>
          <Route path="/home" element={<HomeScreen/>}/>
          
          <Route path="/recipe/:id" element={<RecipeScreen/>}/>
          <Route path="/fridge/:uid" element={<FridgeScreen/>}/>

          <Route path="/login" element={<LoginScreen setUser={setUser}/>}/>
          <Route path="/register" element={<RegistrationScreen setUser={setUser}/>}/>
          <Route path="/settings" element={<SettingsScreen/>}/>
        </Routes>
  
        {user ? <Footer uid={user}/> : null}
      </NativeRouter>
    )
  }
}

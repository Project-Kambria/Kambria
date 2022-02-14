import { useState } from 'react';
import { Text, View } from 'react-native';

import { NativeRouter, Route, Routes, Link } from 'react-router-native';
import Footer from './components/Footer';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import RegistrationScreen from './screens/Registration';
import SettingsScreen from './screens/Settings';

export default function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  return (
    <NativeRouter>
      <View>
        <View>
          <Link to="/" underlayColor="f0f4f7">
            <Text>Home</Text>
          </Link>
          <Link to="/settings" underlayColor="f0f4f7">
            <Text>Settings</Text>
          </Link>
        </View>
      </View>

      <Routes>
        <Route exact path="/" element={user ? <HomeScreen/> : <LoginScreen setUser={setUser}/>}/>
        <Route path="/home" element={<HomeScreen/>}/>
        <Route path="/login" element={<LoginScreen setUser={setUser}/>}/>
        <Route path="/register" element={<RegistrationScreen setUser={setUser}/>}/>
        <Route path="/settings" element={<SettingsScreen/>}/>
      </Routes>

      {user ? <Footer/> : null}
    </NativeRouter>
  )


}

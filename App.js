import { useState } from 'react';

import { NativeRouter, Route, Routes } from 'react-router-native';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import RegistrationScreen from './screens/Registration';
import SettingsScreen from './screens/Settings';

export default function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  return (
    <NativeRouter>
      {user ? <Header/> : null}

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

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Topbar from './components/Topbar';
import Bottombar from './components/Bottombar';
import Recipebox from './components/Recipebox';

export default function App() {
  return (
    <View style={styles.container}>
      <Topbar/>
      <View>
        <Recipebox/>
        <Recipebox/>
        <Recipebox/>
        <Recipebox/>
      </View>
      <Bottombar/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '14vw',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

import { StyleSheet, View } from 'react-native';

import Topbar from '../components/Topbar';
import Bottombar from '../components/Bottombar';
import Recipebox from '../components/Recipebox';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Topbar/>
            <View style={styles.recipesContainer}>
                <Recipebox/>
                <Recipebox/>
                <Recipebox/>
                <Recipebox/>
            </View>
            <Bottombar/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flexGrow: 1,
      overflow: 'auto',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    recipesContainer: {
      overflow: 'scroll',
    }
  });
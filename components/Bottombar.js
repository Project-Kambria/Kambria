import {StyleSheet, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Bottombar() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Dev navigation */}
            <Text onPress={() => navigation.navigate('Home')}>Home</Text>
            <Text onPress={() => navigation.navigate('Login')}>Login</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        bottom: 0,
        width: '100%',
        height: '11vw',
        backgroundColor: '#6c8d7d',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });
import {StyleSheet, Text, View} from 'react-native';

import Bottombar from '../components/Bottombar';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Text>Project Kambria</Text>
            <Bottombar/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {}
})

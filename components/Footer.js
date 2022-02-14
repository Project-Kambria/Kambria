import { View, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import { Link } from 'react-router-native';


export default function Footer() {
    let [fontsLoaded] = useFonts({'icomoon-svg-icons': require('../assets/fonts/icomoon-svg-icons.ttf')})

    return (
        <View style={styles.container}>
            {/* Ísskápur */}
            <Link to="/">
                <Text style={styles.coolText}>A</Text>
            </Link>

            {/* Myndavél */}
            <Link to="/">
                <Text style={styles.coolText}>C</Text>
            </Link>

            {/* Search */}
            <Link to="/">
                <Text style={styles.coolText}>B</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent:'space-evenly',
        flexDirection: 'row',
        backgroundColor: '#FF9622',
    },
    footBtnText: {
        padding: 10
    },
    coolText: {
      fontFamily: 'icomoon-svg-icons',
      fontSize: 40,
    }
})
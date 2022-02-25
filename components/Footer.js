import { View, StyleSheet, Text } from "react-native";
import { Link } from 'react-router-native';

export default function Footer() {
    return (
        <View style={styles.container}>
            {/* Ísskápur */}
            <Link to="/" activeOpacity={0.4} underlayColor="#1ac4ac">
                <Text style={styles.coolText}>A</Text>
            </Link>

            {/* Myndavél */}
            <Link to="/" activeOpacity={0.4} underlayColor="#1ac4ac">
                <Text style={styles.coolText}>C</Text>
            </Link>

            {/* Search */}
            <Link to="/" activeOpacity={0.4} underlayColor="#1ac4ac">
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
        backgroundColor: '#1ac4ac',
    },
    footBtnText: {
        padding: 10
    },
    coolText: {
      fontFamily: 'icomoon-svg-icons',
      fontSize: 40,
    }
})

import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts } from "expo-font";

export default function Footer(navigationRef) {
    let [fontsLoaded] = useFonts({'icomoon-svg-icons': require('../assets/fonts/icomoon-svg-icons.ttf')})
    return (
        <View style={styles.container}>
            {/* Ísskápur */}
            <TouchableOpacity
            style={styles.footBtnText}
            onPress={() => navigationRef.current?.navigate('')}>
                <Text style={styles.coolText}>A</Text>
            </TouchableOpacity>

            {/* Myndavél */}
            <TouchableOpacity
            style={styles.footBtnText}
            onPress={() => navigationRef.current?.navigate('')}>
                <Text style={styles.coolText}>C</Text>
            </TouchableOpacity>

            {/* Search */}
            <TouchableOpacity
            style={styles.footBtnText}>
                <Text style={styles.coolText}>B</Text>
            </TouchableOpacity>
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

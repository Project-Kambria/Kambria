import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Footer(navigationRef) {
    return (
        <View style={styles.container}>
            {/* Ísskápur */}
            <TouchableOpacity
            style={styles.footBtnText}
            onPress={() => navigationRef.current?.navigate('')}>
                Fridge
            </TouchableOpacity>

            {/* Myndavél */}
            <TouchableOpacity
            style={styles.footBtnText}
            onPress={() => navigationRef.current?.navigate('')}>
                Camera
            </TouchableOpacity>

            {/* Search */}
            <TouchableOpacity
            style={styles.footBtnText}>
                Search
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#acacac',
    },
    footBtnText: {
        padding: 10
    }
})
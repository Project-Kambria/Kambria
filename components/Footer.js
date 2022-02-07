import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-web";

export default function Footer(navigation) {
    return (
        <View style={styles.container}>
            {/* Ísskápur */}
            <TouchableOpacity
            style={styles.footBtnText}
            onPress={() => navigation.navigate('')}/>

            {/* Myndavél */}
            <TouchableOpacity
            style={styles.footBtnText}
            onPress={() => navigation.navigate('')}/>

            {/* Search */}
            <TouchableOpacity
            style={styles.footBtnText}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    footBtnText: {

    }
})
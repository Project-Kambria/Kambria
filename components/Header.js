import { View, StyleSheet, Text, Platform, StatusBar } from "react-native";
import { Link } from 'react-router-native';


export default function Header() {
    return (
        <View style={styles.container}>
            <Link to="/">
                <Text style={styles.headBtnText}>Profile</Text>
            </Link>

            <Link to="/">
                <Text style={styles.headBtnText}>Home</Text>
            </Link>

            <Link to="/settings">
                <Text style={styles.headBtnText}>Settings</Text>
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
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    headBtnText: {
        padding: 10,
    },
})
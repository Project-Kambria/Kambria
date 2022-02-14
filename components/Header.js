import { View, StyleSheet, Text } from "react-native";
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
        backgroundColor: '#FF9622',
    },
    headBtnText: {
        padding: 10
    },
})
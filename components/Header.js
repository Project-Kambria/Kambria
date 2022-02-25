import { View, StyleSheet, Text, Platform, StatusBar } from "react-native";
import { Link } from 'react-router-native';
import { Feather } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.container}>
            <Link to="/" activeOpacity={0.4} underlayColor="#1ac4ac">
                <Text style={styles.headBtnText}><Feather name='user' size={24} color='black' /></Text>
            </Link>

            <Link to="/" activeOpacity={0.4} underlayColor="#1ac4ac">
                <Text style={styles.headBtnText, styles.kambria}>Kambria</Text>
            </Link>

            <Link to="/settings" activeOpacity={0.4} underlayColor="#1ac4ac">
                <Text style={styles.headBtnText}><Feather name='settings' size={24} color='black'/></Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent:'space-between',
        flexDirection: 'row',
        backgroundColor: '#1ac4ac',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },


    headBtnText: {
        padding: 10,
    },
    kambria: {
      fontSize:24,
      fontWeight: "700",
      fontStyle: 'italic',
    },
})

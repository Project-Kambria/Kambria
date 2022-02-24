import { View, StyleSheet, Text } from "react-native";
import { Link } from 'react-router-native';

export default function Footer(props) {
    return (
        <View style={styles.container}>
            <Link to={'/fridge/' + props.uid}>
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

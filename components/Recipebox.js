import {StyleSheet, Text, Image, View} from 'react-native';
import { Link } from 'react-router-native';

export default function Recipebox(props) {
    return (
        <Link to={'/recipe/' + props.id} style={styles.container}>
            <View>
                <Image style={styles.recipeImage} source={{uri: props.image}}/>
                <Text style={styles.text}>{props.name}</Text>
            </View>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        margin: 8,
    },
    recipeImage: {
        width: 300,
        height: 180,
    },
    text: {
        margin: 'auto',
        color: '#fff',
        fontSize: 35,
    }
});
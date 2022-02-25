import {StyleSheet, Text, Image, View} from 'react-native';

export default function Ingredientbox(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.ingredientImage} source={{uri: props.ingr[2]}}/>
            <Text style={styles.text}>{props.ingr[0]}</Text>
            <Text style={styles.text}>{props.ingr[1]}</Text>
        </View>
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
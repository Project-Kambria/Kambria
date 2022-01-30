import {StyleSheet, Text, View, Image} from 'react-native';

export default function Recipebox(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.recipeImage} source={require('../assets/placeholder.png')}/>
          <Text style={styles.text}>{props.name}</Text>
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
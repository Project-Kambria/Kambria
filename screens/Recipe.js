import { useEffect, useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useParams } from 'react-router-native';
import { firebase } from '../database/config';

export default function RecipeScreen() {
    let { id } = useParams();

    const [recipe, setRecipe] = useState('');
    useEffect(() => {
        if (!recipe) {
            getRecipe(id);
        }
    }, []);

    const getRecipe = async (id) => {
        const db = firebase.firestore();
        await db.collection('recipes').doc(id).get()
            .then(snapshot => setRecipe(snapshot.data()))
    }
    
    return (
        <View style={styles.container}>
            <Text>{recipe.title}</Text>
            <Text>{recipe.description}</Text>
            <Text>{recipe.instructions}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {}
})

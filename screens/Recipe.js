import { useEffect, useState } from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { useParams } from 'react-router-native';
import { firebase } from '../database/config';

export default function RecipeScreen() {
    let { id } = useParams();
    
    const [loading, setLoading] = useState(true)
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
        setLoading(false);
    }

    if (loading) {
        return (
          <ScrollView><Text>Loading...</Text></ScrollView>
        )
    } else {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.recipeImage} source={{uri: recipe.image}} resizeMode="cover"/>
                    <Text style={styles.title}>{recipe.title}</Text>
                    <Text style={styles.description}>{recipe.description}</Text>
                    <View style={styles.instructions}>
                        {
                            recipe.instructions.map((item, index) => (
                                <Text
                                    key={index}
                                    style={styles.instructionChild}>
                                        {item}
                                </Text>
                            ))
                        }
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    recipeImage: {
        width: 300,
        height: 300,
        left: 0,
        right: 0,
    },
    title: {
        fontSize: 30,
        margin: 10,
    },
    description: {
        marginBottom: 20,
        fontSize: 17,
    },
    instructions: {
        margin: 5,
    },
    instructionChild: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
    }
})

import { useEffect, useState } from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import { useParams } from 'react-router-native';
import { firebase } from '../database/config';

import Ingredientbox from '../components/Ingredientbox';

export default function FridgeScreen() {
    let { uid } = useParams();

    const [loading, setLoading] = useState(true)
    const [ingredients, setIngredients] = useState('');

    useEffect(() => {
        if (!ingredients) {
            getIngredients(uid);
        }
    }, []);

    const getIngredients = async (uid) => {
        const db = firebase.firestore();
        await db.collection('fridges').doc(uid).get()
            .then(snapshot => setIngredients(snapshot.data()))
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
                {
                    Object.keys(ingredients).map(key => (
                        <Ingredientbox key={key} ingr={ingredients[key]}/>
                    ))
                }
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {}
})

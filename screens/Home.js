import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import { firebase } from '../database/config';

import Recipebox from '../components/Recipebox';
import SearchBar from '../components/Searchbar';

export default function HomeScreen() {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const db = firebase.firestore();
        return db.collection('recipes').onSnapshot((snapshot) => {
          const recipeData = [];
          snapshot.forEach((doc) => recipeData.push({ ...doc.data(), id: doc.id }));
          setRecipes(recipeData);
        });
      }, []);

    return (
        <View>
          <SearchBar/>
        <ScrollView>
            <View style={styles.recipesContainer}>
                {
                    recipes.map((data) => (
                        <Recipebox
                            key = {data.id}
                            name = {data.title}
                            image = {data.image}
                        />
                    ))
                }
            </View>
        </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    recipesContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

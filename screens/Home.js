import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import { firebase } from '../database/config';

import Recipebox from '../components/Recipebox';

export default function HomeScreen(props) {

    let state = {
        // Test data
        recipes: [
            {
                id: 0,
                name: 'Recipe 1',
            },
            {
                id: 1,
                name: 'Recipe 2',
            },
            {
                id: 2,
                name: 'Recipe 3',
            },
            {
                id: 3,
                name: 'Recipe 4',
            },
        ]
    }

    let alertItemName = (item) => {
        alert(item.name)
    }

    return (
        <ScrollView>
            <View style={styles.recipesContainer}>
                {
                    state.recipes.map((item, index) => (
                        <Recipebox 
                            key = {item.id} 
                            name = {item.name}
                            onPress = {() => alertItemName(item)}
                        />
                    ))
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    recipesContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
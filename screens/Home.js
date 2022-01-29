import { StyleSheet, View } from 'react-native';

import Topbar from '../components/Topbar';
import Bottombar from '../components/Bottombar';
import Recipebox from '../components/Recipebox';

export default function HomeScreen() {

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
        <View style={styles.container}>
            <Topbar/>
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
            <Bottombar/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flexGrow: 1,
      overflow: 'auto',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
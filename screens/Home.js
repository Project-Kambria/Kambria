import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import { firebase } from '../database/config';

import Recipebox from '../components/Recipebox';
import SearchBar from '../components/Searchbar';

export default function HomeScreen() {


    const [recipes, setRecipes] = useState([]);
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState("False");
    const [searchList, setSearchList] = useState([]);
    const [constantList, setCL] = useState([]);
    const [states, setstates] = useState([]);
    const backToDefaults = () => {let temp = []; states.forEach((item ,id) => {
      states[id] = true;
    });
    }
    //const updateSearch = () => {recipeData.forEach((i) => {if (i.title.toLowerCase().includes(searchPhrase.toLowerCase())){console.log('test')};})};

    useEffect( () => {setSearchList([]);
      backToDefaults();
      recipes.forEach((i) => {if (searchPhrase == "")
    {setSearchList([]);setSearchList(...constantList); backToDefaults();}
    else if (!(i.title.toLowerCase().includes(searchPhrase.toLowerCase()))){
        // any NON OnSearchHit code here
      states[i.id] = false;
      console.log(i, i.id)
      console.log(searchPhrase, "search");
      console.log(states, "states");


    };})}, [searchPhrase]);


    useEffect(() => {
        const db = firebase.firestore();
        return db.collection('recipes').onSnapshot((snapshot) => {
          const recipeData = [];
          snapshot.forEach((doc) => recipeData.push({ ...doc.data(), id: doc.id }));
          setRecipes(recipeData);
        });
      }, []);

    useEffect(() =>{
    let temp = []
    let tempids = []
    for (let i=0; i!=recipes.length; i++) {temp.push(true);tempids.push(recipes[i].id)}
    setstates(temp)
    setSearchList(tempids);
    setCL(tempids);

    console.log(temp, tempids)
      }, [recipes])

    const renderrecipe = (id, title, image) => {

      if (states[id]){
        return (<Recipebox key = {id} id = {id} name = {title} image = {image} />)
      }
      else {return null}

    }


    return (
        <View>
          <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
          />
        <ScrollView>
            <View style={styles.recipesContainer} id='mainContainer'>
                {
                    recipes.map((data) => (
                      renderrecipe(data.id, data.title, data.image)

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
    show: {
      display: 'flex',
    },
    hide:{
      display: 'none',
    },
  });

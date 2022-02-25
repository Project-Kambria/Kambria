import { useEffect, useState } from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import { firebase } from '../database/config';


export default function ProfileScreen(props) {
    let uid = props.uid;
    console.log(uid)
    
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState('')

    useEffect(() => {
        if (uid != 1) {
            if (!user) {
                getUser(uid);
            }
        }
    }, []);

    const getUser = async (uid) => {
        const db = firebase.firestore();
        await db.collection('users').doc(uid).get()
            .then(snapshot => setUser(snapshot.data()))
        setLoading(false);
    }


    if (loading) {
        if (uid != 1) {
            return (
            <ScrollView>
                <Text>Loading...</Text>
                <Text>Stuck? You're probably a guest user</Text>
            </ScrollView>
            )
        } else {
            return (
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.text}>You are a Guest User!</Text>
                    </View>
                </ScrollView>
            )
        }
    } else {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.text}>ID: {user.id}</Text>
                    <Text style={styles.text}>Email: {user.email}</Text>
                    <Text style={styles.text}>Full Name: {user.fullName}</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    text: {
        fontSize: 20,
    }
})

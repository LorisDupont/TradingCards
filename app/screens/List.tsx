import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { NavigationProp } from '@react-navigation/native';

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

function List({ navigation }: RouterProps) {

  return (
    <View>
        <View>
            <View style={styles.buttonContainer}>
                <Button title='Voir la carte' onPress={() => navigation.navigate('La carte')} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title='Déconnexion' onPress={() => FIREBASE_AUTH.signOut()} />
            </View>
        </View>
    </View>
)
}

export default List
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    },
    buttonContainer: {
        marginTop: 16, 
        marginBottom: 8,
    }
});

import { NavigationProp } from '@react-navigation/native';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { FIREBASE_AUTH } from '../../FirebaseConfig';

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

function Details({ navigation }: RouterProps) {
  return (
    <View>
        <Button title='retour à la liste' onPress={() => navigation.navigate('Liste de cartes')} />
    </View>
  )
}

export default Details
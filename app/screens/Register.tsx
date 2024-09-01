import { View, TextInput, ActivityIndicator, Text, Button, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { NavigationProp } from '@react-navigation/native';

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const Register = ({ navigation }: RouterProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log('response :', response);
        } catch (error: any) {
            console.log('error :', error);
            alert('Connexion échouée: ' + error.message);
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log('response :', response);
        } catch (error: any) {
            console.log('error :', error);
            alert('Inscription échouée: ' + error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>TradingCards</Text>
            <View style={styles.animateBorder}>
                <KeyboardAvoidingView behavior='padding'>
                    <View style={styles.inputContenaire}>
                        <TextInput
                            value={email}
                            style={styles.input}
                            placeholder='Adresse email'
                            placeholderTextColor="white"
                            autoCapitalize='none'
                            onChangeText={(text) => setEmail(text)}
                        />
                        <TextInput
                            value={displayName}
                            style={styles.input}
                            placeholder="Nom d'utilisatssseur"
                            placeholderTextColor="white"
                            autoCapitalize='none'
                            onChangeText={(text) => setDisplayName(text)}
                        />
                        <TextInput
                            value={password}
                            style={styles.input}
                            placeholder='Mot de passe'
                            placeholderTextColor="white"
                            autoCapitalize='none'
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry
                        />
                        { 
                            loading 
                            ? <ActivityIndicator size="large" color="#0000ff" />
                            : (
                            <View>
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity onPress={signIn}>
                                        <Text style={styles.button2}>S'inscrire</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={{color: 'white', textAlign:'center'}}>Ou</Text>
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                        <Text style={styles.button}>Connexion</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            )
                        }
                    </View>
                </KeyboardAvoidingView>
            </View>
        </View>
    );
}

export default Register;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 0,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#10002e'
    },
    animateBorder: {
        borderWidth: 6,
        borderRadius: 10,
        borderColor: 'purple',
        marginHorizontal: 40,
        backgroundColor: 'orange',
      },
    inputContenaire: {
        borderWidth: 6,
        borderRadius: 10,
        borderColor: "purple",
        backgroundColor: '#10002e',
        marginHorizontal: 8,
        marginVertical: 8,
        minHeight: 350,
        paddingVertical: 10,
    },
    input: {
        marginVertical: 10,
        marginHorizontal: 10,
        height: 50,
        borderWidth: 1,
        borderRadius: 100,
        padding: 10,
        backgroundColor: `rgba(255, 193, 27, 0.6)`,
        
    },
    buttonContainer: {
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 1000,
        marginTop: 18, 
        marginBottom: 18,
        height:'auto'
    },
    button: {
        color: "white",
        backgroundColor: 'orange',
        borderRadius: 100,
        fontSize: 20,
        paddingBottom: 6,
        textAlign: 'center',

    },
    button2: {
        color: "white",
        backgroundColor: 'purple',
        borderRadius: 100,
        fontSize: 20,
        paddingBottom: 6,
        textAlign: 'center',

    },
    title: {
        color: "orange",
        fontSize: 50,
        fontWeight: "bold",
        textShadowOffset: {width: 5, height: 4},
        textShadowColor: 'purple',
        textShadowRadius:2,
        textAlign: 'center',
        paddingVertical: 60,
    }
});

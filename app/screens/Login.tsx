import { View, TextInput, ActivityIndicator, Button, StyleSheet, KeyboardAvoidingView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
            <KeyboardAvoidingView behavior='padding'>
                <TextInput
                    value={email}
                    style={styles.input}
                    placeholder='Adresse email'
                    autoCapitalize='none'
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    value={password}
                    style={styles.input}
                    placeholder='Mot de passe'
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
                            <Button title='Connexion' onPress={signIn} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title='Créer un compte' onPress={signUp} />
                        </View>

                    </View>
                    )
                }
            </KeyboardAvoidingView>
        </View>
    );
}

export default Login;

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

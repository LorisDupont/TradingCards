import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import List from './app/screens/Register';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { FIREBASE_AUTH } from './FirebaseConfig';
import Details from './app/screens/Details';
import Register from './app/screens/Register';


const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout () {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name='inscription' component={Register} />
      <InsideStack.Screen name='La carte' component={Details} />
    </InsideStack.Navigator>
  )

}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    })
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? (
          <Stack.Screen
            name='TradingCards'
            component={InsideLayout}
            options={{ headerShown: false }} />
        ) : (
          <>
          <Stack.Screen
              name='Login'
              component={Login}
              options={{ headerShown: false }} />
              <Stack.Screen name='inscription' component={Register}
                options={{ headerShown: false }} />
              </>

        )}
      </Stack.Navigator>      
    </NavigationContainer>
  );
}
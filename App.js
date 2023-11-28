import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthContext from './app/storage/Context';
import { useState } from 'react';
import Home from './app/components/Home';

const Stack = createNativeStackNavigator();

export default function App() {

  const [data, setData] = useState();

  return (
    <><AuthContext.Provider value={{ data, setData }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{
          headerShown: false, // Disable swipe back gesture
        }}>
          <Stack.Screen name="Login" component={Login} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Home" component={Home} options={{ title: '' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

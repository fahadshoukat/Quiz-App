import React from 'react'
import Home from '../screens/Home'
import Quiz from '../screens/Quiz'
import Result from '../screens/Result'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{
                headerStyle: {
                    backgroundColor: "#14213d",
                },
                headerTintColor: '#fff',

            }}>
                <Stack.Screen name="Home" component={Home} options={{
                    title: 'Quiz App',
                }} />
                <Stack.Screen name="Quiz" component={Quiz} />
                <Stack.Screen name="Result" component={Result} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AppNavigator
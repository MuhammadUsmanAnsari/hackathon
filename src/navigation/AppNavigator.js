import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Frontend/Home';
import About from '../screens/Frontend/About';

const AppNavigator = () => {
    const Stack = createStackNavigator()
    const Tab = createBottomTabNavigator()

    // this is stack navigator
    const MyStack = () => {
        return (
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='Start' component={MyTab} />
            </Stack.Navigator>
        )
    }

    // this is tab navigator
    const MyTab = () => {
        return (
            <Tab.Navigator>
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='About' component={About} />
            </Tab.Navigator>
        )
    }



    return (
        <MyStack />
    )
}

export default AppNavigator

const styles = StyleSheet.create({})
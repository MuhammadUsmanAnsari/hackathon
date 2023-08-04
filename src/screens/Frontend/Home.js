import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home({ navigation }) {

    return (
        <View>
            <Text>Home</Text>
            <Button onPress={() => navigation.navigate("About") } title='About' />
            <Text>Testing</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({})
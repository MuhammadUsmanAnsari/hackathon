import React from 'react'
import AppNavigator from './src/navigation/AppNavigator'
import { NavigationContainer } from '@react-navigation/native'
import AuthContextProvider from './src/context/AuthContext'

export default function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <AppNavigator />
      </AuthContextProvider>
    </NavigationContainer>
  )
}

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import ProfileScreen from './screens/Profile';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';
import SearchScreen from './screens/SearchScreen';
import JobDetailScreen from './screens/JobDetail';
import AddAJobScreen from './screens/AddAJobScreen';
import EditAJobScreen from './screens/EditAJobScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EditAJob">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Profile"
          component={ProfileScreen} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
        />
        <Stack.Screen
          name="JobDetail"
          component={JobDetailScreen}
        />
        <Stack.Screen
          name="AddAJob" 
          component={AddAJobScreen}
        />
        <Stack.Screen
          name="EditAJob" 
          component={EditAJobScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}

import { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import MainRoute from "./MainRoute";

import AuthStack from './AuthStack';
import AppStack from './AppStack';

import { useAuth } from '../contexts/AuthContext';
// import Auth from '../screens/Auth';

export default function Router() {

    const { userID } = useAuth();

    return (
        <NavigationContainer>
            {userID ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import SignIn from '../screens/SignIn';
import GettingStart from '../screens/GettingStart';

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="GettingStart"
                component={GettingStart}
            />

            <Stack.Screen
                name="Login"
                component={Login}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
            />
        </Stack.Navigator>
    )
}
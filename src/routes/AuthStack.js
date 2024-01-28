import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Register from "../screens/Register";
import GettingStart from "../screens/GettingStart";

const Stack = createStackNavigator();

export default function AuthStack() {
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
                name="Register"
                component={Register}
            />
        </Stack.Navigator>
    )
}
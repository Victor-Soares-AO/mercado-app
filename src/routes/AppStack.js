import { createStackNavigator } from '@react-navigation/stack';
import Auth from '../screens/Auth';

import MainRoute from './MainRoute';

const Stack = createStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="MainRoute"
                component={MainRoute}
            />
        </Stack.Navigator>
    )
}
import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function Router() {
    return (
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer>
    )
}
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from '@expo/vector-icons';

import MainRoutes from "./main.routes";
import ShoppingCart from "../screens/ShoppingCart";
import Logout from "../components/Logout";
import Profile from "../screens/Profile";

const TabNavigation = createBottomTabNavigator();

export default function AppRoutes(){

    return (
        <TabNavigation.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                    
                },
                tabBarActiveTintColor: '#111',
                tabBarInactiveTintColor: '#999'
            }}
        >
            <TabNavigation.Screen
                name="Main"
                component={MainRoutes}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="home"
                            size={24}
                            color={focused ? "#1C1C1E" : '#999999'}
                        />
                    ),
                    tabBarLabel: "Mercado"
                }}
            />

            <TabNavigation.Screen
                name="ShoppingCart"
                component={ShoppingCart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="shopping-cart"
                            size={24}
                            color={focused ? "#1C1C1E" : '#999999'}
                        />
                    ),
                    tabBarLabel: "Carrinho"
                }}
            />

            <TabNavigation.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="user"
                            size={24}
                            color={focused ? '#1C1C1E' : '#999999'}
                        />
                    ),
                    tabBarLabel: 'Perfil',
                }}
            />
        </TabNavigation.Navigator>
    );
}
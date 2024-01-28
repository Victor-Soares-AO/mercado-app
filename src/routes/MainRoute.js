import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from 'react-native-vector-icons';

import Home from "../screens/Home";
import CreateAlbum from "../screens/CreateAlbum";

// import AlbumScreen from "../screens/AlbumScreen";

import { useAuth } from '../contexts/AuthContext';
import { View } from "react-native";
import FindUser from "../screens/FindUser";

const TabNavigation = createBottomTabNavigator();

const MainRoute = () => {

    const { logout } = useAuth();

    return (
        <TabNavigation.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500'
                },
                tabBarActiveTintColor: '#111',
                tabBarInactiveTintColor: '#999'
            }}
        >
            <TabNavigation.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="image"
                            size={24}
                            color={focused ? "#1C1C1E" : '#999999'}
                        />
                    )
                }}
            />

            <TabNavigation.Screen
                name="CreateAlbum"
                component={CreateAlbum}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="plus-square"
                            size={24}
                            color={focused ? "#1C1C1E" : '#999999'}
                        />
                    ),
                    tabBarLabel: 'Album',
                }}
            />

            <TabNavigation.Screen
                name="FindUser"
                component={FindUser}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="user"
                            size={24}
                            color={focused ? "#1C1C1E" : '#999999'}
                        />
                    ),
                    tabBarLabel: 'Usuarios',
                }}
            />

            <TabNavigation.Screen
                name="Logout"
                component={() => <View/>}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="log-out"
                            size={24}
                            color={focused ? '#1C1C1E' : '#999999'}
                        />
                    ),
                    tabBarLabel: 'Sair',
                }}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        logout();
                    },
                })}
            />

            {/* <TabNavigation.Screen
                name="AlbumScreen"
                component={AlbumScreen}
                options={{
                    tabBarItemStyle: {
                        display: 'none'
                    }
                }}
            /> */}
        </TabNavigation.Navigator>
    );
}

// const MyTabBar = ({ state, descriptors, navigation }) => {
//     return (
//         <View
//             style={{
//                 flexDirection: 'row',
//                 paddingVertical: 12,
//                 position: 'relative',
//                 marginTop: 4
//             }}
//         >
//             <View
//                 style={{
//                     width: '100%',
//                     height: 1,
//                     position: 'absolute',
//                     backgroundColor: '#E0E0E6',
//                 }}></View>

//             {state.routes.map((route, index) => {
//                 const { options } = descriptors[route.key];
//                 const label = options.tabBarLabel !== undefined
//                     ? options.tabBarLabel
//                     : options.title !== undefined
//                         ? options.title
//                         : route.name;
//                 //
//                 //
//                 const TabBarIcon = options.tabBarIcon;
//                 const isFocused = state.index === index;
//                 const style = options.tabBarItemStyle;

//                 const onPress = () => {
//                     const event = navigation.emit({
//                         type: 'tabPress',
//                         target: route.key,
//                         canPreventDefault: true,
//                     });

//                     if (!isFocused && !event.defaultPrevented) {
//                         navigation.navigate(route.name, route.params);
//                     }
//                 }

//                 const onLongPress = () => {
//                     navigation.emit({
//                         type: 'tabLongPress',
//                         target: route.key,
//                     });
//                 }

//                 return (
//                     <TouchableOpacity
//                         key={index}
//                         accessibilityRole="button"
//                         accessibilityState={isFocused ? { selected: true } : {}}
//                         accessibilityLabel={options.tabBarAccessibilityLabel}
//                         testID={options.tabBarTesteID}
//                         onPress={onPress}
//                         onLongPress={onLongPress}
//                         style={{
//                             flex: 1,
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             ...style
//                         }}
//                     >
//                         {TabBarIcon && <TabBarIcon focused={isFocused} />}
//                         <Text style={{ color: isFocused ? "#1C1C1E" : '#999999', fontSize: 16 }}>
//                             {label}
//                         </Text>
//                     </TouchableOpacity>
//                 )
//             })}
//         </View>
//     )
// }

export default MainRoute;
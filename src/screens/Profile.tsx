import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';

import { light } from '../themes/light';

export default function Profile({ navigation }) {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Recupera os dados do usuário do AsyncStorage ao carregar o componente
        getUserData();
    }, []);

    const getUserData = async () => {
        try {
            const storedUserData = await AsyncStorage.getItem('currentUser');
            if (storedUserData) {
                const userData = JSON.parse(storedUserData);
                setUserData(userData);
            }
        } catch (error) {
            console.error('Erro ao recuperar dados do usuário do AsyncStorage:', error);
        }
    };

    const handleLogout = () => {
        // AsyncStorage.removeItem('userData');
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.safeArea}>
                <View style={styles.header}>
                    <View style={styles.avatar}>
                        {userData && userData.fullName && (
                            <Text style={styles.avatarText}>
                                {userData.fullName.charAt(0)}
                            </Text>
                        )}
                    </View>
                </View>

                {userData && (
                    <View style={styles.info}>
                        <Text style={styles.name}>
                            {userData.fullName}
                        </Text>

                        <Text style={styles.number}>
                            {userData.phoneNumber}
                        </Text>
                    </View>
                )}

                <View
                    style={{
                        position: 'absolute',
                        bottom: 24,
                        width: '100%',
                        paddingHorizontal: 20
                    }}
                >
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleLogout}
                    >
                        <Text style={styles.buttonLabel}>
                            Sair da aplicação
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: light.colors.background
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: light.colors.background
    },
    header: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16
    },
    avatar: {
        height: 128,
        width: 128,
        borderRadius: 128,
        backgroundColor: light.colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarText: {
        fontSize: 56,
        fontWeight: '600',
        color: light.colors.white
    },
    info: {
        alignItems: 'center'
    },
    name: {
        fontSize: 28
    },
    number: {
        fontSize: 20
    },
    button: {
        height: 56,
        width: '100%',
        backgroundColor: light.colors.primary,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: light.colors.white
    },
});

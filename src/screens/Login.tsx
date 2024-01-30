import { useEffect, useState } from 'react';
import { 
    Alert,
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { light } from '../themes/light';
import BackButton from '../components/BackButton';

export default function Login() {

    const navigation = useNavigation();

    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(() => {
    //     // Verificar se há dados de usuário no AsyncStorage ao carregar o componente
    //     checkIfUserLoggedIn();
    // }, []);

    // const checkIfUserLoggedIn = async () => {
    //     try {
    //         const userData = await AsyncStorage.getItem('userData');
    //         if (userData) {
    //             // Se houver dados de usuário, você pode redirecionar para a tela principal ou tomar outras ações
    //             navigation.navigate('AppRoutes');
    //         }
    //     } catch (error) {
    //         console.error('Erro ao verificar dados de usuário no AsyncStorage:', error);
    //     }
    // };

    const handleLogin = async () => {
        try {
            const userData = await AsyncStorage.getItem('userData');
    
            if (userData) {
                const dataArray = JSON.parse(userData);
                const user = dataArray.find(
                    (user) => user.phoneNumber === phoneNumber && user.password === password
                );
    
                if (user) {
                    // Salva o usuário logado no novo storage 'currentUser'
                    await AsyncStorage.setItem('currentUser', JSON.stringify(user));
    
                    // Navega para a tela principal
                    navigation.navigate('AppRoutes');
                } else {
                    Alert.alert('Erro', 'Número de telefone ou senha incorretos.');
                }
            } else {
                Alert.alert('Erro', 'Nenhum usuário cadastrado. Cadastre-se primeiro.');
            }
        } catch (error) {
            console.error('Erro ao verificar dados de usuário no AsyncStorage:', error);
        }
    };

    return (
        <View style={styles.container}>
            <BackButton />

            <Text style={styles.title}>
                Acesse a plataforma do mercado
            </Text>

            <View style={styles.group}>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder='Número de telefone'
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                        keyboardType='numeric'
                    />
                    <Feather
                        name='phone'
                        size={24}
                        color={light.colors.placeholder}
                        style={styles.icon}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder='Sua palavra-passe'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />
                    <Feather
                        name='lock'
                        size={24}
                        color={light.colors.placeholder}
                        style={styles.icon}
                    />
                </View>
            </View>

            <View style={styles.gSButton}>
                <TouchableOpacity 
                    onPress={handleLogin}
                    style={styles.button1}
                >
                    <Text style={styles.label1}>
                        Acessar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.label2}>
                        Ainda não possui uma conta?
                    </Text>
                    <Text style={[styles.label2, { color: light.colors.primary }]} >
                        Cadastre-se gratuitamente
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: light.colors.background
    },
    title: {
        fontSize: light.fontSize.xxl,
        color: light.colors.black,
        paddingHorizontal: 32,
        textAlign: 'center',
        lineHeight: 42
    },
    subtitle: {
        fontSize: light.fontSize.lg,
        color: light.colors.black,
        paddingHorizontal: 40,
        marginTop: 4,
        textAlign: 'center',
        lineHeight: 26
    },
    gSButton: {
        paddingHorizontal: 20,
        width: '100%',
        paddingTop: 12


    },
    button1: {
        width: '100%',
        backgroundColor: light.colors.primary,
        height: 56,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'

    },
    button2: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32
    },
    label1: {
        color: light.colors.white,
        fontSize: light.fontSize.lg
    },
    label2: {
        fontSize: light.fontSize.lg
    },
    input: {
        backgroundColor: light.colors.background,
        borderWidth: 1.5,
        borderColor: light.colors.stroke,
        borderRadius: 6,
        width: '100%',
        height: 56,
        fontSize: light.fontSize.lg,
        paddingHorizontal: 16,
        paddingLeft: 50

    },
    group: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 30

    },
    icon: {
        position: 'absolute',
        left: 16,
        top: 16

    },
    inputWrapper: {
        width: '100%',
        marginBottom: 12
    }

})
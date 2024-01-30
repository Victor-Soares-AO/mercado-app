import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { light } from '../themes/light';

export default function GettingStart() {

    const navigation = useNavigation();

    const openLogin = () => navigation.navigate('Login');
    const openSignIn = () => navigation.navigate('SignIn');

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Image source={require("../assets/shopping.png")} />

                <Text style={styles.title}>
                    MERCADO EM CASA
                </Text>

                <Text style={styles.subtitle}>
                    Faça compras nos mercados informais sem sair de casa
                </Text>

                <View style={styles.gSButton}>
                    <TouchableOpacity 
                        onPress={openLogin}
                        style={styles.button1}
                    >
                        <Text style={styles.label1}>
                            Acessar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={openSignIn}
                        style={styles.button2}
                    >
                        <Text style={styles.label2}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
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
    title: {
        fontSize: light.fontSize.xl,
        color: light.colors.primary,
        marginTop: 20,
        fontWeight: '700'
    },
    subtitle: {
        fontSize: light.fontSize.lg,
        color: light.colors.black,
        paddingHorizontal: 32,
        marginTop: 4,
        textAlign: 'center',
        lineHeight: 26,
        fontWeight: '500'
    },
    gSButton: {
        paddingHorizontal: 20,
        width: '100%',
        position: 'absolute',
        bottom: 32
    },
    button1: {
        width: '100%',
        backgroundColor: light.colors.primary,
        height: 56,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button2: {
        width: '100%',
        backgroundColor: light.colors.white,
        height: 56,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        borderWidth: 1.5,
        borderColor: light.colors.primary
    },
    label1: {
        color: light.colors.white,
        fontSize: light.fontSize.lg,
        fontWeight: '600'
    },
    label2: {
        color: light.colors.primary,
        fontSize: light.fontSize.lg,
        fontWeight: '600'
    }
})
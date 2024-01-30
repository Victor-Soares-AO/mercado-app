import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';

import { light } from '../themes/light';
import { Feather } from '@expo/vector-icons'
import BackButton from '../components/BackButton';

export default function SignIn() {
    return (
        <View style={styles.container}>
            <BackButton />

            <Text style={styles.title}>
                Crie uma conta na plataforma
            </Text>

            <View style={styles.group}>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder='Nome completo'
                    />
                    <Feather
                        name='user'
                        size={24}
                        color={light.colors.placeholder}
                        style={styles.icon}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder='Número de telefone'
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
                        placeholder='Palavra-passe'
                    />
                    <Feather
                        name='lock'
                        size={24}
                        color={light.colors.placeholder}
                        style={styles.icon}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder='Confirmar palavra-passe'
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
                <TouchableOpacity style={styles.button1} >
                    <Text style={styles.label1}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>

                <View style={styles.button2}>
                    <Text style={styles.label2}>
                        Já possui uma conta?
                    </Text>

                    <TouchableOpacity>
                        <Text
                            style={[
                                styles.label2,
                                {
                                    color: light.colors.primary,
                                    fontWeight: '600',
                                    marginTop: 2
                                }
                            ]}
                        >
                            Acesse a plataforma
                        </Text>
                    </TouchableOpacity>
                </View>
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
        lineHeight: 42,
        fontWeight: '700'
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
        fontSize: light.fontSize.lg,
        fontWeight: '600'
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
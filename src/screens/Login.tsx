import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { light } from '../themes/light';
import { Feather } from '@expo/vector-icons'
export default function Login() {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    top: 56,
                    left: 20

                }}>

                <View
                >
                    <Feather
                        name='arrow-left'
                        size={32}

                    />
                </View>

            </TouchableOpacity>
            <Text style={styles.title}>
                Acesse a plataforma do mercado
            </Text>

            <View style={styles.group}>
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
                        placeholder='Sua palavra-passe'
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
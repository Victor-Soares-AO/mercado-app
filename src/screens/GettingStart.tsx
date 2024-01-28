import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import { light } from '../themes/light';
import Shopping from '../assets/shopping.png';



export default function GettingStart(){
    const minhaImagem = require('../assets/shopping.png');
    return(
        <View style={styles.container}>
            <Image source={Shopping}/>

            <Text style={styles.title}>
                MERCADO EM CASA
            </Text>

            <Text style={styles.subtitle}>
                Faça compras nos mercados informais sem sair de casa
            </Text>

            <View style={styles.gSButton}>
                <TouchableOpacity style={styles.button1} >
                    <Text style={styles.label1}>
                        Acessar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.label2}>
                        Cadastrar
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
        fontSize: light.fontSize.xl,
        color: light.colors.primary,
        marginTop:20
        

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
        paddingHorizontal:20,
        width:'100%',
        position: 'absolute',
        bottom: 32

    },
    button1: {
        width:'100%',
        backgroundColor: light.colors.primary,
        height: 56,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'

    },
    button2: {
        width:'100%',
        backgroundColor: light.colors.white,
        height: 56,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:12,
        borderWidth: 1.5,
        borderColor: light.colors.primary
        


    },
    label1:{
        color: light.colors.white,
        fontSize: light.fontSize.lg
    },
    label2:{
        color: light.colors.primary,
        fontSize: light.fontSize.lg
    }



})
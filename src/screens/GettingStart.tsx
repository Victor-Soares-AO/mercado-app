import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../themes/light';

export default function GettingStart(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Tela de Getting Start
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background
    },
    title: {
        fontSize: theme.fontSize.xl
    }
})
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import { light } from "../themes/light";

export default function ShoppingCart() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.safeArea}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>
                        Minhas compras
                    </Text>
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
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '600'
    }
})
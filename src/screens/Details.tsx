import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";

import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import { light } from "../themes/light";
import { PRODUCTS } from "../data/products";

type props = {
    route: any;
}

export default function Details({ route }: props) {

    const { id } = route.params;
    const index = JSON.stringify(id);

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => navigation.goBack()}
                    >
                        <View>
                            <Feather
                                name='chevron-left'
                                size={32}
                            />
                        </View>

                        <Text style={{ fontSize: 18, fontWeight: '500' }}>
                            Voltar
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                        }}
                        source={PRODUCTS[Number(index)].img}
                    />
                </View>

                <View
                    style={{
                        paddingHorizontal: 20,
                        paddingVertical: 16,
                        gap: 12
                    }}
                >
                    <Text style={styles.label}>
                        Produto: {PRODUCTS[Number(index)].name}
                    </Text>

                    <View style={styles.line} />

                    <Text style={styles.label}>
                        Categoria: {PRODUCTS[Number(index)].category}
                    </Text>

                    <View style={styles.line} />

                    <Text style={styles.label}>
                        Preço: {PRODUCTS[Number(index)].price} Kz
                    </Text>
                </View>

                <View
                    style={{
                        position: 'absolute',
                        bottom: 24,
                        width: '100%',
                        paddingHorizontal: 20
                    }}
                >
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addButtonLabel}>
                            Adicionar ao carrinho
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

        backgroundColor: light.colors.background
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 16,
    },
    imageContainer: {
        height: 256,
        width: '100%',
        backgroundColor: '#E9E9E9'
    },
    addButton: {
        height: 56,
        width: '100%',
        backgroundColor: light.colors.primary,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addButtonLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: light.colors.white
    },
    label: {
        fontSize: light.fontSize.lg,
        fontWeight: '500'
    },
    line: {
        borderWidth: 0.5,
        borderColor: '#C6C6C6'
    }
})
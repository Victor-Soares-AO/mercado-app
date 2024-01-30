import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    FlatList
} from "react-native";

import ProductCard from '../components/ProductCard';

import { Feather } from '@expo/vector-icons';

import { light } from '../themes/light';
import { PRODUCTS } from "../data/products";

export default function Home() {

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.safeArea}>
                <View style={styles.header}>
                    {/* <Feather
                        name='menu'
                        size={28}
                    /> */}

                    <Text style={styles.headerTitle}>
                        Mercado
                    </Text>

                    {/* <Feather
                        name='shopping-cart'
                        size={28}
                    /> */}
                </View>

                <FlatList
                    data={PRODUCTS}
                    keyExtractor={(item: any) => item.id}
                    renderItem={({ item }) => (
                        <ProductCard 
                            id={item.id}
                            image={item.img}
                            name={item.name}
                            price={item.price}
                            category={item.category}
                        />
                    )}
                    contentContainerStyle={{
                        paddingHorizontal: 20,
                        paddingTop: 24,
                        gap: 20
                    }}
                    numColumns={2}
                    columnWrapperStyle={{
                        flex: 1,
                        justifyContent: "space-between"
                    }}
                />

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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 16
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '600'
    }
})
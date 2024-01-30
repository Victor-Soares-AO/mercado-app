import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { light } from '../themes/light';

type props = {
    id: number;
    name: string;
    price: string;
    image: any;
    category: string;
}

export default function ProductCard({ id, name, price, image, category }: props) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Details', { id })}
            style={styles.container}
        >
            <View style={styles.imageContainer}>
                <Image
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                    }}
                    source={image}
                />
            </View>
            <View style={styles.infomationContainer}>
                <Text style={styles.name} numberOfLines={1}>
                    {name}
                </Text>
                <Text style={styles.price}>
                    {price} kz
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '48%',
        backgroundColor: light.colors.background,
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: {
            width: -2,
            height: 8
        },
        shadowOpacity: 0.125,
        shadowRadius: 3,
    },
    imageContainer: {
        height: 150,
        width: '100%',
        backgroundColor: '#E9E9E9',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    infomationContainer: {
        paddingHorizontal: 16,
        paddingVertical: 12
    },
    price: {
        fontSize: 18,
        fontWeight: '600',
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4
    }
})
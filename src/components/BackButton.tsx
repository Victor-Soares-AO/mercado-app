import { View, Text,TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function BackButton(){

    const navigation = useNavigation();

    return(
        <TouchableOpacity
                style={{
                    position: 'absolute',
                    top: 64,
                    left: 20,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
                onPress={() => navigation.goBack()}
            >
                <View>
                    <Feather name='chevron-left' size={32}/>
                </View>
                
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: '500'
                    }}
                >
                    Voltar
                </Text>
            </TouchableOpacity>
    )
}
import React from 'react';

import { 
    SafeAreaView, // SafeAreaView pega apenas area "segura", funciona apenas no iOS
    View, // View pega toda a área da tela (incluso area de icones do celular), pode ser usado no lugar do SafeAreaView
    Text, 
    Image, 
    TouchableOpacity, // permite alterar opacidade ao toque
    StyleSheet,
    Dimensions, 
    StatusBar 
} from 'react-native';


import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import wateringImg from '../assets/watering.png';
// necessita do custom.d.ts para identificar o arquivo png (typescript)

import colors from '../styles/colors';
import fonts from '../styles/fonts';
// arquivo typescript com as cores e fontes padrão

export function Welcome() {
    const navigation = useNavigation();
    
    function handleStart(){
        navigation.navigate('UserIdentification');
    }
    
    return ( 
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie {'\n'}
                    suas plantas de {'\n'}
                    forma fácil
                </Text>
                
                <Image source={wateringImg} style={styles.image} resizeMode="contain" />
        
                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas. 
                    Nós cuidamos de lembrar você sempre que precisar.
                </Text>
                
                <TouchableOpacity 
                    style={styles.button} 
                    activeOpacity={0.7}
                    onPress={handleStart}
                >
                    <Feather name="chevron-right" style={styles.buttonIcon}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight // pega a altura da barra de status e coloca na margem
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34
    },
    image: {
        height: Dimensions.get('window').width * 0.7 // dimensions.get pega as dimensões da tela 
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
        paddingHorizontal: 10
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 32
    }
});
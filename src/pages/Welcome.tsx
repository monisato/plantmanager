import React, { useState } from 'react';
// useState armazena os estados

import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';
// TouchableOpacity, permite alterar opacidade ao toque
// View pega toda a área da tela (incluso area de icones do celular)
// SafeAreaView pega apenas area "segura", funciona apenas no iOS

// necessita do custom.d.ts para identificar o arquivo (typescript)
import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import { Button } from '../components/Button';

export function Welcome() {
    const [visible, setVisible] = useState(false);

    function handleVisibility(){
        setVisible(true)
    }

    return ( 
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas de {'\n'}
                forma fácil
            </Text>

            {
                visible &&
                <Image source={wateringImg} style={styles.image}/>
            }

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            {/* <Button title="Avançar"/>             */}
            <Button title="imagem" onPress={handleVisibility} />           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10 // margem a mais para android
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38
    },
    image: {
        width: 292,
        height: 284
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
});
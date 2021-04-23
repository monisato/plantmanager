import React, { useEffect, useState } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    FlatList
} from'react-native';
import { EnvironmentButton } from '../components/EnvironmentButton';

import { Header } from '../components/Header';
import api from '../services/api';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

// recebe dados do server.json
interface EnvironmentProps {
    key: string;
    title: string;
}

export function PlantSelect(){
    const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);

    // carregar antes dos elementos da interface, função async dentro do useEffect pois não é possivel colocar função async no useEffect
    useEffect(() => {
        async function fetchEnvironment(){
            const { data } = await api.get('plants_environments'); // await, aguarda carregar dados antes de mostrar pro usuário
            setEnvironments([
                {
                    key:'all',
                    title: 'Todos',
                },
                ... data
            ]);
        }

        fetchEnvironment();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />

                <Text style={styles.title}>
                    Em qual ambiente
                </Text>
                <Text style={styles.subtitle}>
                    você quer colocar sua planta? 
                </Text>
            </View>
            <View>
                <FlatList 
                    data={environments}
                    renderItem={({ item }) => (
                        <EnvironmentButton 
                            title={item.title}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false} // não mostrar barra de rolagem
                    contentContainerStyle={styles.environmentList}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header: {
        padding: 30
    },
    title: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15
    },
    subtitle: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.text,
        lineHeight: 20,
    },
    environmentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32
    }
});
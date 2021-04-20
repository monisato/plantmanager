import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';

// extende propriedades do TouchableOpacityProps para dentro do buttonprops
// colocar {...rest} na função e one for usado
interface ButtonProps extends TouchableOpacityProps {
    title: string;
}
// para receber uma string e alterar o botão, ver no welcome.tsx

export function Button({ title, ...rest } : ButtonProps ){
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
            <Text style={styles.buttonText}>
                { title }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonText: {
        color: colors.white
    }
});
   
   

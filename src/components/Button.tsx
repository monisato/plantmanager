import React from 'react';
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    TouchableOpacityProps 
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

// extende propriedades do TouchableOpacityProps para dentro do buttonprops
// colocar {...rest} na função e one for usado
interface ButtonProps extends TouchableOpacityProps {
    title: string;
}
// para receber uma string e alterar o botão, ver no welcome.tsx

export function Button({ title, ...rest } : ButtonProps ){
    return (
        <TouchableOpacity 
            style={styles.container}
            {...rest}
        >
            <Text style={styles.text}>
                { title }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        borderRadius: 16,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.heading
    }
});
   
   

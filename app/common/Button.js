import React from 'react';
import { TouchableOpacity,Text,StyleSheet } from 'react-native';
const Button = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.textstyle}>
                Login
            </Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button : {
        marginRight: 5,
        marginLeft: 5,
        borderColor: '#007aff',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    textstyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        flex: 1
    }
}

)
export {Button};
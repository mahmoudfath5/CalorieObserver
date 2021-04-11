import React from 'react';
import { View,StyleSheet } from 'react-native';
const card = (props) => {
    return(
        <view style={styles.cardstyle}>
            { props.children }
        </view>
    );
};
const styles = StyleSheet.create({
    cardstyle: {
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOpacity: 0.1
    }
});
export {card};
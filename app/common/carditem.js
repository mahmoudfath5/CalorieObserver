import React from 'react';
import { View,StyleSheet } from 'react-native';
const carditem = (props) => {
    return(
        <view style={styles.carditems}>
            { props.children }
        </view>
    );
};
const styles = StyleSheet.create({
    carditems: {
        padding: 5,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row'
    }
});
export {carditem};
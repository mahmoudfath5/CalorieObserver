// import needed libraries
import React, {Component} from 'react';
import {Text,AppRegistry,StyleSheet} from 'react-native';
import Button from './common/Button'; 
// create component
class Home extends Component {
    render() {
        return(
            <view style={styles.header}>
               <Button/>
            </view>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        backgroundColor : '#efefef',
        height : 80,
        alignItems : 'center',
        justifyContent : 'center'
    },
    text: {
        fontsize : 15,
        fontWeight : 'bold',

    }
})
// Export the component to be available to other components
export default Home;
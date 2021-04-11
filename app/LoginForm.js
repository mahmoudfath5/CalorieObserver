// import needed libraries
import React, {Component} from 'react';
import {Text,AppRegistry,StyleSheet} from 'react-native';
import {Button,card,carditem,input} from './common';
// create component
class LoginForm extends Component {
    render() {
        return(
           <card>
               <carditem>
                   <input 
                   label='Email'
                   placeholder='Enter your email'
                   secureTextEntry={false}
                   onChangeText={(username) => { console.log(username)}}
                   />
               </carditem>
               <carditem>
                   <input 
                   label='Passowrd'
                   placeholder='Enter your Passowrd'
                   secureTextEntry={true}
                   onChangeText={(password) => { console.log(password)}}
                   />
               </carditem>
               <carditem>
                   <Button>Login</Button>
               </carditem>
           </card> 
        );
    }
}

// Export the component to be available to other components
export default LoginForm;
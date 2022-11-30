import React from 'react';
import { View,  TextInput, Text } from 'react-native'


export default class Home extends React.Component {



    constructor (props){
        super(props);
        this.state = {
            city : 'Rennes'
        }


    }

    setCity (city) {
        this.setState({

            city: city
          
            
    })

}


    render() {
        return (


            <View style={{marginTop : 70}}>  
                 <TextInput
                 onChangeText={(text) => this.setCity(text)}
                    style={{height: 40, borderColor : 'red', borderWidth : 1 }}
                    value = {this.state.city}
                />




            </View>


        )
    }




}



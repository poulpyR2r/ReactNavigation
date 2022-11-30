import React from   'react'
import {View, Text, StyleSheet,ActivityIndicator } from 'react-native'


class About extends React.Component {

    render() {
        const Title = "je suis un about"
        return(
            <View>
                <View style={{backgroundColor: 'red'}}>
                    <Text>
                        {Title}
                    </Text>
                </View>
            </View>
        )


    }
   


}


const styles = StyleSheet.create({


})


export default About 
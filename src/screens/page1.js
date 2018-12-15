import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'

export default class page1 extends Component{
    render(){
        return(
            <View>
                <Text>hi Page 1</Text>
                <Button title='Go' onPress={() => this.props.navigation.navigate('page2',{data:'hi from page 1',key:''})} />
            </View>
        )
    }
}
import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'

export default class page1 extends Component{

    componentDidMount(){
        const {params} = this.props.navigation.state;
        const data = params.data;
        const key = params.key;
        alert(data)
    }

    render(){
        return(
            <View>
                <Text>hi Page 2</Text>
                <Button title='Go' onPress={() => this.props.navigation.navigate('page1')} />
            </View>
        )
    }
}
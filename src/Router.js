import React from 'react'
import { StackNavigator } from 'react-navigation'

//Screen Declaration
import page1 from './screens/page1'
import page2 from './screens/page2'

export const ApplicationStack = StackNavigator({
    page1: {
        screen: page1,
        navigationOptions: ({ navigation }) => ({
            title: 'page1',
            header: null
        })
    },
    page2: {
        screen: page2,
        navigationOptions: ({ navigation }) => ({
            title: 'page2',
            header: null
        })
    },
},
{
    initialRouteName: 'page1'
})
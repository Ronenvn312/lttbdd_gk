import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import ListItem from '../component/ListItem'
import Navbar from '../component/Navbar'

export default function Screen1({ navigation }) {
    const route = useRoute()
  return (
    <View style={{display: 'flex', flex: 1}}>
        <View style={{display: 'flex', flex: 0.05, backgroundColor: '#1e90ff', marginTop: 20, paddingTop:10, justifyContent: 'flex-start'}}>
            <Navbar/>
        </View>
        <View style={{display: 'flex', flex: 0.95, backgroundColor: '#1e90ff', marginTop: 20, paddingTop:10}}>
            <ListItem/>
        </View>
    </View>
  )
}

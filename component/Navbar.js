import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { Image, TouchableOpacity, View, } from 'react-native'


export default function Navbar() {
  // const route = useRoute()
  const navigation = useNavigation()
  return (

    <TouchableOpacity
      
      style={{ display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', paddingBottom: 10 }}>
      <TouchableOpacity
      onPress={() => { navigation.navigate('screen1') }}
        style={{display: 'flex', flex: 0.5, width: 50, height: 50, paddingTop:15, paddingLeft: 5}}>
        <Image
          style={{  justifyContent: 'flex-start' }}
          source={require('../image/backhead.png')} />
      </TouchableOpacity>
      
      <TouchableOpacity
        style={{ display: 'flex', flex: 0.5, flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 7, paddingTop: 21, width: 50, height: 50}}>
        <Image
          style={{ justifyContent: 'flex-end' }}
          source={require('../image/bacham.png')} />
      </TouchableOpacity>
    </TouchableOpacity>

  )
}


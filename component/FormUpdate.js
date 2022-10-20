import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function FormUpdate() {
    const route = useRoute()
    const navigation = useNavigation()
    let [name, setName] = useState(route.params.item.name)
    let [info, setInfo] = useState(route.params.item.infomation)
    let [price, setPrice] = useState(route.params.item.price)
    let [image, setImage] = useState(route.params.item.image)
    const updateItem = (id) => {
        fetch(`https://6348caf2a59874146b10f39c.mockapi.io/api/producs/${id}`,{
            method:"PUT",
            body:JSON.stringify({"name": name, "image": image, "price": price, "infomation": info}),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).then((res) => res.json())
        .then((data) => {console.log(data)
            navigation.navigate('Screen1')})
        
    }
  return (
    <View style={{ display: 'flex', flex: 0.4, backgroundColor: '#fff0f5' }}>
    <TouchableOpacity
        style={{ flex: 0.1, justifyContent: 'center', flexDirection: 'row' }}>
        <Text style={{ fontSize: 17, fontStyle: 'bold', color: '#4b0082' }}> Form sản phẩm</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ paddingLeft: 10, flex: 0.9 }}>
        <TextInput
            placeholder='Nhập tên sản phẩm'
            onChangeText={(val) => setName(val)}
            value={name}
            style={{ flex: 0.2 }}
            />
        <TextInput
            value={info}
            onChangeText={(val) => setInfo(val)}
            style={{ flex: 0.2 }}
            placeholder='Nhập thông tin sản phẩm' />
        <TextInput
            value={price+""}
            onChangeText={(val) => setPrice(val)}
            style={{ flex: 0.2 }}
            placeholder='Nhập giá sản phẩm' />
        <TextInput
            onChangeText={(val) => setImage(val)}
            value={image}
            style={{ flex: 0.2 }}
            placeholder='Nhập link ảnh' />
        <TouchableOpacity
            onPress={() => updateItem(route.params.item.id)}
            style={{ backgroundColor: 'red', flex: 0.2, justifyContent: 'center', flexDirection: 'row' }}>
            <Text style={{ textAlign: 'center' }}>
                update
            </Text>
        
        </TouchableOpacity>
    </TouchableOpacity>

</View>
  )
}

import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function ListItem() {
    const navigation = useNavigation()
    const route = useRoute()
    let [data, setData] = useState([])
    let [name, setName] = useState(' ')
    let [info, setInfo] = useState(' ')
    let [price, setPrice] = useState(0)
    let [image, setImage] = useState("http://placeimg.com/640/480/animals")
    const get = () => {
        fetch("https://6348caf2a59874146b10f39c.mockapi.io/api/producs")
            .then((res) => res.json())
            .then((producs) => {
                setData(producs)
                console.log(data)
            })
    }
    useEffect(() => {
        get()
    }, [])
    const add = () => {
        console.log(`name : ${name} infomation: ${info} price: ${price} image: ${image}`)
        fetch("https://6348caf2a59874146b10f39c.mockapi.io/api/producs",
            {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ "image": image, "infomation": info, "name": name, "price": price })
            }
        ).then((res) => res.json())
            .then((data) => { console.log(data)
                get()})
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error);
                throw error;
            });
       
    }
    const deleteItem = (idItem) => {
        fetch(`https://6348caf2a59874146b10f39c.mockapi.io/api/producs/${idItem}`,{
            method: "DELETE",

        }).then((res) => res.json())
        .then((data) => {console.log(data) 
            get()})
        .catch((err) => console.log(err)) 
    }

    return (
        <View style={{ display: 'flex', flex: 1, backgroundColor: 'white' }}>
            <FlatList
                style={{ display: 'flex', flex: 0.8, flexDirection: 'column' }}
                numColumns={1}
                data={data}
                key={(item) => item.id}
                renderItem={({ item }) => (

                    <TouchableOpacity style={{ display: 'flex', flex: 1, flexDirection: 'row', margin: 3 }}>
                        <Image
                            style={{ display: 'flex', flex: 0.2, width: 74, height: 74, flex: 0.2, flexDirection: 'row' }}
                            source={{ uri: item.image }} />
                        <View style={{ flex: 0.6, padding: 5 }}>
                            <Text>
                                {item.name}
                            </Text>
                            <Text>
                                {item.infomation}
                            </Text>
                            <Text>
                                {item.price}
                            </Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <TouchableOpacity
                                onPress={() => deleteItem(item.id)}
                                >
                                <Text> Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('UpdateForm', {
                                    item: item
                                })}
                                >
                                <Text> Update</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )} />
            <View style={{ display: 'flex', flex: 0.4, backgroundColor: '#fff0f5' }}>
                <TouchableOpacity
                    style={{ flex: 0.1, justifyContent: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 17, fontStyle: 'bold', color: '#4b0082' }}> Form sản phẩm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingLeft: 10, flex: 0.9 }}>
                    <TextInput
                        placeholder='Nhập tên sản phẩm'
                        onChangeText={(val) => setName(val)}
                        style={{ flex: 0.2 }}
                        />
                    <TextInput
                        onChangeText={(val) => setInfo(val)}
                        style={{ flex: 0.2 }}
                        placeholder='Nhập thông tin sản phẩm' />
                    <TextInput
                        onChangeText={(val) => setPrice(val)}
                        style={{ flex: 0.2 }}
                        placeholder='Nhập giá sản phẩm' />
                    <TextInput
                        onChangeText={(val) => setImage(val)}
                        value={image}
                        style={{ flex: 0.2 }}
                        placeholder='Nhập link ảnh' />
                    <TouchableOpacity
                        onPress={() => add()}
                        style={{ backgroundColor: 'red', flex: 0.2, justifyContent: 'center', flexDirection: 'row' }}>
                        <Text style={{ textAlign: 'center' }}>
                            Thêm sản phẩm
                        </Text>
                    </TouchableOpacity>
                </TouchableOpacity>

            </View>
        </View>
    )
}

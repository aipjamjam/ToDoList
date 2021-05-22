import React from 'react'
import { FlatList, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { color } from '../../styles'
import { Empty } from '../atoms'

const ListTask = (props) => {

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ marginHorizontal: 20, marginVertical: 8, padding: 16, backgroundColor: '#fff', borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ height: 15, width: 15, borderRadius: 4, backgroundColor: item.status == 2 ? '#40c8f5' : item.status == 3 ? color.gr600 : '#fac841', marginRight: 12 }} />
                    <Text>{item.value}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name='trash-outline' size={24} style={{ paddingRight: 8 }} color='red' onPress={() => props.btnDelete(index)} />
                    {
                        item.status != 3 &&
                        <Icon name='checkmark-circle-outline' size={24} color='green' onPress={() => props.btnDone(index, item.status)} />
                    }
                    {/* <Text style={{ fontWeight: '500', color: 'red' }} onPress={() => props.btnDelete(index)}>Hapus</Text>
                    <Text style={{ fontWeight: '500', color: 'green' }} onPress={() => props.btnDone(index, item.status)}>Selesai</Text> */}
                </View>
            </View>
        )
    }

    return (
        <FlatList
            data={props.data}
            ListEmptyComponent={()=>Empty()}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem} />
    )
}

export default ListTask
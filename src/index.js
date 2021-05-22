import React, { useEffect, useState, useRef } from 'react'
import { View, Text, FlatList, Keyboard, TouchableWithoutFeedback, Dimensions } from 'react-native'
import PagerView from 'react-native-pager-view'
import Icon from 'react-native-vector-icons/Ionicons'
import { ButtonCircle, Input, Empty } from './components/atoms'
import { ListTask } from './components/molecules'
import { color } from './styles'

Icon.loadFont()
const { height, width } = Dimensions.get('screen')

const App = (props) => {

    const [data, setData] = useState([])
    const [select, setSelect] = useState(0)
    const [input, setInput] = useState()
    console.log(data)

    const menuRef = useRef(null)
    const pagerRef = useRef(null)

    const scrollTo = (index) => {
        pagerRef.current.setPage(index)
        menuRef.current.scrollToIndex({ index: index == 0 ? index : index - 1 })
    }

    const deleteTask = (index) => {
        let deleted = [...data]
        deleted.splice(index, 1)
        setData(deleted)
    }

    const inputTask = async () => {
        setData([...data, { status: 1, value: input }])
        setInput(null)
    }

    const doneTask = (index, status) => {
        let change = [...data]
        change.splice(data[index].status = status + 1, 0)
        setData(change)
    }

    const renderStatus = ({ item, index }) => {
        const selected = select == index
        return (
            <TouchableWithoutFeedback onPress={() => scrollTo(index)}>
                <View style={{ padding: 8, borderWidth: 1, borderRadius: 8, borderColor: selected ? '#8c69ff' : color.g400, backgroundColor: selected ? '#e3dbff' : '#fff', marginRight: 10 }}>
                    <Text>{item.status}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: color.g300, paddingTop: width / 3.5 }}>
            <Text style={{ fontSize: 30, color: color.g800, fontWeight: 'bold', paddingLeft: 20 }}>My Task</Text>
            <View>
                <FlatList
                    data={dataStatus}
                    ref={menuRef}
                    horizontal
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderStatus}
                    scrollEnabled={false}
                    style={{ padding: 20 }} />
            </View>
            <PagerView ref={pagerRef} style={{ flex: 1 }} onPageScroll={v => setSelect(v.nativeEvent.position)} initialPage={parseInt(select)} scrollEnabled={true} >
                <ListTask data={data.filter(v => v.status == select + 1)} btnDelete={(v) => deleteTask(v)} btnDone={(index, item) => doneTask(index, item)} />
                <ListTask data={data.filter(v => v.status == select + 1)} btnDelete={(v) => deleteTask(v)} btnDone={(index, item) => doneTask(index, item)} />
                <ListTask data={data.filter(v => v.status == select + 1)} btnDelete={(v) => deleteTask(v)} btnDone={(index, item) => doneTask(index, item)} />
            </PagerView>
            {/* footer */}
            <View style={{ padding: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Input value={input} placeholder='Tambah To Do List' style={{ flex: 1, marginRight: 10 }} onChangeText={(v => setInput(v))} />
                <ButtonCircle onPress={inputTask} />
            </View>
        </View>
    )
}

const dataStatus = [
    {
        id: 1,
        status: 'To Do'
    },
    {
        id: 2,
        status: 'On Progress'
    },
    {
        id: 3,
        status: 'Done'
    },
]

export default App
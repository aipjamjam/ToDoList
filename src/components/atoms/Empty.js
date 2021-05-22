import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import LottieView from 'lottie-react-native'
import { color } from '../../styles'

const { height, width } = Dimensions.get('window')

const Empty = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: width / 3 }}>
            <LottieView
                source={require('../../assets/notfound.json')}
                // source={{uri:'https://halalpedia.oss-ap-southeast-5.aliyuncs.com/assets/images/empty.json'}}
                colorFilters={[{
                    keypath: "button",
                    color: "#FFFFFF"
                }, {
                    keypath: "Sending Loader",
                    color: "#FFFFFF"
                }]}
                style={{
                    width: 200,
                    height: 200,
                }}
                autoPlay
                loop
            />
            <Text style={{ fontWeight: 'bold', color: color.g700 }}>{'Belum ada data Task'}</Text>
        </View>
    )
}

export default Empty
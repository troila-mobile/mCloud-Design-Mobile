import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'

export default class ShareItem extends React.Component {
    static propTypes = {
        item: PropTypes.object,
        onPress: PropTypes.func,
        styles: PropTypes.object,
        title: PropTypes.string,
    }
    static defaultProps = {
        item:{
            image:require('./assets/icon-friend.png'),
            title:'分享',
        },
        styles:{},
        title:null,
        onPress:() => {},
    }
    render() {
        const {
            item,
            styles,
            onPress,
        } = this.props
        return (
            <View style={ItemStyle.itemBackground}>
                <TouchableOpacity
                    style={item.itemButton}
                    onPress={onPress}
                >
                    <View style={styles.itemView}>
                        <Image source={item.image} />
                    </View>
                    <Text style={styles.itemText}>
                        {item.title}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const ItemStyle = StyleSheet.create({
    itemBackground:{
        marginHorizontal:7.5,
        marginVertical:15,
    },
    itemButton:{
        flexDirection:'column',
        justifyContent:'space-around',
        flex:1,
    },

})

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const List = ({ data }) => {
    return (
        data.map((dataPoint, index) => (
            <View key={index} style={styles.listItems} >
                <Text style={styles.itemText} >{dataPoint}</Text>
            </View >
        ))
    )
}

export default List

const styles = StyleSheet.create({
    listItems: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 8,
        marginHorizontal: 12,
        backgroundColor: '#e2b497',
    },
    itemText: {
        textAlign: 'center',
    }
})
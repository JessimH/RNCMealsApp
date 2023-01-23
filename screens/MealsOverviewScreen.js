import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { CATEGORIES, MEALS } from '../data/dummy-data'

// route prop existe for all screen components
const MealsOverviewScreen = ({ route }) => {
    const catId = route.params.categoryId
    const catTitle = route.params.categoryTitle
    const catColor = route.params.categoryColor

    return (
        <View style={[styles.container, { backgroundColor: catColor }]}>
            <Text>{catTitle}</Text>
        </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})
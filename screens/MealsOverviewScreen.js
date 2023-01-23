import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

// route prop existe for all screen components
const MealsOverviewScreen = ({ route }) => {
    const catId = route.params.categoryId
    const catTitle = route.params.categoryTitle
    const catColor = route.params.categoryColor


    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(catId) >= 0
    })

    const renderMealItem = (itemData) => {
        return (
            <MealItem title={itemData.item.title} />
        )
    }

    return (
        <View style={[styles.container, { backgroundColor: catColor }]}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
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
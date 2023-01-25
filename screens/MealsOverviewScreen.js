import { FlatList, StyleSheet, Text, View } from 'react-native'
import { React, useEffect, useLayoutEffect } from 'react'

import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

// route prop existe for all screen components
const MealsOverviewScreen = ({ route, navigation }) => {
    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(catId) >= 0
    })

    const catTitle = CATEGORIES.find((cat) => cat.id === catId).title

    // useLayoutEffect is like useEffect but it is called before the component is rendered to the screen
    useLayoutEffect(() => {
        navigation.setOptions({
            title: catTitle,
        })
    }, [catTitle, navigation])


    const renderMealItem = (itemData) => {
        const item = itemData.item
        const mealsProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        }

        return (
            <MealItem {...mealsProps} />
        )
    }

    return (
        <View style={styles.container}>
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
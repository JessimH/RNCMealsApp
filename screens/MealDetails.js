import { StyleSheet, Text, View } from 'react-native'
import { React, useEffect, useLayoutEffect } from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data'

const MealDetails = ({ route, navigation }) => {
    const mealId = route.params.id

    const mealTitle = MEALS.find((meal) => meal.id === mealId).title

    useLayoutEffect(() => {
        navigation.setOptions({
            title: mealTitle,
        })
    }, [navigation, mealTitle])

    return (
        <View>
            <Text>{mealTitle} : {mealId}</Text>
        </View>
    )
}

export default MealDetails

const styles = StyleSheet.create({})
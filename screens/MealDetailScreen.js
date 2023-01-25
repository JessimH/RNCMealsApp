import { StyleSheet, Text, View, Image } from 'react-native'
import { React, useLayoutEffect } from 'react'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'

const MealDetailScreen = ({ route, navigation }) => {
    const mealId = route.params.id
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    const mealTitle = selectedMeal.title

    useLayoutEffect(() => {
        navigation.setOptions({
            title: mealTitle,
        })
    }, [navigation, mealTitle])

    return (
        <View>
            <Image source={{ uri: selectedMeal.imageUrl }} />
            <Text>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
            />
            <Text>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient, index) => (
                <Text key={index}>{ingredient}</Text>
            ))}
            <Text>Steps</Text>
            {selectedMeal.steps.map((step, index) => (
                <Text key={index}>{step}</Text>
            ))}
        </View>
    )
}

export default MealDetailScreen

const styles = StyleSheet.create({})
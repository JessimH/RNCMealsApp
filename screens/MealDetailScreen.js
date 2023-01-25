import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { React, useLayoutEffect } from 'react'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/Subtitle'
import List from '../components/List'

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
        <ScrollView style={styles.screen}>
            <Image
                source={{ uri: selectedMeal.imageUrl }}
                style={styles.image} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView >
    )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    screen: {
        marginBottom: 18,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        margin: 8
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    }

})
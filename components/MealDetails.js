import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MealDetails = ({ affordability, complexity, duration }) => {
    return (
        <View style={styles.summaryMeal}>
            <Text style={styles.summaryMealText}>{duration} min</Text>
            <Text style={styles.summaryMealText}>{complexity}</Text>
            <Text style={styles.summaryMealText}>{affordability}</Text>
        </View>
    )
}

export default MealDetails

const styles = StyleSheet.create({
    summaryMeal: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
    },
    summaryMealText: {
        marginHorizontal: 8,
    },
})